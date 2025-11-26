import React from 'react';
import { PROBLEMS, CATEGORIES } from '../constants';
import { Problem } from '../types';

interface ProblemListProps {
  onSelectProblem: (problem: Problem) => void;
  currentProblemId?: string;
}

const ProblemList: React.FC<ProblemListProps> = ({ onSelectProblem, currentProblemId }) => {
  return (
    <div className="w-full md:w-64 bg-white border-r border-slate-200 h-full overflow-y-auto flex-shrink-0">
      <div className="p-4 border-b border-slate-100 sticky top-0 bg-white z-10">
        <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
          <span className="text-2xl">☕</span> JavaBat AI
        </h2>
        <p className="text-xs text-slate-500 mt-1">Practice coding with AI feedback</p>
      </div>
      
      <div className="p-4 space-y-6">
        {CATEGORIES.map(category => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">{category}</h3>
            <ul className="space-y-1">
              {PROBLEMS.filter(p => p.category === category).map(problem => (
                <li key={problem.id}>
                  <button
                    onClick={() => onSelectProblem(problem)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      currentProblemId === problem.id
                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {problem.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemList;