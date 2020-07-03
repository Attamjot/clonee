import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Attamjot');
  return (
    <>
      <h2>Hello from {name}</h2>
      <button type="submit" onClick={() => setName('Attamjot Singh')}>
        Change Name
      </button>
    </>
  );
};

export default App;
