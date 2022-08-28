import logo from './logo.svg';
import './App.css';
import FirstJsxPratices from './Components/FirstJsx';
import PersonalInfo from './Components/PersonalInfo';
import PassOobjectDataProps from './Components/PassOobjectDataProps';
import PassArrayDataProps from './Components/PassArrayDataProps';
import HookCounter from './Components/ReacjHooks/HookCounter';
import HookStatePrev from './Components/ReacjHooks/HookStatePrev';
import EffectCounterDom from './Components/ReacjHooks/EffectCounterDom';
import EffectFetchdata from './Components/ReacjHooks/EffectFetchdata';
import { createContext } from 'react';
import ContextHook from './Components/ReacjHooks/ContextHook';

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


 export const userContext = createContext()

function App() {

  return (
 <div>
  {/* <FirstJsxPratices /> */}

  {/* <PersonalInfo />
  <PersonalInfo name="Hakkani" location="Rajshahi" designation="Web Designer"/>
  <PersonalInfo name="Brain Station" location="Dhaka" designation="All Developer"/>
  
  <PassOobjectDataProps objectData={objectData}/>

  <PassArrayDataProps phones={phones} /> */}

  {/* react hook counter  */}

  {/* <HookCounter/> */}

  {/* <HookStatePrev /> */}

  {/* <EffectCounterDom /> */}

     <EffectFetchdata />

    
    {/* context api  */}

  <userContext.Provider value={objectData}>
    <ContextHook />
  </userContext.Provider>



 </div>
  );
}

export default App;
