import './App.css';
import NavbarArea from './components/Navbar/NavbarArea';
import HeaderArea from './components/Header/HeaderArea';
import MainArea from './components/Main/MainArea';

function App() {
  return (
    <div className="Dashboard">
      <NavbarArea />

      <div>
        <HeaderArea />
        <MainArea />
      </div>

    </div>
  );
}

export default App;
