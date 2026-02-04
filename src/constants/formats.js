export const FORMATS = {
  CHRONOLOGICAL: 'Chronological',
  FUNCTIONAL: 'Functional',
  ENTRY_LEVEL: 'Entry-Level',
};

export const FORMAT_SECTION_ORDERS = {
  [FORMATS.CHRONOLOGICAL]: ['personal','summary','skills','experience','education','certifications'],
  [FORMATS.FUNCTIONAL]: ['personal','summary','skills','education','experience','certifications'],
  [FORMATS.ENTRY_LEVEL]: ['personal','education','summary','skills','certifications','experience'],
};
