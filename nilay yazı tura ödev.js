import React from 'react';


function App() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
      <button onClick={refreshPage}>Sifirla</button>
    </div>
  );
}

export default App;

