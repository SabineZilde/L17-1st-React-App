import DisplayName from "./components/DisplayName";
import DisplayAge from "./components/DisplayAge";
import DisplayEmail from "./components/DisplayEmail";

function App() {
  return (
    <div>
      <DisplayName name="Sanmichele" />
      <DisplayAge age="666" />
      <DisplayEmail email="noname@noemail.com" />
    </div>
  );
}

export default App;
