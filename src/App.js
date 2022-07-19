import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Hello name="Supakrit" nickName="Tata" />
      <Hello name="Pornthip" nickName="Tangmo" />
      <Hello name="Porntap" nickName="Jome" />
      <Message />
    </div>
  );
}

export default App;
