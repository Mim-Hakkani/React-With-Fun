import logo from './logo.svg';
import './App.css';
import FirstJsxPratices from './Components/FirstJsx';
import PersonalInfo from './Components/PersonalInfo';
import PassOobjectDataProps from './Components/PassOobjectDataProps';
import PassArrayDataProps from './Components/PassArrayDataProps';
import HookCounter from './Components/ReacjHooks/HookCounter';

// testing array components 
const phones =[
    {
        phoneName :'nokia',
        color:'black'
    },
        {
        phoneName :'Samsang',
        color:'White'
    },    {
        phoneName :'Galaxy',
        color:'Blue'
    }
]


// testing object components 

  const objectData = {
    salary : 40000,
    petName : 'Ovi',
    color :'black'
  }

function App() {

  return (
 <div>
  <FirstJsxPratices />

  <PersonalInfo />
  <PersonalInfo name="Hakkani" location="Rajshahi" designation="Web Designer"/>
  <PersonalInfo name="Brain Station" location="Dhaka" designation="All Developer"/>
  
  <PassOobjectDataProps objectData={objectData}/>

  <PassArrayDataProps phones={phones} />

  {/* react hook counter  */}

  <HookCounter/>
 </div>
  );
}

export default App;
