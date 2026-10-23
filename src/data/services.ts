// Single source for service content. Season statuses are hard-coded for the MVP.
export type Status = 'in-season' | 'booking';

export interface Service {
  id: string;
  name: string;
  band: string; // label in the jump-link band
  price: string;
  status: Status;
  note: string;
  description: string;
}

export const PHONE_DISPLAY = '(734) 450-2400';
export const PHONE_TEL = 'tel:+17344502400';
export const PHONE_SMS = 'sms:+17344502400';
export const EMAIL = 'admin@mangbrothers.com';
export const PARTNER_URL = 'https://apps.mangbrothers.com/connect/';

export const statusLabel: Record<Status, string> = {
  'in-season': 'In season now',
  booking: 'Booking now',
};

export const seasonNote =
  'Fall cleanup visits are underway, and 2026–27 snow contracts are open. Christmas lights book through mid-November.';

export const services: Service[] = [
  {
    id: 'svc-lawn',
    name: 'Lawn care',
    band: 'Lawn care',
    price: 'From $55',
    status: 'in-season',
    note: 'April to November',
    description: 'Weekly or every other week. Mowed, edged, and blown clean.',
  },
  {
    id: 'svc-fall',
    name: 'Fall cleanup',
    band: 'Fall cleanup',
    price: 'From $435',
    status: 'in-season',
    note: 'Visits through November',
    description:
      "Two visits timed to your section's city leaf pickup, with gutter cleaning included on the final visit.",
  },
  {
    id: 'svc-snow',
    name: 'Snow removal',
    band: 'Snow removal',
    price: 'From $550',
    status: 'booking',
    note: 'Starts November 1',
    description:
      'Sixteen pushes and salt for the season, with a capped total. Cleared within 24 hours of the storm ending.',
  },
  {
    id: 'svc-lights',
    name: 'Christmas lights',
    band: 'Christmas lights',
    price: 'From $645',
    status: 'booking',
    note: 'Installed in November',
    description: 'Installed, timed, and taken down in January. Every light lit by November 26.',
  },
  {
    id: 'svc-landscaping',
    name: 'Landscaping',
    band: 'Landscaping',
    price: 'Free on-site quote',
    status: 'in-season',
    note: 'April to November',
    description: 'Mulch, rock, and gravel. Hedge trimming and removal. Bed edging in brick and stone.',
  },
];
