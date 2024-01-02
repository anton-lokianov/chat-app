import { Route, Routes } from 'react-router-dom';
import Auth from '@/pages/_auth/auth';

function App() {
  return (
    <main className='w-full'>
      <Routes>
        <Route index element={<Auth />} />
      </Routes>
    </main>
  );
}

export default App;
