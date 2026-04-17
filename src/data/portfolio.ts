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
    year: '2023–present',
    listImage: 'listimage',
    listImage2x: 'listimage@2x',
    listExt: 'jpg',
    listAlt: 'Ethereum Foundation Projects',
    listBlurb:
      'Improving the user experience of ethereum.org and building tools for the Ethereum ecosystem.',
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
    year: '2020–2022',
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
    tools: 'Adobe Illustrator · Figma · VS Code · Git',
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
      'Visual Design · UX Design · Research · Specification · High Fidelity Mockups · Project Management',
    tools: 'Adobe Illustrator · Adobe XD · Zeplin · Git · ProtoPie',
    resources: 'React Native · Bootstrap · SASS · Jquery',
  },
  {
    slug: 'brpx',
    title: 'Bright Pixel system',
    shortTitle: 'Bright Pixel system',
    year: '2016–2019',
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
    tools: 'Adobe Illustrator · Adobe Photoshop · VS Code · Git',
    resources: 'Netlify · Bootstrap · SASS · Jekyll · paper (yes, physical)',
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
    tools: 'Adobe Illustrator · VS Code · Git',
    resources: 'Django CMS · Bootstrap · SASS · Unsplash photos',
  },
  {
    slug: 'meocloud',
    title: 'MEO cloud',
    shortTitle: 'MEO cloud',
    year: '2014–2016',
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
    org: 'Lead Designer at Sapo',
    roles: 'Lead Designer · UX Designer',
    tools: 'Adobe Illustrator · Adobe Photoshop · Sketch · Git',
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
