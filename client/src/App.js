import React from "react";
// import BrouserRouter as the following:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";




// Add the / and /books routes should both render the Books component page.
function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* Switch is needed for the NoMatch to run - it works like the if, else if, else condition OR the switch case */}
        <Switch>
          {/* THE PATHS NEED TO BE "EXACT PATH" SO THAT THERE ARE NO DUPLICATIONS*/}
          {/* ALSO, IF WE PASS A COMPONENT INTO <Router> directly and not in <Route>, we will have this component display no matter what. That is why we must delete the <Books> component!! */}
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
