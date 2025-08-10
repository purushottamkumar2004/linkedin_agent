function Sidebar({ steps, currentStep, setCurrentStep }) {
  return (
    <nav style={{ width: 200, background: '#f4f4f4', padding: 20 }}>
      <h3>Workflow</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {steps.map((step) => (
          <li key={step} style={{ margin: '16px 0' }}>
            <button
              style={{
                background: currentStep === step ? '#007bff' : '#fff',
                color: currentStep === step ? '#fff' : '#333',
                border: 'none',
                padding: '8px 16px',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                borderRadius: 4,
              }}
              onClick={() => setCurrentStep(step)}
            >
              {step}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;