import './App.css';

import Graph from './components/graph/Graph';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <Router>

      <div className="App">

        <Route exact path="/" component={Graph}/>
      
      </div>

    </Router>
  );
}

export default App;
