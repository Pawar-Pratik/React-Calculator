import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="calci-grid">
      <div className="output">
        <div className="pre-operand"></div>
        <div className="curr-operand"></div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>      
    </div>
  );
}

export default App;
