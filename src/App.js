import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Error from './components/Error';
import ItemListContainer from './components/shop/ItemListContainer';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import InputNoVowels from './components/InputNoVowels';



/* control + barra cuando estoy al final de lo que escribi me auto importa*/

function App() {

  const styles = {
    border: 'solid 2px blue'
  }
  return (
    <div className="App"> {/* para jsx todo anidado en un solo nodo */}
    <BrowserRouter> {/* browser router es para encerrar en la libreria nueva, adentro va el nav, todo lo que enrealidad quiero que aparezca en la otra pag */}
    <NavBar/>

    <Routes> {/* encierro en un div de Routes las rutas que quiero, con otro div de Routes */}
 {/* las rutas basicamente es como entrar al link */}
      <Route path={'/'} element={<ItemListContainer/>}/>
      <Route path={'/category/:categoriaId'} element={<ItemListContainer/>}/> {/* esto para generar un enlace que nuevo lo linkeare con <Link/> */}
      <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
      <Route path={'/input'} element={<InputNoVowels/>}/>
      <Route path={'*'} element= {<Error/>}/>
    </Routes>
    </BrowserRouter>
    
    <InputNoVowels></InputNoVowels>



    </div>
  );
}

export default App;

