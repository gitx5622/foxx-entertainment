import React from 'react';
import ProtectedRoutes from "./privateComponents/ProtectedRoutes";

const App = () => {
  return (
    <div className="App">
        <ProtectedRoutes/>
    </div>
  );
};

export default App;
