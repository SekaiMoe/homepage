export interface PersonalInfo {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  skills: string[];
  about: string[];
  projects: {
    name: string;
    description: string;
    link: string;
  }[];
  links: {
    name: string;
    url: string;
  }[];
}
