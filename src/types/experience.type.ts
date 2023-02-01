export interface IExperience {
  title: string;
  employementType: 'permanent' | 'contract' | 'apprenticeship' | 'internship';
  companyName: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
}