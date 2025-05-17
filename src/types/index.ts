export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}