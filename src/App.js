import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount stock={15} initial={1} onAdd={(quantity) => console.log('cantidad agregada ', quantity)}/>
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
