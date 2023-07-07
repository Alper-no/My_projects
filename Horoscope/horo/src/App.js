
import './App.scss';
import Header from './components/header/Header';
import Card from './components/main/Card';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Main/>
      <Card/>

    </div>
  );
}

export default App;
