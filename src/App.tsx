import './App.css';
import { SideBar } from './Components/SideBar';
import Survey from './Pages/Survey';

function App() {
  return (
    <div className="App smartWage-flex-items">
        <SideBar />
        <Survey />
    </div>
  );
}

export default App;
