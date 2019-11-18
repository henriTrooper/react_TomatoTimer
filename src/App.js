import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';
import Timer from './components/Timer'


function App() {
  return (
    <div>
      <ToastContainer />
      <Timer duration="45" title="Pomodoro" />
      <Timer duration="5" title="Courte Pause" />
      <Timer duration="10" title="Longue Pause" />

    </div>
  );
}

export default App;
