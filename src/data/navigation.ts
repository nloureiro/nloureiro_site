export interface NavItem {
  text: string;
  url: string;
}

export const navigation: NavItem[] = [
  { text: 'about', url: '/about' },
  { text: 'work', url: '/portfolio' },
  { text: 'contact', url: '/contact' },
];
