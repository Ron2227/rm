import PersonalEditor from './editors/PersonalEditor';
import SummaryEditor from './editors/SummaryEditor';
// etc

export const EditorsMap = {
  personal: PersonalEditor,
  summary: SummaryEditor,
  skills: SkillsEditor,
  experience: ExperienceEditor,
  education: EducationEditor,
  certifications: CertificationsEditor,
  languages: LanguagesEditor,
  awards: AwardsEditor,
  custom: CustomEditor,
};
