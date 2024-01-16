import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo.tsx';

export const liste = (
  <h1>Test du composant</h1>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDo></ToDo>
      </header>
    </div>
  );
}

export default App;
