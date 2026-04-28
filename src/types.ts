export interface Service {
  id: string;
  name: string;
  category: 'Lashes' | 'Nails';
  description: string;
  price?: string;
  inDepth?: string;
  duration?: string;
  aftercare?: string[];
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
  { 
    id: 'l1', 
    category: 'Lashes', 
    name: 'Classic Set', 
    description: 'One extension per natural lash for a subtle, natural look.',
    inDepth: 'Our Classic Set is the foundation of lash artistry. We meticulously apply a single premium silk or faux-mink extension to each individual natural lash. This adds length and curl while maintaining a natural, effortless aesthetic perfect for daily elegance.',
    duration: '90 - 120 Minutes',
    aftercare: [
      'Avoid water and steam for the first 24 hours.',
      'Do not use oil-based products around the eyes.',
      'Brush daily with a clean spoolie.',
      'Schedule a fill every 2-3 weeks.'
    ]
  },
  { 
    id: 'l2', 
    category: 'Lashes', 
    name: 'Hybrid Set', 
    description: 'A mix of classic and volume for added texture and fullness.',
    inDepth: 'A masterful blend of Classic and Volume techniques. This set offers the best of both worlds: the definition of classic lashes with the textured fluffiness of volume fans. Ideal for those who want a bit more drama than a classic set without going full volume.',
    duration: '120 - 150 Minutes',
    aftercare: [
      'Cleanse daily with a recommended lash foam.',
      'Sleep on your back to avoid crushing fans.',
      'Avoid mascara on extensions.',
      'Regular fills are essential to maintain the texture.'
    ]
  },
  { 
    id: 'l3', 
    category: 'Lashes', 
    name: 'Volume Set', 
    description: 'Fans of extensions per lash for a fluffy, glam appearance.',
    inDepth: 'For the ultimate glamorous look. We craft custom fans of multiple ultra-lightweight extensions and apply them to each natural lash. This creates a dense, dark lash line with a soft, feathery finish. Completely customized to your desired level of drama.',
    duration: '150 - 180 Minutes',
    aftercare: [
      'Gently detangle fans daily when dry.',
      'Never pull or tug on your extensions.',
      'Use only extension-safe lash sealants.',
      'Avoid high heat (ovens, blow dryers) near eyes.'
    ]
  },
  { 
    id: 'l4', 
    category: 'Lashes', 
    name: 'Mega Volume Set', 
    description: 'The ultimate bold, dense look with lightweight fans.',
    inDepth: 'Boundary-pushing density. Using the thinnest possible fibers, we create large fans to provide a striking, hyper-glamorous look. Despite the volume, these are engineered to be safe for your natural lashes when applied by our master artists.',
    duration: '180 - 210 Minutes',
    aftercare: [
      'Extra care when cleansing due to fan density.',
      'Strict adherence to fill schedules is required.',
      'Only use professional-grade cleansers.',
      'Avoid all eye makeup if possible for longevity.'
    ]
  },
  { 
    id: 'l5', 
    category: 'Lashes', 
    name: 'Cat Eye Effect', 
    description: 'Flared outer corners for a winged, sultry look.',
    inDepth: 'An architectural approach to lash design. We use graduated lengths that peak at the outer corners, creating an elongated, "winged" appearance that lifts the eyes and adds a sultry, sophisticated vibe.',
    duration: '120 - 150 Minutes',
    aftercare: [
      'Focus brushing on the outer flared sections.',
      'Avoid sleeping on your sides.',
      'Keep outer corners especially clean.',
      'Fills recommended every 2 weeks.'
    ]
  },
  { 
    id: 'l6', 
    category: 'Lashes', 
    name: 'Wispy Effect', 
    description: 'Varied lengths for a jagged, strip-lash look.',
    inDepth: 'Inspired by the high-fashion strip-lash look. We integrate "spikes" of longer extensions within a shorter base to create a textured, staggered effect. It provides an airy, dimensional look that is currently trending worldwide.',
    duration: '130 - 160 Minutes',
    aftercare: [
      'Be gentle around the wispier spikes.',
      'Brush with minimal pressure.',
      'Avoid heavy creams on the eyelids.',
      'Maintenance is key to keeping the pattern sharp.'
    ]
  },
  { 
    id: 'l7', 
    category: 'Lashes', 
    name: 'Bottom Lash', 
    description: 'Enhancing the lower lash line for balanced eyes.',
    inDepth: 'The finishing touch for a truly complete look. We apply tiny extensions to your lower lashes to balance the top set, making eyes appear larger and more symmetrical. Perfect for special events or those who want total eye definition.',
    duration: '30 - 45 Minutes',
    aftercare: [
      'Avoid rubbing the bottom of your eyes.',
      'Use a lash-safe precise cleanser.',
      'Be mindful when applying concealer.',
      'Bottom lashes typically last 1-2 weeks.'
    ]
  },
  { 
    id: 'l8', 
    category: 'Lashes', 
    name: 'Anime Set', 
    description: 'Spiky, separated clusters inspired by anime aesthetics.',
    inDepth: 'A bold, artistic style characterized by distinct, wide-set spikes. This creates a wide-eyed, doll-like look that is both playful and high-fashion. It requires expert placement to achieve the iconic "pointed" aesthetic.',
    duration: '150 - 180 Minutes',
    aftercare: [
      'Avoid disturbing the cluster placement.',
      'Use a sealant to keep spikes together.',
      'Avoid all oil-based makeup removers.',
      'Professional removal is highly recommended.'
    ]
  },
  
  // Nails
  { 
    id: 'n1', 
    category: 'Nails', 
    name: 'Gel Nails', 
    description: 'Durable, long-lasting color with a high-shine finish.',
    inDepth: 'Our premium gel manicure uses high-pigment, long-wear formulas cured under LED light. This provides up to 3 weeks of chip-free color with a mirror-like shine that remains flawless from day one to removal.',
    duration: '60 Minutes',
    aftercare: [
      'Apply cuticle oil twice daily.',
      'Do not pick or peel the gel.',
      'Wear gloves when using cleaning products.',
      'Professional removal only to protect nail bed.'
    ]
  },
  { 
    id: 'n2', 
    category: 'Nails', 
    name: 'Acrylic Nails', 
    description: 'Strong extensions sculpted to your desired length.',
    inDepth: 'Classic strength meets modern artistry. We use high-quality liquid and powder to sculpt durable extensions in any shape—stilettos, coffins, or squares. Perfectly balanced for strength and aesthetic elegance.',
    duration: '90 - 120 Minutes',
    aftercare: [
      'Use your nails as jewels, not tools.',
      'Avoid immersing in water for extended periods.',
      'Fills required every 2-3 weeks.',
      'Notify your artist of any lifting immediately.'
    ]
  },
  { 
    id: 'n3', 
    category: 'Nails', 
    name: 'Toe Nails', 
    description: 'Full pedicure service with aesthetic enhancements.',
    inDepth: 'The ultimate luxury for your feet. Includes deep cleaning, cuticle work, skin exfoliation, and a specialized toe-nail enhancement using gel or acrylic for perfectly shaped, long-lasting results.',
    duration: '60 - 90 Minutes',
    aftercare: [
      'Avoid tight-fitting shoes for 24 hours.',
      'Moisturize heels and cuticles daily.',
      'Do not trim your own enhanced toe nails.',
      'Schedule maintenance every 4-6 weeks.'
    ]
  },
  { 
    id: 'n4', 
    category: 'Nails', 
    name: 'Gel X', 
    description: 'Full-coverage soft gel extensions for a natural feel.',
    inDepth: 'The pioneer of soak-off gel extensions. Aprés Gel-X offers a thin, lightweight, and natural-feeling extension that provides the strength of acrylic with the flexibility of gel. Beautifully pre-shaped for consistent perfection.',
    duration: '90 Minutes',
    aftercare: [
      'Avoid soaking nails in hot water.',
      'Keep cuticles hydrated.',
      'Avoid harsh mechanical pressure.',
      'Safe soak-off removal every 3-4 weeks.'
    ]
  },
  { 
    id: 'n5', 
    category: 'Nails', 
    name: 'BIAB Nails', 
    description: 'Builder in a Bottle for natural nail strength and growth.',
    inDepth: 'A game-changer for natural nail lovers. Builder in a Bottle (BIAB) is a soak-off builder gel used to reinforce the natural nail, allowing it to grow long and strong. Perfect for those looking to transition from extensions or bite-prone nails.',
    duration: '60 - 75 Minutes',
    aftercare: [
      'Keep your natural nail edge clean.',
      'Use oil to maintain flexibility.',
      'Regular infills are needed to manage growth.',
      'Avoid using nails to open tabs or cans.'
    ]
  },
  { 
    id: 'n6', 
    category: 'Nails', 
    name: 'Nail Art & More', 
    description: 'Custom designs, chrome, stones, and 3D art.',
    inDepth: 'Where your imagination meets our artistry. From hand-painted masterpieces and holographic chromes to Swarovski crystals and 3D structural art. Each set is a unique piece of wearable couture.',
    duration: 'Artist Dependent (30 - 120+ mins)',
    aftercare: [
      'Extra care around 3D attachments.',
      'Avoid picking at any stones or charms.',
      'Use a straw for drinks with high stains (turmeric/curries).',
      'Contact us if any structural art detaches.'
    ]
  },
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
