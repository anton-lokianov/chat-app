import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '@/pages/_auth/auth';

function App() {
  const [state, setState] = useState('box1');

  const variants = {
    box1: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    box2: {
      opacity: 0,
      scale: 0,
      x: 200,
      transition: {
        duration: 0.4,
      },
    }, // Example transformation
  };

  return (
    <main className='w-full min-h-screen'>
      <Routes>
        <Route index element={<Auth />} />
      </Routes>
    </main>
  );
}

export default App;
