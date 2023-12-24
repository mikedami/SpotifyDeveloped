import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index.js';
import Home from './components/Home/index.js';
import About from './components/About/index.js';
import Music from './components/Music/index.js';
import Result from './components/Results/index.js';
import Player from './components/Player/index.js';
import NotFound from './components/NotFound/index.js';

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element = {<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/music/results" element={<Result />} />
        <Route path="/music/player" element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
