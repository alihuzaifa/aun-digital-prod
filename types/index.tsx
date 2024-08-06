import { ReactNode } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  address?: string;
};
export type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (user: Partial<User>) => void;
  clearUser: () => void;
};

// Define the type for the context value
export interface CursorContextType {
  mouseEnterHandle: () => void;
  mouseLeaveHandler: () => void;
}

// Define the type for the cursor state
export interface CursorState {
  size: number;
  background: string;
}

// Define the type for the props of CursorProvider
export interface CursorProviderProps {
  children: ReactNode;
}

export type ChildItemOfServices = {
  title: string;
  href?: string;
};

// For Faq
export interface FaqCardProps {
  title: string;
  description: string;
  number?: number;
}
export interface FaqCardsArrayProps {
  faqArray: FaqCardProps[];
}

// For Case Study
export interface CaseStudyTypes {
  logo: string;
  bgImage: string;
  description: string;
  title: string;
}

export interface CaseStudyArrayProps {
  array: CaseStudyTypes[];
}
export type IconBox = {
  title?: string | undefined;
  description?: string | undefined;
  icon?: any;
  iconBase?: string | undefined;
  shadow?: string | undefined;
};

export interface BlogCardProps {
  href?: string;
  image: string;
  title: string;
  date: string;
}

export type MetadataType = {
  [key: string]: {
    title: string;
    description: string;
    openGraph: {
      title: string;
      url: string;
      description: string;
      siteName?: string;
      locale?: string;
      article?: any;
      twitter?: any;
      type: string;
      images: {
        url: string;
        alt: string;
      }[];
    };
    link: {
      rel: string;
      href: string;
      as?: string;
      fetchpriority?: string;
    }[];
    schema?: any;
    twitter?: any;
    author?: any;
  };
};
interface ContentItem {
  title: string;
  description: string;
  capacity?: string;
}

interface BannerContentItem extends ContentItem {
  // Add specific properties if any, for now it uses the same structure as ContentItem
}

interface ServiceContentItem extends ContentItem {
  image: string;
}

interface FaqContentItem extends ContentItem {
  capacity?: string;
}

interface Section {
  title: string;
  description?: string;
}

interface HeroSection extends Section {}

interface AboutSection extends Section {}

interface BannerSection extends Section {
  content: BannerContentItem[];
}

interface CtaSection extends Section {}

interface ServicesSection extends Section {
  content: ServiceContentItem[];
}

interface FaqSection extends Section {
  content: FaqContentItem[];
}

interface DetailSectionTypes {
  hero?: HeroSection;
  about?: AboutSection;
  banner?: BannerSection;
  cta?: CtaSection;
  services?: ServicesSection;
  faq?: FaqSection;
  isStack?: boolean;
  isClient?: boolean;
  isIndustries?: boolean;
  isDiagram?: boolean;
  isCaseStudy?: boolean;
  stats?: string;
}

export type ServiceDetailType = {
  [key: string]: DetailSectionTypes;
};