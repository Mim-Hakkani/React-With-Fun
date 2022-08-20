import logo from './logo.svg';
import './App.css';
import FirstJsxPratices from './Components/FirstJsx';
import PersonalInfo from './Components/PersonalInfo';
import PassOobjectDataProps from './Components/PassOobjectDataProps';


function App() {
  const objectData = {
    salary : 40000,
    petName : 'Ovi',
    color :'black'
  }
  return (
 <div>
  <FirstJsxPratices />

  <PersonalInfo />
  <PersonalInfo name="Hakkani" location="Rajshahi" designation="Web Designer"/>
  <PersonalInfo name="Brain Station" location="Dhaka" designation="All Developer"/>
  
  <PassOobjectDataProps objectData={objectData}/>

 </div>
  );
}

export default App;
