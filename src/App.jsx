import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Clover from "/src/components/logoClover/clover.jsx";
const VideoPage = lazy(() => delayFor(750).then(() => import("/src/components/Pages/VideoPage.jsx")));
const Home = lazy(() => delayFor(750).then(() => import("/src/components/Pages/Home.jsx")));
import "./App.css";
function delayFor(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='loading'></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
