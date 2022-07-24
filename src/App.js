import Navegacion from './components/Navegacion';
import './App.css';
import Logo from  "./dataImg/deftfs.png";
import PintarCards from './PintarCards.jsx';
import DataJson from './card.json';
import Formulario from './components/Formulario';
import ImputSearch from './components/ImputSearch';


function App() {
  return (
    <>
      <Navegacion logo={Logo}/>
      <div className='container'>
        <section className='bg-img pt-5'>
          <div className='d-flex'>
            <ImputSearch />
            <button
              className='btn btn-outline-primary'
            >
              buscar
            </button>
          </div>
        </section>
        <section className='row'>
          <PintarCards props={DataJson}/>
        </section>
        <section>
          <Formulario />
        </section>
      </div>
    </>
  );
}

export default App;
