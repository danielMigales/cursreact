
import './App.css';
import FunctionalComponent from './components/functionalComponent';
import ClassComponent from './components/ClassComponent';

const nom = "Joan";
function sumar() {
  return 2 + 2;
}

const inlineStyle = {
  color: "blue",
  fontSize: "26px"
}

function functionClick(parametre) {
  console.log('OnClick', parametre);
}

function functionOnMouseOver(parametre) {
  console.log('OnMouseOver', parametre);
}




function App() {
  return (
    <>
      <h1 style={inlineStyle}>Variable: {nom}</h1>
      <h1>Funcio: {sumar()}</h1>
      <h1>Operacio Matematica: {2 + 2}</h1>
      <h1>Ternari: {((3 + 2) > 6) ? 'major' : 'menor'}</h1>

      <button onClick={functionClick('parametre que es passa')}>CLICK</button>
      <h1 onMouseOver={functionOnMouseOver('parametre que es passa')}>On Mouse Over</h1>

      <FunctionalComponent />
      <ClassComponent />

    </>
  );
}

export default App;
