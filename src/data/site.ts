// Single source of truth for site-wide business info, the seasonal promo,
// services + starting prices, and service-area cities. Change values here,
// not in individual pages.

export const business = {
  name: 'Lion Gate Pest Control',
  shortName: 'Lion Gate Pest',
  phone: '(818) 353-4800',
  phoneHref: 'tel:+18183534800',
  smsNumber: '+18183534800',
  email: 'contact@liongatepest.com',
  hours: 'Mon–Fri 9am–5pm',
  foundingYear: 2005,
  rating: '5.0',
  reviewCount: 38,
  facebook: 'https://www.facebook.com/liongatepestcontrol',
  // California Structural Pest Control Board company registration
  spcbRegistration: 'PR 9942',
};

// sms: link with an optional prefilled body. The `?&body=` form prefills on
// both iOS and Android (plain `&body=` only works on iOS).
export function smsHref(body?: string) {
  return body ? `sms:${business.smsNumber}?&body=${encodeURIComponent(body)}` : `sms:${business.smsNumber}`;
}

// Seasonal promotion shown in the homepage hero and across the site.
// To run a new promo, edit these fields. To turn promos off, set active: false
// and every CTA falls back to a plain "request a quote" text.
export const promo = {
  active: true,
  eyebrow: 'Fall Special',
  headline: '50% Off Your First Service',
  code: 'SAVE50',
  terms: 'Offer valid with a 12-month service agreement.',
};

// Where the main "Protect My Home" buttons go.
export const primaryCtaHref = promo.active ? smsHref(promo.code) : smsHref('Hi, I would like a quote');

export type Service = {
  slug: string;
  href: string;
  name: string;
  tagline: string;
  summary: string;
  icon: string;
  image?: string;
  price: { amount?: string; unit?: string; label: string; note: string };
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'pest-control',
    href: '/pest-control/',
    name: 'General Pest Control',
    tagline: 'Year-round protection',
    summary: 'Recurring interior and exterior treatments that stop ants, roaches, spiders, and 40+ common LA pests before they get inside.',
    icon: '🐜',
    image: '/pest-control-hero.jpg',
    price: { amount: '$50', unit: '/mo', label: 'Starting at', note: 'Recurring service plan' },
    features: ['Interior & exterior treatment', '40+ pests covered', 'Free re-service between visits', 'Family & pet friendly products'],
  },
  {
    slug: 'rodent-control',
    href: '/rodent-control/',
    name: 'Rodent Control',
    tagline: 'Mice & rats, handled',
    summary: 'A full inspection, trapping and bait stations, and exclusion recommendations to get rats and mice out — and keep them out.',
    icon: '🐀',
    image: '/rodent-control-hero.jpg',
    price: { label: 'Free Inspection', note: 'Custom quote after inspection' },
    features: ['Full home inspection', 'Trapping & bait stations', 'Entry point identification', 'Follow-up monitoring visits'],
  },
  {
    slug: 'mosquito-control',
    href: '/mosquito-control/',
    name: 'Mosquito Control',
    tagline: 'Take back your yard',
    summary: 'Monthly yard treatments that target the day-biting "ankle biter" mosquitoes that have spread across Los Angeles.',
    icon: '🦟',
    image: '/hero-bg.jpg',
    price: { amount: '$120', unit: '/mo', label: 'Starting at', note: 'Monthly yard treatments' },
    features: ['Foliage & resting-site treatment', 'Standing water inspection', 'Breeding-site larvicide', 'Monthly service in season'],
  },
  {
    slug: 'termite-control',
    href: '/termite-control/',
    name: 'Termite Control',
    tagline: 'Protect your biggest investment',
    summary: 'Licensed termite inspections and targeted treatments for drywood and subterranean termites, plus real estate (escrow) reports.',
    icon: '🪵',
    price: { label: 'Free Inspection', note: 'Written findings & quote' },
    features: ['Drywood & subterranean termites', 'Localized wood treatments', 'Real estate / escrow inspections', 'Licensed by the CA SPCB'],
  },
];

export type City = {
  slug: string;
  name: string;
  /** Short form for headings, e.g. "the Valley" */
  shortName?: string;
  intro: string[];
  areas: string[];
  pests: { name: string; note: string }[];
};

export const cities: City[] = [
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    intro: [
      'From Silver Lake hillsides to Mid-City duplexes, Los Angeles homes deal with a little of everything — Argentine ant trails after the first heat wave, roof rats running the power lines, and cockroaches that travel between units in older buildings.',
      'Lion Gate has been treating LA homes since 2005. Our technicians know which pests show up in which neighborhoods and which season, so treatments target the real problem instead of spraying everything.',
    ],
    areas: ['Silver Lake', 'Los Feliz', 'Echo Park', 'Highland Park', 'Eagle Rock', 'Mid-City', 'Mid-Wilshire', 'Atwater Village'],
    pests: [
      { name: 'Argentine ants', note: 'The most common call we get. Colonies push indoors during heat waves and after rain.' },
      { name: 'German cockroaches', note: 'Common in older multi-unit buildings, where they move between kitchens through shared walls and plumbing.' },
      { name: 'Roof rats', note: 'Travel along utility lines, palms, and ivy, then nest in attics.' },
      { name: 'Ankle-biter mosquitoes', note: 'Invasive day-biting Aedes mosquitoes breed in plant saucers and small containers of water.' },
    ],
  },
  {
    slug: 'burbank',
    name: 'Burbank',
    intro: [
      'Burbank sits right where the Valley floor meets the Verdugo Mountains, and that edge is exactly where pest pressure comes from. Homes near the hills see more rodents and spiders, while the flats get long, hot summers that drive ants indoors.',
      'We service Burbank homes from Magnolia Park bungalows to the Rancho district and the hillside streets above Glenoaks.',
    ],
    areas: ['Magnolia Park', 'Rancho Equestrian District', 'Burbank Hills', 'Media District', 'Downtown Burbank', 'Toluca Lake border'],
    pests: [
      { name: 'Roof rats', note: 'Fruit trees and hillside brush make Burbank prime rat territory, especially in fall.' },
      { name: 'Black widow spiders', note: 'Common in garages, block walls, and woodpiles across the Valley.' },
      { name: 'Argentine ants', note: 'Summer heat sends colonies indoors looking for water.' },
      { name: 'Drywood termites', note: 'Older homes and detached garages are frequent targets.' },
    ],
  },
  {
    slug: 'pasadena',
    name: 'Pasadena',
    intro: [
      "Pasadena's historic craftsman homes are beautiful — and their raised foundations, old-growth wood, and mature landscaping give pests plenty of places to live. Drywood termites, rodents in crawl spaces, and ant trails along foundations are the problems we see most.",
      'We treat homes across Pasadena with methods suited to older construction, and we can inspect crawl spaces and attics as part of any rodent or termite visit.',
    ],
    areas: ['Bungalow Heaven', 'Linda Vista', 'East Pasadena', 'Madison Heights', 'Lower Arroyo', 'Historic Highlands', 'Playhouse Village'],
    pests: [
      { name: 'Drywood termites', note: 'Older wood framing and eaves are prime targets. Look for small piles of pellets.' },
      { name: 'Rodents in crawl spaces', note: 'Raised foundations give mice and rats an easy way under the house.' },
      { name: 'Argentine ants', note: 'Mature landscaping and irrigation support huge colonies.' },
      { name: 'Ankle-biter mosquitoes', note: 'Shady, irrigated yards are ideal breeding ground.' },
    ],
  },
  {
    slug: 'glendale',
    name: 'Glendale',
    intro: [
      'Glendale ranges from dense apartment corridors downtown to canyon homes in Chevy Chase and Verdugo Woodlands. Each comes with its own pests — cockroaches in multi-unit buildings, and rodents, spiders, and termites in the hillside homes.',
      'We service homes and apartment buildings throughout Glendale, from the downtown corridor up into the canyons.',
    ],
    areas: ['Verdugo Woodlands', 'Chevy Chase Canyon', 'Adams Hill', 'Rossmoyne', 'Montrose', 'Downtown Glendale', 'Sparr Heights'],
    pests: [
      { name: 'Roof rats', note: 'Hillside neighborhoods back onto brush that shelters large rat populations.' },
      { name: 'Spiders', note: 'Black widows and other spiders are common around canyon homes and garages.' },
      { name: 'German cockroaches', note: 'Dense apartment buildings let roaches spread from unit to unit.' },
      { name: 'Subterranean termites', note: 'Look for mud tubes along foundations, especially after the rainy season.' },
    ],
  },
  {
    slug: 'santa-monica',
    name: 'Santa Monica',
    intro: [
      "Santa Monica's mild, damp coastal air keeps pests active year-round. Moisture-loving insects like silverfish and American cockroaches thrive near the coast, and ants and rodents don't slow down in winter the way they do inland.",
      'We treat Santa Monica homes, condos, and duplexes with a year-round plan built for coastal conditions.',
    ],
    areas: ['Ocean Park', 'Sunset Park', 'North of Montana', 'Wilshire Montana', 'Mid-City Santa Monica', 'Pico'],
    pests: [
      { name: 'Argentine ants', note: 'Active all year in the mild coastal climate.' },
      { name: 'American cockroaches', note: 'Large roaches that come up from sewers and damp areas near the coast.' },
      { name: 'Roof rats', note: 'Palm trees and dense hedges give them cover and travel routes.' },
      { name: 'Drywood termites', note: 'Coastal homes see steady termite pressure. Swarms often appear in late summer and fall.' },
    ],
  },
  {
    slug: 'beverly-hills',
    name: 'Beverly Hills',
    intro: [
      'Large lots, mature trees, and lush landscaping make Beverly Hills properties beautiful — and give rodents and insects lots of cover. Rats nesting in ivy and palms, ants along irrigated beds, and termites in older estates are the issues we see most.',
      'Our technicians are discreet, show up on time, and work around households, staff, and pets.',
    ],
    areas: ['Beverly Hills Flats', 'Trousdale Estates', 'South of Wilshire', 'Beverly Hills Post Office area'],
    pests: [
      { name: 'Roof rats', note: 'Ivy, palms, and fruit trees give them ideal nesting and travel routes.' },
      { name: 'Argentine ants', note: 'Irrigated landscaping supports large colonies that move toward the house.' },
      { name: 'Termites', note: 'Older and larger homes benefit from regular termite inspections.' },
      { name: 'Ankle-biter mosquitoes', note: 'Fountains, planters, and pool equipment can all breed mosquitoes.' },
    ],
  },
  {
    slug: 'hollywood',
    name: 'Hollywood',
    intro: [
      'Hollywood mixes older apartment buildings on the flats with canyon homes in the hills. That means cockroach and ant problems that spread between units, plus rodents and spiders that come down from the hillsides.',
      'Whether you rent or own, we can set up recurring service for your home or building.',
    ],
    areas: ['Hollywood Hills', 'Beachwood Canyon', 'Whitley Heights', 'Hollywood Dell', 'Franklin Village', 'East Hollywood'],
    pests: [
      { name: 'German cockroaches', note: 'Older multi-unit buildings let roaches move between kitchens.' },
      { name: 'Roof rats', note: 'Canyon homes see rats moving down from hillside brush.' },
      { name: 'Spiders', note: 'Common under decks and in garages and crawl spaces in the hills.' },
      { name: 'Argentine ants', note: 'Trail indoors in summer heat and after rain.' },
    ],
  },
  {
    slug: 'westwood',
    name: 'Westwood',
    intro: [
      'Westwood has everything from high-rise condos along Wilshire to single-family homes in Westwood Hills. In buildings, ants and cockroaches travel easily between units. In houses, rodents and termites are the bigger concern.',
      'We service Westwood homes and condos with recurring plans and one-time treatments.',
    ],
    areas: ['Westwood Village', 'Westwood Hills', 'Little Holmby', 'Wilshire Corridor', 'Westwood Gardens'],
    pests: [
      { name: 'Argentine ants', note: 'Persistent in condos and homes alike, especially in summer.' },
      { name: 'German cockroaches', note: 'Spread through shared walls and plumbing in multi-unit buildings.' },
      { name: 'Roof rats', note: 'Mature trees and hedges in the residential streets give them cover.' },
      { name: 'Drywood termites', note: 'A steady concern in older wood-framed homes.' },
    ],
  },
  {
    slug: 'malibu',
    name: 'Malibu',
    intro: [
      "Malibu homes sit right up against open hillside, canyon brush, and the coast — so rodents, spiders, and termites are a constant. Wildland edges bring rats and mice to the house, and coastal moisture keeps insects active all year.",
      'We schedule Malibu visits in advance so your service stays consistent and on time.',
    ],
    areas: ['Point Dume', 'Malibu Park', 'Big Rock', 'Carbon Beach', 'Malibu Canyon', 'Las Flores Canyon'],
    pests: [
      { name: 'Rats & mice', note: 'Homes along open brush and canyons see heavy rodent pressure, especially in fall.' },
      { name: 'Spiders', note: 'Black widows and other spiders are common around decks, garages, and outbuildings.' },
      { name: 'Drywood termites', note: 'Coastal wood structures see steady termite activity.' },
      { name: 'Ants', note: 'Ants trail toward kitchens and bathrooms looking for moisture.' },
    ],
  },
  {
    slug: 'la-canada-flintridge',
    name: 'La Cañada Flintridge',
    shortName: 'La Cañada',
    intro: [
      'Tucked against the Angeles National Forest, La Cañada Flintridge homes share a fence line with real wilderness. Rodents, spiders, and other pests move in from the foothills, and big shady lots with water features can breed mosquitoes.',
      'We provide recurring pest and rodent protection built for foothill properties, plus termite inspections for the many older homes in the area.',
    ],
    areas: ['Flintridge', 'Upper La Cañada', 'Descanso area', 'Foothill Blvd corridor', 'Angeles Crest area'],
    pests: [
      { name: 'Rats & mice', note: 'Foothill brush and oak woodland shelter large rodent populations.' },
      { name: 'Black widow spiders', note: 'Common in garages, block walls, and outdoor storage.' },
      { name: 'Ankle-biter mosquitoes', note: 'Fountains, ponds, and shady planters can all breed them.' },
      { name: 'Termites', note: 'Older wood homes on large lots benefit from regular inspections.' },
    ],
  },
  {
    slug: 'san-fernando-valley',
    name: 'San Fernando Valley',
    shortName: 'the Valley',
    intro: [
      "Valley summers regularly top 100°F, and heat drives pests indoors looking for water and shade. Ant invasions, black widows in garages, and roof rats in backyard fruit trees are the calls we get most from Valley homeowners.",
      'Our technicians run routes through the Valley every week, so we can usually get you on the schedule fast.',
    ],
    areas: ['Sherman Oaks', 'Studio City', 'Encino', 'Van Nuys', 'North Hollywood', 'Woodland Hills', 'Tarzana', 'Valley Village'],
    pests: [
      { name: 'Argentine ants', note: 'Heat waves send whole colonies indoors looking for water.' },
      { name: 'Black widow spiders', note: 'Very common in Valley garages, block walls, and patio furniture.' },
      { name: 'Roof rats', note: 'Citrus and avocado trees are a favorite food source and travel route.' },
      { name: 'Ankle-biter mosquitoes', note: 'Invasive Aedes mosquitoes are now established across the Valley.' },
    ],
  },
];

export const cityHref = (c: City) => `/service-areas/${c.slug}/`;

// Real photos of work go here as they come in. Shown in the homepage
// "Recent work" gallery.
export const workPhotos: { src: string; alt: string }[] = [
  { src: '/hero-bg.jpg', alt: 'Lion Gate technician treating the exterior of a Los Angeles home' },
  { src: '/pest-control-hero.jpg', alt: 'Ant trail along a kitchen baseboard' },
  { src: '/rodent-control-hero.jpg', alt: 'Rodent control inspection' },
];

// Featured Google reviews (shown on the homepage and city pages).
export const featuredReviews = [
  "I have been with this company for years. I had a very bad ant problem — once I started pest control with every other month service, we have not had any ants. Tom and Rick are great, they are honest. What I like about Lion Gate is they not only do pest, they also do termites and rodent work. I highly recommend Lion Gate.",
  "Absolutely amazing service. Came in, discovered the problem, got it all done diligently. They explained all about what they use and how it will work. Answered any and all questions and were an absolute delight to correspond with. Would give a 10/10 if I could.",
  "It's been a year we are working with Lion Gate and they are doing a great job with great price. Tom was very friendly and did a great job today. I'm happy with the service.",
];

// FAQPage structured data for pages that show an FAQ list.
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// Service structured data for service pages.
export function serviceSchema(s: Service, areaNames: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: s.name,
    name: `${s.name} in Los Angeles`,
    description: s.summary,
    provider: { '@id': 'https://www.liongatepest.com/#business' },
    areaServed: areaNames.map((name) => ({ '@type': 'City', name })),
    url: `https://www.liongatepest.com${s.href}`,
  };
}
