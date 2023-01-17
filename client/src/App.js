
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import BlogDetails from './components/BlogDetails';
import Blogs from './components/Blogs';

function App() {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('/getfiles').then(res => res.json()).then(data => {
      setFiles(data.files);
    }
    );
  }, []);

  return (
    <Routes>

      <Route path="/" element={<Blogs files={files} />} />
      <Route path="/:id" element={<BlogDetails />} />
    </Routes>
  );
}

export default App;
