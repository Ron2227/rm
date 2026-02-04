import { useMemo } from 'react';
import { initialResumeData } from '../constants/initialResumeData';

export function useProgress({ resumeData, currentStep, showDownload }) {
  return useMemo(() => {
    if (showDownload) return 100;
    if (currentStep < 4) return 20;
    let p = 20;
    if (resumeData.summary !== initialResumeData.summary) p += 10;
    if (resumeData.skills.length) p += 10;
    return Math.min(p, 80);
  }, [resumeData, currentStep, showDownload]);
}
