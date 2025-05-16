import Clover from "/src/components/logoClover/clover.jsx";
import Header from "/src/components/header/header.jsx";
import SideBar from "/src/components/sideBar/sideBar.jsx";
import VideoCards from "/src/components/videoCards/videoCards.jsx"
import "./App.css";

function App() {
  return (
    <div>
      <Clover />
      <Header />
      <SideBar/>
      <VideoCards/>
    </div>
  );
}

export default App;
