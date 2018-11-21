import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import About from "./pages/About";
import Wrapper from "./components/Wrapper";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Wrapper>
        <Route exact path="/" component={About} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} /> */}
      </Wrapper>
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
