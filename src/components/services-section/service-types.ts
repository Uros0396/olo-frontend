export type ServiceData = {
  id: string;
  category: string;
  title: string;
  description: string;
  items: string[];
  backgroundImage: string;
  mobileBackgroundImage?: string;
  desktopListColumns?: 1 | 2;
};
