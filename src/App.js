import Hello from './Hello'
import Message from './Message'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hello name="Supakrit" nickName="Tata" />
      <Hello name="Pornthip" nickName="Tangmo" />
      <Hello name="Pornthep" nickName="Jome" />
      <Message />
    </div>
  );
}

export default App;
