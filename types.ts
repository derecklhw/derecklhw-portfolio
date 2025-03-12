export interface NavMenuItem {
  name: string;
  url: string;
}

export interface SocialMediaItem {
  name: string;
  icon: string; // TODO: find a more clever way to handle this before connecting supabase :(
  url: string;
}

export interface CompanyInfoItem {
  name: string;
  icon: string;
  url: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  url: string;
  language: string;
}
