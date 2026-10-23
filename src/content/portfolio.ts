export type Reflection = { slug: string; title: string; date?: string; excerpt: string; paragraphs: string[] };
export const reflections: Reflection[] = [];
export const graphicWork = [{ title: 'The postcard business', category: 'Graphic design · Postcards', description: 'I previously ran a postcard business. This collection will bring together the designs and the story behind it.', images: [] as {src:string;alt:string;caption?:string}[] }];
export const currentProjects = [{ title: 'Undergraduate thesis', category: 'In progress · Economics', description: 'My undergraduate thesis is in progress. The final topic has not yet been confirmed.' }];
export const about = [
  'I’m Mariam, an Economics undergraduate at Forman Christian College University in Lahore, with a minor in Political Science. I expect to graduate in 2027.',
  'I’m interested in how people live, learn, and find opportunity — and how household circumstances, social norms, and institutions shape those possibilities.',
  'Economics is one part of my life. I also take photographs, write reflections, and make graphic work. I previously ran a postcard business, bringing some of that creative work into something people could hold and send.',
];
