export type ProjectsDataTypes = {
  projectsData: projectDataTypes[];
};

export type projectDataTypes = {
  content: string;
  data: ProjectData;
  slug: string;
};

export type ProjectData = {
  name: string;
  description: string;
  previewImage: string;
  stack: string[];
  githubLink?: string;
  date: string;
  image: string;
  link: string;
  tag: string;
};
