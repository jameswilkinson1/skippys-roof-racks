/**
 * Central site settings: the one file to edit for contact details, hours,
 * ratings and hire prices. Everything on the site reads from here.
 */

export const site = {
  name: "Skippy's Roof Racks",
  legalName: "Skippy's Roof Racks Ltd",
  url: 'https://www.skippysroofracks.co.uk',
  tagline: 'Thule roof boxes, roof bars & bike carriers: hire, new & used, fitted free',
  since: 2012,
  companyNumber: '08265379',
  vatNumber: 'GB 143456321',

  phone: '01473 785810',
  phoneHref: 'tel:+441473785810',
  email: 'info@skippysroofracks.co.uk',
  /** Set to a number like '447921383381' to show WhatsApp buttons. Leave empty to hide them. */
  whatsapp: '',

  address: {
    line1: 'Units 3 & 4 Tuddenham Hall',
    line2: 'Grundisburgh Road',
    locality: 'Tuddenham',
    town: 'Ipswich',
    county: 'Suffolk',
    postcode: 'IP6 9DD',
    country: 'GB',
  },
  geo: { lat: 52.095759, lng: 1.2098861 },

  hours: [
    { days: 'Monday – Friday', short: 'Mon–Fri', open: '08:30', close: '16:00', schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { days: 'Saturday', short: 'Sat', open: '09:00', close: '12:00', schemaDays: ['Saturday'] },
    { days: 'Sunday', short: 'Sun', open: null, close: null, schemaDays: ['Sunday'] },
  ],

  /** Fallback numbers used when the live Google fetch isn't configured (see src/lib/google-reviews.ts). */
  google: {
    placeId: 'ChIJGTQXNCqf2UcRRfYaZdoSLLw',
    rating: 5.0,
    reviewCount: 280,
    mapsUrl: 'https://maps.google.com/?cid=13559233307314157125',
    reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJGTQXNCqf2UcRRfYaZdoSLLw',
    writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJGTQXNCqf2UcRRfYaZdoSLLw',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.1193740341755!2d1.2098860999999999!3d52.095759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d99f2a34173419%3A0xbc2c12da651af645!2sSkippy%27s%20Roof%20Racks%20LTD!5e0!3m2!1sen!2suk!4v1709196447066!5m2!1sen!2suk',
  },

  ebay: {
    seller: 'skid-1972',
    storeUrl: 'https://www.ebay.co.uk/str/skippysroofracks',
    feedbackUrl: 'https://www.ebay.co.uk/str/skippysroofracks?_tab=feedback',
    positive: '100%',
    feedbackCount: '30,000+',
    itemsSold: '71,000+',
  },

  social: {
    facebook: 'https://www.facebook.com/p/Skippys-Roof-Racks-61585189845897/',
  },

  thule: {
    fitGuideUrl: 'https://www.thule.com/en-gb/roof-rack',
    claim: 'The only official Thule Service Centre in the UK',
  },

  /**
   * Form handling: create a free access key at https://web3forms.com using
   * info@skippysroofracks.co.uk and paste it here (it's safe to be public).
   */
  forms: {
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  },
} as const;

/**
 * HIRE: PLACEHOLDER prices and terms. Replace with Skippy's real figures,
 * then set `pricesConfirmed: true` to remove the "guide prices" note.
 */
export const hire = {
  pricesConfirmed: false,
  deposit: '£50 refundable security deposit', // PLACEHOLDER
  minimumHire: '3 days', // PLACEHOLDER
  packages: [
    {
      id: 'box-bars',
      name: 'Roof box + roof bars',
      popular: true,
      blurb: 'The complete set-up: Thule box, bars and the right fitting kit for your car, fitted free.',
      prices: [
        { period: 'Up to 4 days', price: '£75' }, // PLACEHOLDER
        { period: '1 week', price: '£95' }, // PLACEHOLDER
        { period: '2 weeks', price: '£135' }, // PLACEHOLDER
        { period: 'Extra week', price: '£40' }, // PLACEHOLDER
      ],
    },
    {
      id: 'box',
      name: 'Roof box only',
      popular: false,
      blurb: 'Already have roof bars? Hire just the box and we’ll fit it to your bars.',
      prices: [
        { period: 'Up to 4 days', price: '£55' }, // PLACEHOLDER
        { period: '1 week', price: '£70' }, // PLACEHOLDER
        { period: '2 weeks', price: '£100' }, // PLACEHOLDER
        { period: 'Extra week', price: '£30' }, // PLACEHOLDER
      ],
    },
    {
      id: 'bars',
      name: 'Roof bars only',
      popular: false,
      blurb: 'Thule bars and fitting kit for your car, ready for your own box, bikes or kayak.',
      prices: [
        { period: 'Up to 4 days', price: '£35' }, // PLACEHOLDER
        { period: '1 week', price: '£45' }, // PLACEHOLDER
        { period: '2 weeks', price: '£60' }, // PLACEHOLDER
        { period: 'Extra week', price: '£20' }, // PLACEHOLDER
      ],
    },
  ],
  /** PLACEHOLDER fleet: replace with the actual boxes in the hire fleet. */
  fleet: [
    { size: 'Medium', litres: 'approx. 400 litres', fits: 'Weekend bags for a couple, or a family’s soft bags and coats', bestFor: 'Hatchbacks & small estates' },
    { size: 'Large', litres: 'approx. 450–500 litres', fits: '3–4 medium suitcases or soft bags, plus a pushchair', bestFor: 'Family estates & SUVs' },
    { size: 'Extra large', litres: 'approx. 600 litres', fits: 'Family holiday luggage, camping kit or skis up to around 2 m', bestFor: 'Large SUVs, MPVs & vans' },
  ],
  included: [
    'Genuine Thule roof box, roof bars and the correct fitting kit for your car',
    'Fitted for you at our Tuddenham workshop and removed when you return it',
    'A quick demo of locking, loading and opening from either side',
    'Keys, internal straps and advice on packing and roof load',
  ],
};

export const nav = [
  { label: 'Hire', href: '/roof-box-hire/' },
  {
    label: 'Shop',
    href: '/used-thule/',
    children: [
      { label: 'Used & ex-display Thule', href: '/used-thule/' },
      { label: 'Roof boxes', href: '/thule-roof-boxes/' },
      { label: 'Roof bars & fitting kits', href: '/thule-roof-bars/' },
      { label: 'Bike carriers', href: '/thule-bike-carriers/' },
      { label: 'Dog crates, child seats & more', href: '/more-thule/' },
      { label: 'Spare parts & keys', href: '/thule-spare-parts/' },
    ],
  },
  { label: 'Fitting', href: '/fitting/' },
  { label: 'Repairs', href: '/thule-repairs/' },
  { label: 'Fit my car', href: '/which-roof-bars-fit-my-car/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'About', href: '/about/' },
] as const;

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.locality}, ${site.address.town} ${site.address.postcode}`;
export const yearsTrading = new Date().getFullYear() - site.since;
