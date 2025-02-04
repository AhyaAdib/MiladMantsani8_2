import './App.css'
import 'viewerjs/dist/viewer.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './assets/pages/homePage'
import Competition from './assets/pages/Competition'
import { lazy } from 'react'

const NoPage = lazy(() => import('./assets/pages/404'))
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/comp/:comp' element={<Competition />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
