import logo from './logo.svg';
import './App.css';
import Saludo from './components/ItemListContainer'
import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import Bienvenida from './components/ItemListContainer';
import ItemListContainer from './components/ItemListContainer';
function App() {

  const styles = {
    border: 'solid 2px blue'
  }
  return (
    <div className="App"> {/* para jsx todo anidado en un solo nodo */}
    <NavBar/>
<ItemListContainer greeting={"Ecommerce Comida"}/>
    </div>
  );
}

export default App;

