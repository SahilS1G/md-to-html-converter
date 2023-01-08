
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Blogs from './components/Blogs';

function App() {



  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('/getfiles').then(res => res.json()).then(data => {
      console.log('data:', data);
      setFiles(data.files);
    }
    );
  }, []);

  return (
    <Routes>

      <Route path="/" element={<Blogs files={files} />} />
    </Routes>
  );
}

export default App;
