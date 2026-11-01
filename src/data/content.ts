export interface NavItem {
  readonly label: string;
  readonly to: string;
}

/** Order used by the floating pill navigation. */
export const PRIMARY_NAV: readonly NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Collection', to: '/collection' },
  { label: 'Contact us', to: '/contact' },
];

/** Order used by the footer directory (Collection precedes Gallery in the design). */
export const FOOTER_NAV: readonly NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Collection', to: '/collection' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact us', to: '/contact' },
];

/* ───────────────────────── Company ───────────────────────── */

export const COMPANY = {
  name: 'FGM Gold Mining Limited',
  tagline: ['Disciplined geology.', 'Accountable operations.'],
  intro:
    'FGM Gold Mining Limited is a stage gold company holding 5 exploration and mining licences across jurisdiction. FGM is building a portfolio of [open pit / underground] gold assets on disciplined geology, transparent reporting, and operating standards that survive scrutiny. Headquartered in city.',
} as const;

export const CONTACT_DETAILS = {
  email: 'smarizini@gmail.com',
  telephone: '+233201749300 / +2335454240',
  addressLines: ['16 NETFLIX STREET', 'MADINA ESTATE OFF IPS ROAD', 'EAST LEGON', 'ACCRA, GHANA'],
} as const;

/* ───────────────────────── Home ───────────────────────── */

export const HOME_HERO = {
  title: 'Gold, without the guesswork.',
  summary:
    'A gold portfolio built on disciplined geology, transparent reporting, and operating standards that survive scrutiny.',
} as const;

export const MINING_SEQUENCE = 'Explore → Verify → Design → Permit → Produce → Rehabilitate';

/* ───────────────────────── About ───────────────────────── */

export const ABOUT_FOUNDATION = {
  heading: 'We are geologists, engineers, and operators',
  description:
    "FGM Gold Mining Limited was incorporated in 2010 to do one thing: build a gold company in [jurisdiction] that doesn't need excuses.",
  facts: [
    { label: 'Incorporated', value: '2010' },
    { label: 'Headquarters', value: 'EAST LEGON, ACCRA' },
  ],
} as const;

export interface Belief {
  readonly principle: string;
  readonly explanation: string;
}

export const BELIEFS: readonly Belief[] = [
  {
    principle: 'The orebody is the boss.',
    explanation:
      'No amount of narrative fixes bad geology. We follow the data, and when the data says stop, we stop.',
  },
  {
    principle: 'Permits are earned early.',
    explanation: 'Community consent and environmental baseline work begin at discovery.',
  },
  {
    principle: 'Costs are a moral issue.',
    explanation: 'Every dollar wasted is a dollar not spent on drilling, safety, or rehabilitation.',
  },
  {
    principle: 'Closure is part of the plan.',
    explanation: 'Not an afterthought, not a bond posted at the end. Designed in from day one.',
  },
];

/* ───────────────────────── Collection ───────────────────────── */

export interface LicenceRecord {
  readonly reference: string;
  readonly name: string;
  readonly type: string;
  readonly jurisdiction: string;
  readonly stage: string;
}

/** Five placeholder licences; swap in real register data when confirmed. */
export const LICENCES: readonly LicenceRecord[] = ['01', '02', '03', '04', '05'].map((reference) => ({
  reference,
  name: '[Licence name]',
  type: '[Exploration / mining]',
  jurisdiction: '[jurisdiction]',
  stage: '[Asset stage]',
}));

export interface OperatingStage {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export const OPERATING_STAGES: readonly OperatingStage[] = [
  {
    number: '01',
    title: 'Explore',
    description:
      'Mapping, soil geochemistry, and geophysics define targets. Oriented diamond core confirms geometry and grade continuity. Targets that fail review are dropped.',
  },
  {
    number: '02',
    title: 'Verify',
    description:
      'Assays duplicated, certified standards inserted, blanks and coarse rejects run. Independent accredited lab. QA/QC protocol published.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Metallurgical test work and pit or stope optimisation drive the plan. Conservative cut-off grades and realistic recovery assumptions.',
  },
  {
    number: '04',
    title: 'Permit',
    description:
      'Baseline environmental and social studies from discovery. Early engagement with [regulator], landowners, and host communities.',
  },
  {
    number: '05',
    title: 'Produce',
    description:
      'Conventional [open pit/underground] mining. [Process route]. On-site doré poured and shipped under chain of custody to [refiner].',
  },
  {
    number: '06',
    title: 'Rehabilitate',
    description: 'Progressive rehabilitation concurrent with mining.',
  },
];

/* ───────────────────────── Shared ───────────────────────── */

export const CONTACT_INVITATION_TITLE = 'Good questions deserve clear answers.';
