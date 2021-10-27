import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./assets/css/style.css"
import Home from "./Pages/Home/Home"
import Add from "./Pages/Add/Add"
import { useMediaQuery } from 'react-responsive';

function App() {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [cols, setCols] = useState(5)

  useEffect(() => {
    if (isMobile)
      setCols(2)
    else 
      setCols(5)
  }, [isMobile])
  
  return (
    <>
      <Router>
          <Switch>

            <Route path="/add">
              <Add />
            </Route>
            <Route path="/">
              <Home cols={cols} />
            </Route>

          </Switch>
      </Router>
    </>
  );
}

export default App;
