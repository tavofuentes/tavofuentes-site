import { StaticImageData } from "next/image";

export interface ExperienceRecord {
  title: string;
  role: string;
  dates: string;
  description: string;
  techList: string;
  image: StaticImageData;
}

export interface CVRecord {
  role: string;
  company: string;
  companyURL: string;
  location: string;
  dates: string;
  activities: string[];
}
