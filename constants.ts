
export const ADMISSION_SESSIONS = ["NOV-25", "JULY-25"];
export const ADMISSION_TYPES = ["Regular", "TOC", "Part time"];
export const COURSES = ["Intermediate", "Metric"];
export const LANGUAGE_SUBJECTS = ["English", "Hindi", "Nepali", "Bengali"];
export const NON_LANGUAGE_SUBJECTS = ["PCM", "PCB", "Commerce", "Arts"];
export const VOCATIONAL_SUBJECTS = ["IT", "Healthcare", "Tourism"];
export const GENDERS = ["Male", "Female", "Transgender"];
export const RELIGIONS = ["Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Other"];
export const MARITAL_STATUSES = ["Un-Married", "Married", "Divorced", "Widowed"];
export const CATEGORIES = ["GEN", "OBC", "SC", "ST"];
export const NATIONALITIES = ["Indian", "Other"];
export const MEDIUMS_OF_INSTRUCTION = ["Hindi", "English", "Nepali"];
export const MATRIC_YEARS = Array.from({ length: 20 }, (_, i) => (new Date().getFullYear() - i).toString());

export const INDIAN_STATES: { [key: string]: string[] } = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
  "Arunachal Pradesh": ["Itanagar", "Tawang"],
  "Assam": ["Guwahati", "Dibrugarh", "Silchar"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "West Delhi", "East Delhi"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Haryana": ["Faridabad", "Gurugram", "Panipat"],
  "Himachal Pradesh": ["Shimla", "Manali"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubballi"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Manipur": ["Imphal"],
  "Meghalaya": ["Shillong"],
  "Mizoram": ["Aizawl"],
  "Nagaland": ["Kohima", "Dimapur"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
  "Sikkim": ["Gangtok", "Namchi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
  "Tripura": ["Agartala"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Saharanpur"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital"],
  "West Bengal": ["Kolkata", "Asansol", "Siliguri"],
};
