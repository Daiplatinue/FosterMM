export interface NavItem {
    label: string;
    href: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface Program {
    title: string;
    description: string;
    image: string;
  }
  
  export interface Child {
    id: string;
    name: string;
    age: number;
    image: string;
    description: string;
    interests: string[];
    background: string;
  }