import { Pencil, FileText, Check, LayoutGrid, Globe, Award, Star } from 'lucide-react';

export const sectionDefinitions = {
  personal: { title: 'Contact information', icon: <Pencil size={14} /> },
  summary: { title: 'Professional summary', icon: <FileText size={14} /> },
  skills: { title: 'Key skills', icon: <Check size={14} /> },
  experience: { title: 'Professional experience', icon: <LayoutGrid size={14} /> },
  education: { title: 'Education', icon: <FileText size={14} /> },
  certifications: { title: 'Projects & certifications', icon: <Check size={14} /> },
  languages: { title: 'Languages', icon: <Globe size={14} /> },
  awards: { title: 'Awards & honors', icon: <Award size={14} /> },
  custom: { title: 'Custom section', icon: <Star size={14} /> },
};
