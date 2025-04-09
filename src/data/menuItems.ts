export interface MenuItem {
  image: string;
  title: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  {
    image: '/images/prix.jpg',
    title: 'Prix Fixe',
    description: 'Curated dining experiences',
  },
  {
    image: '/images/winemenu.jpg',
    title: 'Wine List',
    description: 'Carefully selected wines',
  },
  {
    image: '/images/winemenu2.jpg',
    title: 'Wine List 2',
    description: 'Carefully selected wines',
  },
  {
    image: '/images/barmenu.jpg',
    title: 'Bar Menu',
    description: 'Light bites and drinks',
  }
]; 