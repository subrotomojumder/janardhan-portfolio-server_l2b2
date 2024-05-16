export type TOffice = 'remote' | 'onsite';
export type TJobType = 'fulltime' | 'internship';

export type TExperience = {
  designation: string;
  companyName: string;
  location: string;
  dateOfEntry: Date;
  dateOfDeparture: Date;
  office: TOffice;
  jobType: TJobType;
  logo?: string;
  certificate?: string;
  link?: string;
};
