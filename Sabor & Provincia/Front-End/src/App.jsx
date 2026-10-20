import Hero from './features/hero/hero'
import Historia from './features/historia/historia'
import Receta from './features/receta/receta'
import Contribuidores from './features/contribuidores/contribuidores'
import Suscripcion from './features/suscripcion/suscripcion'
import Layout from './components/layout'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Historia />
              <Receta />
              <Contribuidores />
              <Suscripcion />
            </>
          } />
        </Routes>
      </Layout>
    </>
  )
}

export default App
