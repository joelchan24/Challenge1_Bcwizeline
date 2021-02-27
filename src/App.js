
import './App.css';
import PokeCard from './components/PokeCard';
import {mockPokemonData} from './mock/pokeData';
function App() {
  return (
    <div className="App">
     <PokeCard  datapokemon={mockPokemonData}  />
    </div>
  );
}

export default App;
