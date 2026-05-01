export interface Testimonial {
  id: string;
  name: string;
  role: string;
  videoUrl: string;
  context: string;
  type: 'speaker' | 'coaching' | 'event';
}

export const testimonials: Testimonial[] = [
  {
    id: 'peter-huynh',
    name: 'Peter Huynh',
    role: 'Client Acquisitions',
    videoUrl: 'https://youtube.com/shorts/Zi3ToMfVHOM?feature=share',
    context: 'Speaker testimonial',
    type: 'speaker',
  },
  {
    id: 'mana-shigematsu',
    name: 'Mana Shigematsu',
    role: 'Physiotherapist (The Ikaika Method)',
    videoUrl: 'https://youtube.com/shorts/iodNF1yTes0?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'nancy-wall',
    name: 'Nancy Wall',
    role: 'Personal Power Coach',
    videoUrl: 'https://youtube.com/shorts/-Wtjhxt8RZM?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'brendan-lucas-seears',
    name: 'Brendan Lucas-Seears',
    role: 'Quantum Coach',
    videoUrl: 'https://youtube.com/shorts/u_xw8B6Y4Ak?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'louise-deland',
    name: 'Louise Deland',
    role: 'Health & Wellness Coach',
    videoUrl: 'https://youtube.com/shorts/yQ_GeKSV5UQ?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'maetreyii',
    name: 'Maetreyii',
    role: 'Sound Healer',
    videoUrl: 'https://youtube.com/shorts/jrdvCFWWlQU?feature=share',
    context: 'Speaker testimonial',
    type: 'speaker',
  },
  {
    id: 'nathan-phillips',
    name: 'Nathan Phillips',
    role: 'The Speaker Event Attendee',
    videoUrl: 'https://youtube.com/shorts/4NSErppvPkY?feature=share',
    context: 'Attendee of The Speaker Event',
    type: 'event',
  },
  {
    id: 'jacqui-mync',
    name: 'Jacqui Mync',
    role: 'Fertility Coach (The Womb Whisperer)',
    videoUrl: 'https://youtube.com/shorts/DB3xu8FWoTc?feature=share',
    context: 'Attendee & speaker of The Speaker Event',
    type: 'event',
  },
  {
    id: 'alex-transcend',
    name: 'Alex Transcend',
    role: 'Identity Coach & Speaker',
    videoUrl: 'https://youtube.com/shorts/2C_0SYc67s0?feature=share',
    context: 'Attendee & speaker of The Speaker Event',
    type: 'event',
  },
  {
    id: 'imogen-hobbs',
    name: 'Imogen Hobbs',
    role: "Men's Empowerment Coach",
    videoUrl: 'https://youtube.com/shorts/O7a1v22K4ds?feature=share',
    context: 'Attendee & speaker of The Speaker Event',
    type: 'event',
  },
  {
    id: 'brad-barnett',
    name: 'Brad Barnett',
    role: 'Brad the Fire Bender — Speaker, Performer & Storytelling Mentor',
    videoUrl: 'https://youtube.com/shorts/lQc-z73Px4E?feature=share',
    context: 'Attendee & speaker of The Speaker Event',
    type: 'event',
  },
  {
    id: 'scott-wallace',
    name: 'Scott Wallace',
    role: 'Breathwork Facilitator, Coach & Speaker',
    videoUrl: 'https://youtube.com/shorts/kC7NgNGMrFU?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'nathan-howe',
    name: 'Nathan Howe',
    role: 'Breathwork Facilitator & Coach',
    videoUrl: 'https://youtube.com/shorts/e2nSsLSfjt4?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'lewis-huckstep',
    name: 'Lewis Huckstep',
    role: 'Coach',
    videoUrl: 'https://youtube.com/shorts/H2TuwvW49rc?feature=share',
    context: 'Coaching testimonial',
    type: 'coaching',
  },
  {
    id: 'richard-asimba',
    name: 'Richard Asimba',
    role: 'Digital Creator',
    videoUrl: 'https://youtube.com/shorts/QyjZSB5OXqg?feature=share',
    context: 'Testimonial',
    type: 'coaching',
  },
  {
    id: 'renae-louise',
    name: 'Renae Louise',
    role: 'Coach',
    videoUrl: 'https://youtube.com/shorts/c7cnXwmshzI?feature=share',
    context: 'Event testimonial',
    type: 'event',
  },
];

// Select top 3 for homepage display (mix of types)
export const homepageTestimonials = [
  testimonials.find(t => t.id === 'peter-huynh')!,
  testimonials.find(t => t.id === 'mana-shigematsu')!,
  testimonials.find(t => t.id === 'alex-transcend')!,
];
