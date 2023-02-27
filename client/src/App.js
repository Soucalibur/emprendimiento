import {Route} from "react-router-dom"
import Index from './components';
// import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Index}></Route>
      {/* <Route path="/" component={Navbar}></Route> */}

    </div>
  );
}

export default App;
