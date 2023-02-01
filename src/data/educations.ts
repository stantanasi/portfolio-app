export interface IEducation {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string | null;
  grade: string;
  description: string;
}

const educations: IEducation[] = [
  {
    school: 'Éstiam • École supérieure des technologies de l\'information appliquées aux métiers',
    degree: '',
    fieldOfStudy: '',
    startDate: '2020-10',
    endDate: '2023-09',
    grade: '',
    description: '',
  },
];

export default educations