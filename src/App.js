import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import ItemListContainer from './components/container/ItemListContainer';

const user = 'CoderHouse'

function App() {
  return (
    <div className="App">

      <Navbar/>
      <ItemListContainer name={user}/>

    </div>
  );
}


export default App;


