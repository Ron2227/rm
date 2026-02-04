import { useState } from 'react';
import { initialResumeData } from '../constants/initialResumeData';
import { EditorsMap } from '../components/editor/EditorsMap';
import { useAutosave } from '../hooks/useAutosave';
import { useProgress } from '../hooks/useProgress';

const App = () => {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [currentStep, setCurrentStep] = useState(0);
  const [editingSection, setEditingSection] = useState('personal');

  useAutosave({ resumeData, currentStep }, true);
  const progress = useProgress({ resumeData, currentStep });

  const CurrentEditor = EditorsMap[editingSection];

  return (
    <>
      <ProgressBar progress={progress} />
      <CurrentEditor data={resumeData} setData={setResumeData} />
      <ResumeViewer data={resumeData} />
    </>
  );
};

export default App;
