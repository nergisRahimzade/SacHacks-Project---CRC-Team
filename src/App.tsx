import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:name" element={<RecipeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App