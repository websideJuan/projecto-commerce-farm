import Navegacion from './components/Navegacion';
import './App.css';
import Logo from  "./dataImg/deftfs.png";
import PintarCards from './PintarCards.jsx';
import DataJson from './card.json';


function App() {
  return (
    <>
      <Navegacion logo={Logo}/>
      <div className='container'>
        <section className='card-compras'>
          <PintarCards props={DataJson}/>
        </section>
      </div>
    </>
  );
}

export default App;
