import React, { useState } from 'react';
import ProblemList from './components/ProblemList';
import CodeWorkspace from './components/CodeWorkspace';
import { PROBLEMS } from './constants';
import { Problem } from './types';

const App: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<Problem>(PROBLEMS[0]);

  return (
    <div className="flex h-screen w-full bg-slate-100 overflow-hidden font-sans">
      <ProblemList 
        onSelectProblem={setSelectedProblem} 
        currentProblemId={selectedProblem.id}
      />
      <CodeWorkspace problem={selectedProblem} />
    </div>
  );
};

export default App;