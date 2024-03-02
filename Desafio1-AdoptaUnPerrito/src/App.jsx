import Header from './components/Header'
import Cardog from './components/MyCard'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <>
      <Header title="Adota un perrito"/>
      <main>
      <Cardog 
      name="Wilson" 
      description="Pelaje abundante, personalidad sociable y cariñosa, inteligente y curioso, resistente al frío, adaptable, variados colores y patrones de pelaje." 
      image="https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg" 
      colorBadge="success" 
      textBadge="Siveriano" />

      <Cardog 
      name="Natasha" 
      description="Cuerpo alargado, patas cortas, personalidad valiente y afectuosa, inteligente, leal, fácil de cuidar, buena mascota para hogares pequeños." 
      image="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg" 
      colorBadge="primary" 
      textBadge="Salchicha" />

      <Cardog 
      name="Bell" 
      description="Amigable y gentil, inteligente y obediente, energético y activo, fácil de entrenar, excelente para familias, buen perro de trabajo y compañía." 
      image="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg" 
      colorBadge="danger" 
      textBadge="Labrador" />

      <Cardog 
      name="Copito" 
      description="Pequeño y tierno, pelaje blanco y sedoso, carácter amigable y juguetón, fácil de entrenar, ideal para espacios pequeños y familias." 
      image="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg" 
      colorBadge="warning" 
      textBadge="Maltes"/>
      </main>

      <Footer />
      
    </>
  )
}

export default App