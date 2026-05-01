export interface Testimonial {
  id: string;
  name: string;
  role: string;
  videoUrl: string;
  context: string;
  type: 'speaker' | 'coaching';
}

export const testimonials: Testimonial[] = [
  {
    id: 'peter-hunyth',
    name: 'Peter Hunyth',
    role: 'Client Acquisitions',
    videoUrl: 'https://youtube.com/shorts/Zi3ToMfVHOM?feature=share',
    context: 'Heard me speak',
    type: 'speaker',
  },
  {
    id: 'mana-shigematsu',
    name: 'Mana Shigematsu',
    role: 'Physiotherapist (The Ikaika Method)',
    videoUrl: 'https://youtube.com/shorts/iodNF1Ytes0?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'nancy-wall',
    name: 'Nancy Wall',
    role: 'Personal Power Coach',
    videoUrl: 'https://youtube.com/shorts/-WjhxtBRZM?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'brendan-lucas-spears',
    name: 'Brendan Lucas-Spears',
    role: 'Quantum Coach',
    videoUrl: 'https://youtube.com/shorts/u_xw8B6Y4Ak?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'louise-deland',
    name: 'Louise Deland',
    role: 'Health & Wellness Coach',
    videoUrl: 'https://youtube.com/shorts/vQ_GeKSV5UQ?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'maetreyii',
    name: 'Maetreyii',
    role: 'Sound Healer',
    videoUrl: 'https://youtube.com/shorts/jdvCFWvlQU?feature=share',
    context: 'Testimonial',
    type: 'coaching',
  },
];

// Select top testimonials for homepage display
export const homepageTestimonials = testimonials.slice(0, 3);
