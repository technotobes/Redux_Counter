import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import DisplayCounter from './components/DisplayCounter';
import AddSubtractCounter from './components/AddSubtractCounter';

function App() {
  return (
    <div className="App">
      <Counter />
      <DisplayCounter />
      <AddSubtractCounter />
    </div>
  );
}

export default App;
