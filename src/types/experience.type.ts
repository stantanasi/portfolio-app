export interface IExperience {
  title: string;
  employementType: 'CDI' | 'CDD' | 'Contrat en alternance' | 'Stage';
  companyName: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
}