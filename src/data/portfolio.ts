export interface PortfolioEntry {
  slug: string;
  title: string;
  shortTitle: string;
  year: string;
  listImage: string;
  listImage2x: string;
  listExt: 'jpg' | 'png';
  listAlt: string;
  listBlurb: string;
  projClass: string;
  topImage: string;
  topImageExt: 'jpg' | 'png';
  topImageAlt: string;
  org?: string;
  roles?: string;
  tools?: string;
  resources?: string;
  technologies?: string;
}

// Order is most-recent-first — same as the existing /portfolio list.
export const portfolio: PortfolioEntry[] = [
  {
    slug: 'ethereum',
    title: 'Ethereum Foundation',
    shortTitle: 'Ethereum Foundation',
    year: '2022-NOW',
    listImage: 'listimage',
    listImage2x: 'listimage@2x',
    listExt: 'jpg',
    listAlt: 'Ethereum Foundation Projects',
    listBlurb:
      'Bringing the creative community online and creating a unique digital experience.',
    projClass: 'proj6',
    topImage: 'top',
    topImageExt: 'jpg',
    topImageAlt: 'Ethereum Foundation',
    org: 'Lead Designer at Ethereum Foundation',
    roles:
      'Visual Design · UX Design · User Research · Front-end HTML/CSS · Print Design',
    tools:
      'Adobe Illustrator · Figma · Git · Penpot · Adobe Photoshop',
    technologies: 'HTML/CSS · Next JS · Tailwind CSS · shadcn',
  },
  {
    slug: 'thu',
    title: 'Trojan Horse was a Unicorn - Digital Transformation',
    shortTitle: 'Trojan horse was a unicorn',
    year: '2020_2022',
    listImage: 'listimage',
    listImage2x: 'listimage@2x',
    listExt: 'jpg',
    listAlt: 'trojan horse was a unicorn',
    listBlurb:
      'Bringing the creative community online and creating a unique digital experience.',
    projClass: 'proj5',
    topImage: 'listimage1',
    topImageExt: 'jpg',
    topImageAlt: 'Trojan Horse was a Unicorn Digital Platform',
    org: 'Head of Digital Design at Trojan Horse was a Unicorn',
    roles:
      'Visual Design · UX Design · Front-end HTML/CSS · High-Fidelity Prototypes · Project Management',
    tools: 'Adobe Illustrator · Figma · Git',
    technologies: 'HTML/CSS · Ruby · Tailwind CSS · React Native',
  },
  {
    slug: 'publico',
    title: 'Público Mobile Applications',
    shortTitle: 'Público Mobile Applications',
    year: '2019',
    listImage: 'listimage',
    listImage2x: 'listimage@2x',
    listExt: 'png',
    listAlt: 'Público Mobile Applications',
    listBlurb:
      'Mobile applications for one of the major newspapers in Portugal.',
    projClass: 'proj1',
    topImage: 'listimage2',
    topImageExt: 'jpg',
    topImageAlt: 'Project Publico apps',
    org: 'Head of design at Bright Pixel',
    roles:
      'Visual Design · UX design · Research · Specification · High Fidelity Mokups · Project management',
    tools: 'Adobe illustrator · Adobe XD · Zepplin · Git · ProtoPie',
    resources: 'React Native · Bootstrap · SASS · Jquery',
  },
  {
    slug: 'brpx',
    title: 'Bright Pixel system',
    shortTitle: 'Bright Pixel system',
    year: '2016_2019',
    listImage: 'listimage',
    listImage2x: 'listimage@2x',
    listExt: 'png',
    listAlt: 'Bright Pixel system',
    listBlurb:
      'A communication system that extends the brand and creates a language.',
    projClass: 'proj2',
    topImage: 'top',
    topImageExt: 'jpg',
    topImageAlt: 'Bright Pixel system',
    org: 'Head of design at Bright Pixel',
    roles: 'Creative Director · Project management',
    tools: 'Adobe illustrator · Adobe Photoshop · MS code · Git',
    resources: 'Netlify · Bootstrap · SASS · jekyll · paper (yes fisical)',
  },
  {
    slug: 'opp',
    title: 'Portugal Participatory Budget',
    shortTitle: 'Portugal Participatory Budget',
    year: '2018',
    listImage: 'listimage',
    listImage2x: 'listimage@2x',
    listExt: 'png',
    listAlt: 'Portugal Participatory Budget',
    listBlurb:
      'A project that gave people the power to help their communities and was accessible to all citizens.',
    projClass: 'proj3',
    topImage: 'topimage',
    topImageExt: 'jpg',
    topImageAlt: 'Portugal Participatory Budget',
    org: 'Head of design at Bright Pixel',
    roles: 'Lead Designer · Project management',
    tools: 'Adobe illustrator · MS code · Git',
    resources: 'Django CMS · Bootstrap · SASS · Unsplash photos',
  },
  {
    slug: 'meocloud',
    title: 'MEO cloud',
    shortTitle: 'MEO cloud',
    year: '2014_2016',
    listImage: 'listimage',
    listImage2x: 'listimage@2x',
    listExt: 'jpg',
    listAlt: 'MEO cloud',
    listBlurb:
      'MEO cloud drive, a Dropbox-like competitor for the local market, built for all screens.',
    projClass: 'proj4',
    topImage: 'topimage',
    topImageExt: 'jpg',
    topImageAlt: 'Meo Cloud',
    org: 'Lead designer at sapo.pt',
    roles: 'Lead Designer · UX Designer',
    tools: 'Adobe illustrator · Adobe Prhotoshop · Sketch · Git',
    resources: 'Django CMS · Bootstrap',
  },
];

export const portfolioBySlug = (slug: string) =>
  portfolio.find((p) => p.slug === slug);

export const portfolioNeighbors = (slug: string) => {
  const index = portfolio.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  // In the existing UI: "next" arrow goes to a *newer* (earlier-index) project,
  // "previous" arrow goes to an older (later-index) project.
  return {
    next: index > 0 ? portfolio[index - 1] : undefined,
    previous: index < portfolio.length - 1 ? portfolio[index + 1] : undefined,
  };
};
