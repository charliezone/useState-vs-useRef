import RefVersion from "./components/RefVersion";
import StateVersion from "./components/StateVersion";

function App() {
  return (
    <div style={{display: 'flex', columnGap: '30px'}}>
      <RefVersion />
      <StateVersion />
    </div>
  );
}

export default App
