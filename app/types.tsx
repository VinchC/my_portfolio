export type ProjectProps = {
  Logo: string;
  title: string;
  description: string;
  url: string;
  alt: string;
};

export type WorkProps = {
  url: string;
  picture: string;
  alt: string;
  title: string;
  role: string;
  date: string;
  training?: boolean;
};

export type ContactProps = {
  image: string;
  title: string;
  description: string;
};

export type SkillProps = {
  picture: string;
  alt: string;
  title: string;
  description: string;
};

export type EducationProps = {
  url: string;
  picture: string;
  alt: string;
  title: string;
  date: string;
  school: string;
};
