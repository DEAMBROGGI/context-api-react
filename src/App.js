
import './App.css';
import Results from './components/Results'
import Inputs from './components/Inputs'
import {useStateValue} from './core/StateProvider'; //IMPORTO useSateValue para acceder a los state de las props 


function App() {
  const [{textInput}] = useStateValue(); //llamo las props que voy a utilizar en este caso textInput acompañado de dispatch
  return (
    <>
      <Inputs />
      <Results />
      <div className='inputs'>
            <h4>Texto ingresado visto en App</h4>

            <h3>{textInput}</h3>
        </div>
    </>
  );
}

export default App;
