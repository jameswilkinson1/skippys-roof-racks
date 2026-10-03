/**
 * Google reviews: live at build time when configured, static otherwise.
 *
 * To make them dynamic:
 * 1. Create a Google Maps Platform API key with the "Places API (New)" enabled.
 * 2. Set GOOGLE_PLACES_API_KEY in your hosting environment variables.
 * 3. Rebuild on a schedule (e.g. a weekly deploy hook) so the rating, review
 *    count and newest reviews stay fresh. No API key is ever sent to browsers.
 *
 * Without a key the site uses the numbers in src/data/site.ts and the
 * hand-picked reviews in src/data/reviews.ts.
 */
import { site } from '../data/site';

export interface LiveReview {
  author: string;
  authorUrl?: string;
  photo?: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GoogleSummary {
  rating: number;
  reviewCount: number;
  live: LiveReview[];
  source: 'live' | 'static';
}

let cache: Promise<GoogleSummary> | undefined;

export function getGoogleSummary(): Promise<GoogleSummary> {
  cache ??= load();
  return cache;
}

async function load(): Promise<GoogleSummary> {
  const fallback: GoogleSummary = {
    rating: site.google.rating,
    reviewCount: site.google.reviewCount,
    live: [],
    source: 'static',
  };
  const key = import.meta.env.GOOGLE_PLACES_API_KEY;
  if (!key) return fallback;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${site.google.placeId}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
    });
    if (!res.ok) throw new Error(`Places API ${res.status}`);
    const data = await res.json();
    const live: LiveReview[] = (data.reviews ?? [])
      .filter((r: any) => r.rating >= 4 && r.text?.text)
      .map((r: any) => ({
        author: r.authorAttribution?.displayName ?? 'Google user',
        authorUrl: r.authorAttribution?.uri,
        photo: r.authorAttribution?.photoUri,
        rating: r.rating,
        text: r.originalText?.text ?? r.text.text,
        relativeTime: r.relativePublishTimeDescription ?? '',
      }));
    return {
      rating: data.rating ?? fallback.rating,
      reviewCount: Math.max(data.userRatingCount ?? 0, fallback.reviewCount),
      live,
      source: 'live',
    };
  } catch (err) {
    console.warn('[google-reviews] Falling back to static reviews:', (err as Error).message);
    return fallback;
  }
}
