import logo from './logo.svg';
import './App.css';
import FirstJsxPratices from './Components/FirstJsx';
import PersonalInfo from './Components/PersonalInfo';


function App() {
  return (
 <div>
  <FirstJsxPratices />

  <PersonalInfo />
  <PersonalInfo name="Hakkani" location="Rajshahi" designation="Web Designer"/>
  <PersonalInfo name="Brain Station" location="Dhaka" designation="All Developer"/>
 </div>
  );
}

export default App;
