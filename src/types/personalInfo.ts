export interface Project {
  name: string;
  description: string;
  link: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  skills: string[];
  about: string[];
  projects: {
    created: Project[];
    participated: Project[];
  };
  links: {
    name: string;
    url: string;
  }[];
}
