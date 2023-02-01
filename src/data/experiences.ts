export interface IExperience {
  title: string;
  employementType: 'permanent' | 'contract' | 'apprenticeship' | 'internship';
  companyName: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

const experiences: IExperience[] = [
  {
    title: 'Développeur Android/Kotlin junior en alternance',
    employementType: 'apprenticeship',
    companyName: '42c',
    location: 'Paris, Île-de-France, France',
    startDate: '2020-10',
    endDate: null,
    description: '',
  },
];

export default experiences