export interface IEducation {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string | null;
  grade: string;
  description: string;
}

const educations: IEducation[] = [];

export default educations