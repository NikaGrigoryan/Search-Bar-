import SearchBar from './Components/SearchBar';
import './App.css';
import Todos from './Data.json'

function App() {

 
  return (
    <div className="App">
     <SearchBar placeholder="Փնտրել" data = {Todos} />
    </div>
  );
}

export default App;
