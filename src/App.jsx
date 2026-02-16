import './App.css'
import Greating from './components/Greating';
import Header from './components/Header';
import { Tiriye } from './components/Counter';
import PasswordToggle  from './components/PasswordToggle';
import ColorChanger from './components/Colorchanger';
import Clicker from './components/Clicker';
import Input from './components/Input';
import WelcomeMassege from './components/Welcomemassege';
function App() {
  return (
    <>
      <WelcomeMassege isLoggedIn={true} />
      <Clicker />
      <Input />
      <Greating name="shuayb" surename="omer" />
      <Header />
      <Tiriye />
      <PasswordToggle />
      <ColorChanger />
    </>
  );
}

export default App
