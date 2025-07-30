
export interface MatricDetails {
  subject: string;
  year: string;
  board: string;
  obtainedMarks: string;
  maxMarks: string;
  percentage: string;
  marksheet: string; // base64
}

export interface ApplicationData {
  id: string;
  admissionSession: string;
  admissionType: string;
  course: string;
  languageSubjects: string[];
  nonLanguageSubjects: string;
  vocationalSubjects: string;
  studentName: string;
  fatherName: string;
  motherName: string;
  gender: string;
  dob: string;
  religion: string;
  address: string;
  pincode: string;
  postOffice: string;
  district: string;
  state: string;
  email: string;
  contactNumber: string;
  maritalStatus: string;
  nationality: string;
  category: string;
  aadharNumber: string;
  mediumOfInstruction: string;
  parentGuardianName: string;
  parentGuardianOccupation: string;
  parentGuardianContact: string;
  parentGuardianEmail: string;
  matricDetails: MatricDetails;
  photo: string; // base64
  aadhar: string; // base64
  submissionDate: string;
}

export enum ViewMode {
  LIST = 'LIST',
  FORM = 'FORM',
  PREVIEW = 'PREVIEW',
}
