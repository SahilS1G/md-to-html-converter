
import './App.css';
import Blogs from './components/Blogs';

function App() {

  // fetch(dir)
  //   .then(row => row.text())
  //   .then(text => {
  //     console.log('text:', text);
  //   });

  return (

    <div className="App">
      <Blogs />

    </div>
  );
}

export default App;
