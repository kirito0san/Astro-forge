import Header from "./components/Header";
import LeaderShipTeam from "./components/LeaderShipTeam";


function App() {
  return (
    <div className="h-screen bg-no-repeat bg-cover ">
      <div className=" absolute top-0 left-0 w-full -z-10 h-screen"><img src={require(`./image/background.png`)} alt="" /></div>
      <div className="bg-black ">
        <Header />
      </div>
      {/* <LeaderShipTeam /> */}
    </div>
  );
}

export default App;
