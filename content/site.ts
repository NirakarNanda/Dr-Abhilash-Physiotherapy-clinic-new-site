/* Central clinic content. Phone, address and hours were sourced from the
   clinic's public listings (Google / top-rated.online) in Sept 2026. */

export const CLINIC = {
  brand: "Bijayalakshmi Physiotherapy Clinic",
  shortName: "Bijayalakshmi Physiotherapy",
  nickname: "Healing Here",
  legalName: "Bijayalakshmi Physiotherapy Clinic",
  doctor: "Dr. Abhilash Nanda",
  doctorSuffix: "(PT)",
  tagline:
    "Personalized treatments for injury recovery, chronic pain management, and enhanced physical performance.",
  phoneDisplay: "+91 96589 29599",
  phoneHref: "tel:+919658929599",
  addressLines: ["Patabhadi, near RTO office", "Sonepur, Odisha 762017"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=20.842011,83.899064",
  hours: [
    { days: "Monday – Saturday", time: "8:00 AM – 8:00 PM" },
    { days: "Thursday", time: "8:00 AM – 8:30 PM" },
    { days: "Sunday", time: "8:00 AM – 12:00 PM" },
  ],
  rating: "5.0",
  reviewCount: 76,
} as const;

export interface Step {
  index: string;
  title: string;
  body: string;
}

export const STEPS: Step[] = [
  {
    index: "01",
    title: "Call for appointment",
    body: "Reach out and tell us what hurts — we will find you the earliest suitable slot.",
  },
  {
    index: "02",
    title: "Get a date & serial",
    body: "Your visit is scheduled with a serial number, so there is no waiting-room queue.",
  },
  {
    index: "03",
    title: "Consult your physiotherapist",
    body: "A one-on-one assessment, a clear plan, and treatment that starts the same day.",
  },
];

export interface Service {
  name: string;
  fee: string;
  per: string;
  body: string;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    name: "Physiotherapy Home Visit",
    fee: "₹1000",
    per: "1 session",
    body: "Personalized care in the comfort of your home — full assessment and treatment at your doorstep.",
    featured: true,
  },
  {
    name: "Orthopedic Physiotherapy",
    fee: "₹250",
    per: "1 session",
    body: "Rehabilitation of musculoskeletal injuries and post-surgery recovery — mobility restored, pain reduced.",
  },
  {
    name: "Neurological Physiotherapy",
    fee: "₹250",
    per: "1 session",
    body: "Recover function after stroke, Parkinson's disease and other neurological conditions.",
  },
  {
    name: "Sports Physiotherapy",
    fee: "₹250",
    per: "1 session",
    body: "Prevent and treat sports injuries, sharpen performance, and return to play with confidence.",
  },
  {
    name: "Pediatric Physiotherapy",
    fee: "₹250",
    per: "1 session",
    body: "Gentle, tailored care for children's developmental and physical challenges — motor skills, strength, mobility.",
  },
  {
    name: "Musculoskeletal Physiotherapy",
    fee: "₹250",
    per: "1 session",
    body: "Targeted treatment for disorders of muscles, bones and joints — move freely again.",
  },
];

/** Services from the old "What we provide" list not covered above. */
export const ALSO_OFFERED: string[] = [
  "Check-ups",
  "Geriatric Care",
  "Manual Therapy",
  "Telephone Consultations",
];

export interface Feature {
  name: string;
  body: string;
}

export const FEATURES: Feature[] = [
  {
    name: "Kinesio Taping",
    body: "Supports muscles and joints while allowing full movement — aiding pain reduction and injury prevention.",
  },
  {
    name: "Vestibular Rehabilitation",
    body: "Improves balance and reduces dizziness through specialized exercises.",
  },
  {
    name: "Electrotherapy",
    body: "Uses electrical impulses to reduce pain, improve circulation, and stimulate muscle function.",
  },
  {
    name: "Dry Needling",
    body: "Relieves muscle tension and pain by targeting trigger points with fine needles.",
  },
  {
    name: "Pilates-Based Physiotherapy",
    body: "Enhances core strength and flexibility through tailored Pilates exercises.",
  },
  {
    name: "Joint Mobilization",
    body: "Gentle, skilled movements to improve joint mobility and reduce pain.",
  },
];

export interface Review {
  name: string;
  quote: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Dr. Niharika Jain",
    quote:
      "It's a best place with a humble physio… must visit if you are searching for a physiotherapist.",
  },
  {
    name: "Devarushi Mishra",
    quote:
      "A very professional and meanwhile charming and friendly Dr. Abhilash Nanda fixed my lower back pain. Thank you for your excellent care — the best physiotherapy clinic in Sonpur.",
  },
  {
    name: "Jay Shankar",
    quote:
      "The best physiotherapy clinic in Sonepur. Dr Abhilash sir is very friendly and kindhearted.",
  },
  {
    name: "Smruti Ranjan Sahoo",
    quote:
      "Best clinic for physiotherapeutic treatment available in this locality. Skillful therapist and very well behaved.",
  },
  {
    name: "Manas Ranjan Jyotish",
    quote:
      "It was a great visit. Been suffering from shoulder pain due to a sports injury — feeling relaxed now. Worth recommending.",
  },
  {
    name: "Roshan Samal",
    quote:
      "Cherry on top is that they even call you afterwards for checking your condition.",
  },
];

export interface ResiliencePanel {
  src: string;
  alt: string;
  tag: string;
  title: string;
  body: string;
}

export const RESILIENCE: {
  eyebrow: string;
  titleA: string;
  titleAccent: string;
  lede: string;
  panels: ResiliencePanel[];
} = {
  eyebrow: "Frontline roots",
  titleA: "A Journey of",
  titleAccent: "Resilience",
  lede: "Before the clinic had walls, it had a frontline.",
  panels: [
    {
      src: "/images/covid-internship.png",
      alt: "Dr. Abhilash Nanda in full PPE during his COVID-19 internship",
      tag: "Peak COVID-19",
      title: "Internship on the frontline",
      body: "In the midst of the pandemic, Dr. Abhilash Nanda undertook his internship at Sum Ultimate, Bhubaneswar — specializing in COVID-19 rehabilitation and managing complex recovery cases when it mattered most.",
    },
    {
      src: "/images/clinic-doctor.png",
      alt: "Dr. Abhilash Nanda in his well-equipped Bijayalakshmi Physiotherapy clinic",
      tag: "The clinic",
      title: "The same discipline, every patient",
      body: "That frontline discipline now lives in a well-equipped clinic of his own — the same commitment to care, carried into every session with every patient who walks in.",
    },
  ],
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Resilience", href: "#resilience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Our Videos", href: "#videos" },
  { label: "Visit", href: "#visit" },
  { label: "3D Anatomy", href: "/anatomy" },
] as const;
