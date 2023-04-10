import { Outlet } from 'react-router-dom';
import Navigation from './features/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
