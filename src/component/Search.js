import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import NavBar from './NavBar';

import Form from './Form';

import { motion, AnimatePresence } from "framer-motion";

const Search = (props) => {
  
  
  var q = props.match.params.q;
  // var q = props.qs.q;

  console.log(props)
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  
  var drink = props.drink;
  console.log(queryString)

  // コンポーネント読み込み後に行うもの．もしAPIを読み込む際は，まずレンダリングし，（fetchでデータがえたら）それを表示する
  useEffect(() => {
    
    // Clear state in preparation for new data
    setError(false);

    // スタート時はLoadingをTrueにする
    setLoading(true);


    var uri = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + q;
    fetch(uri, {
        "method": "GET"
        
    })
    .then(response => response.json())
    .then(response => {
        // エラー時はerrorをスローする
        if (response.drinks === null) {
            throw new Error()
        }
        console.log(response);

        setResponseObj(response);
        // 処理完了(Loading->False)
        setLoading(false);

        return response;

        
    }).catch(error => {
        setError(true);
        setLoading(false);
        console.log(error);
        return error;
    });

  },[]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0},
    transition:{
      duration: 3
    }
  }
  
    
    return(
      <>
        <NavBar />
        <div>
          <Form query={q} />
          {/* <div>
            {JSON.stringify(responseObj)}
          </div> */}
          {loading &&
          <h1>Loading...</h1>
          }
          {error &&
            <h1>Not Found!</h1>
          }
          {!loading && !error && responseObj.drinks ?
            
            <div>
              {/* {JSON.stringify(responseObj)} */}
            <h1>Search <span className="h3">({responseObj.drinks.length} drink{ responseObj.drinks.length != 1 && <span>s</span>} found)</span></h1>
            <motion.div variants={container} initial="hidden" animate="show" className="row">
              {
                responseObj.drinks.map( (drink, i) =>
                  <motion.div key={i} variants={item} initial="hidden" animate="show" transition="transition" className="col-6 col-md-4 col-lg-3 text-center mb-3">
                    <Link className="text-white" to={process.env.PUBLIC_URL + "/drink/" + drink.idDrink}>
                      <img src={drink.strDrinkThumb} className="img-fluid rounded mx-auto d-block"></img>
                      <h3>{drink.strDrink}</h3>
                    </Link>
                  </motion.div>
                  
                )
              }
            </motion.div>
            
            </div>
            : null
          }
        </div>
      </>
    )
}

export default Search;