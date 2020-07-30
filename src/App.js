import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, useLocation, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { motion, AnimatePresence } from "framer-motion";
import queryString from 'query-string';

import NavBar from './component/NavBar';
import Home from './component/Home';
import Form from './component/Form';
import List from './component/List';
import Search from './component/Search';
import Drink from './component/Drink';


function App() {
  var move = {
    initial:{
      x: 100,
      opacity: 0
    },

    enter:{ 
      x: 0,
      opacity: 1
    },
    
    exit:{
      x: -100,
      opacity: 0
    },
    transition:{
      duration: 2
    }
  };

  const NoMatch = () => (<><Form query=""/><h1>Not Found!</h1></>);
  
  return (
    <BrowserRouter>
        
        <div className="container-fluid vh-100 overflowY-auto" style={{"background-color": "rgba(0,0,0,0)", "min-height": "100%"}}>
          <div className="pt-1 pb-4 vh-100 overflowY-auto">
            {/* <NavBar /> */}
            <motion.div initial="initial" animate="enter" exit="exit" transition="transition" key="home">
              <motion.div className="text-white mb-4 ml-3 mr-3 pt-4 pb-4 v-auto　" style={{"background-color": "rgba(0,0,0,0)"}}> 
                <Route render={({ props }) => (
                    <Switch>
                      <Route exact path={ process.env.PUBLIC_URL + '/'} component={Home} />
                      {/* <Route exact path={ process.env.PUBLIC_URL + '/search/'} component={Search}/>qs={queryString.parse(props.location.search)}  */}
                      <Route exact path={ process.env.PUBLIC_URL + '/search/'} component={Search} />
                      <Route exact path={ process.env.PUBLIC_URL + '/search/:q'} component={Search} />
                      <Route exact path={ process.env.PUBLIC_URL + '/drink/:idDrink'} component={Drink}/>
                      <Route component={NoMatch}/>
                    </Switch>
                   
                  )}/>
              </motion.div>
            </motion.div>
          </div>
        </div>

    </BrowserRouter>
  );
}

export default App;
