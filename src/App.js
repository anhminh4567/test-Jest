import Navigation from "./components/Navigation";
import "./App.css";
import Player from "./components/Players";
import PlayerMap from "./components/PlayerMap";
import Main from "./components/Main";
import Product  from "./Products/Product";

const list = ['abc','def','ghj','klm'];

function App() {
  return (
    <div className='App'>
      <Navigation />
      {/* {<Player /> }
      {<PlayerMap /> } */}
      <Main />
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h2>
  //         React snapshot test
  //       </h2>
  //       <Product items={list}> 

  //       </Product>
  //       <h3>
  //         the above will change
  //       </h3>
  //     </header>
  //   </div>
  // );
}

export default App;
