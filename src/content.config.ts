import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/guides' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(['roof-boxes', 'roof-bars', 'bike-carriers', 'repairs-parts']),
      image: image(),
      imageAlt: z.string(),
      quickAnswer: z.string(),
      cta: z.enum(['hire', 'used-boxes', 'roof-bars', 'bike-carriers', 'repairs', 'fit-my-car', 'keys']),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      related: z.array(z.string()).default([]),
      keywords: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { guides };
