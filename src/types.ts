export interface Service {
  id: string;
  name: string;
  category: 'Lashes' | 'Nails';
  description: string;
  price?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const SERVICES: Service[] = [
  // Lashes
  { id: 'l1', category: 'Lashes', name: 'Classic Set', description: 'One extension per natural lash for a subtle, natural look.' },
  { id: 'l2', category: 'Lashes', name: 'Hybrid Set', description: 'A mix of classic and volume for added texture and fullness.' },
  { id: 'l3', category: 'Lashes', name: 'Volume Set', description: 'Fans of extensions per lash for a fluffy, glam appearance.' },
  { id: 'l4', category: 'Lashes', name: 'Mega Volume Set', description: 'The ultimate bold, dense look with lightweight fans.' },
  { id: 'l5', category: 'Lashes', name: 'Cat Eye Effect', description: 'Flared outer corners for a winged, sultry look.' },
  { id: 'l6', category: 'Lashes', name: 'Wispy Effect', description: 'Varied lengths for a jagged, strip-lash look.' },
  { id: 'l7', category: 'Lashes', name: 'Bottom Lash', description: 'Enhancing the lower lash line for balanced eyes.' },
  { id: 'l8', category: 'Lashes', name: 'Anime Set', description: 'Spiky, separated clusters inspired by anime aesthetics.' },
  
  // Nails
  { id: 'n1', category: 'Nails', name: 'Gel Nails', description: 'Durable, long-lasting color with a high-shine finish.' },
  { id: 'n2', category: 'Nails', name: 'Acrylic Nails', description: 'Strong extensions sculpted to your desired length.' },
  { id: 'n3', category: 'Nails', name: 'Toe Nails', description: 'Full pedicure service with aesthetic enhancements.' },
  { id: 'n4', category: 'Nails', name: 'Gel X', description: 'Full-coverage soft gel extensions for a natural feel.' },
  { id: 'n5', category: 'Nails', name: 'BIAB Nails', description: 'Builder in a Bottle for natural nail strength and growth.' },
  { id: 'n6', category: 'Nails', name: 'Nail Art & More', description: 'Custom designs, chrome, stones, and 3D art.' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Lustrous Lash Cleanser',
    price: 25.00,
    description: 'Gentle oil-free foam to keep your extensions pristine.',
    image: 'https://picsum.photos/seed/lashclean/400/400'
  },
  {
    id: 'p2',
    name: 'Strength & Shine Oil',
    price: 18.00,
    description: 'Nourishing cuticle oil with real gold flakes.',
    image: 'https://picsum.photos/seed/nailoil/400/400'
  },
  {
    id: 'p3',
    name: 'Silk Sleep Mask',
    price: 35.00,
    description: 'Protects lashes while you sleep in pure luxury.',
    image: 'https://picsum.photos/seed/silkmask/400/400'
  },
];
