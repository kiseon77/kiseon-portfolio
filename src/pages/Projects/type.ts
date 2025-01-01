interface Period {
  start: string;
  end: string;
}

interface TechStackItem {
  name: string;
  reason: string;
}

interface FeatureImplementation {
  title: string;
  implementations: string[];
}

interface TroubleShooting {
  issue: string;
  cause: string;
  solution: string;
  learned: string;
}

interface TechStack {
  frontend: TechStackItem[];
  backend: string[];
  design: string[];
  infrastructure: string[];
  versionControl: string[];
  collaboration: string[];
}

interface ServiceDetails {
  summary: string;
  mainFeatures: string[];
  projectBackground: string;
  targetUser: string;
  effects: string;
}
interface Member {
  name: string;
  github: string;
  refactoring: boolean;
}
interface Team {
  full: Member[];
  frontend: Member[];
  backend: Member[];
}

export interface Project {
  notionUrl: string;
  logo: string;
  title: string;
  role: string;
  period: {
    total: Period;
  };
  links: {
    service: string | null;
    github: string;
  };
  serviceDetails: ServiceDetails;
  techStack: TechStack;
  myRole: {
    summary: string[];
    features: FeatureImplementation[];
  };
  troubleShooting: TroubleShooting[];
  retrospective: {
    learnings: string[];
  };
  team: Team;
  screenshots: string[];
}

export interface ProjectDataType {
  project: Project;
}
