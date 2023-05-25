import { StaticImageData } from 'next/image';

export interface IProject {
  slug: string;
  title: string;
  brief: string;
  description: string;
  image?: StaticImageData;
  url?: string;
  repository: string;
  stack: string[];
}
