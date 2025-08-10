import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import DataUpload from './components/DataUpload';
import Preprocessing from './components/Preprocessing';
import ModelSetup from './components/ModelSetup';
import RunTrain from './components/RunTrain';
import Results from './components/Results';
import Feedback from './components/Feedback';
import './App.css';

const steps = [
  'Home',
  'Data Upload',
  'Preprocessing',
  'Model Setup',
  'Run/Train',
  'Results',
  'Feedback',
];

function App() {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  function renderStep() {
    switch (currentStep) {
      case 'Home':
        return <Home />;
      case 'Data Upload':
        return <DataUpload />;
      case 'Preprocessing':
        return <Preprocessing />;
      case 'Model Setup':
        return <ModelSetup />;
      case 'Run/Train':
        return <RunTrain />;
      case 'Results':
        return <Results />;
      case 'Feedback':
        return <Feedback />;
      default:
        return null;
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <main style={{ flex: 1, padding: 32 }}>{renderStep()}</main>
    </div>
  );
}

export default App;
