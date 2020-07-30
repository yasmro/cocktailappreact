import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

import ShuffleText from 'react-shuffle-text';

const Drink = (props) => {
  window.scrollTo(0, 0)
  console.log(props)
  let [responseObj, setResponseObj] = useState({});
  
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  var id = props.match.params.idDrink;
  var drink = props.drink;


  // コンポーネント読み込み後に行うもの．もしAPIを読み込む際は，まずレンダリングし，（fetchでデータがえたら）それを表示する
  useEffect(() => {
    
    // Clear state in preparation for new data
    setError(false);

    // スタート時はLoadingをTrueにする
    setLoading(true);


    var uri = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
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

        var drink = {
          id: response.drinks[0].idDrink,
          name: response.drinks[0].strDrink,
          alcoholic: response.drinks[0].strAlcoholic,
          category: response.drinks[0].strCategory,
          thumbnail: response.drinks[0].strDrinkThumb,
          instructions: response.drinks[0].strInstructions,
          ingredients:[
            {name: response.drinks[0].strIngredient1, measure: response.drinks[0].strMeasure1},
            {name: response.drinks[0].strIngredient2, measure: response.drinks[0].strMeasure2},
            {name: response.drinks[0].strIngredient3, measure: response.drinks[0].strMeasure3},
            {name: response.drinks[0].strIngredient4, measure: response.drinks[0].strMeasure4},
            {name: response.drinks[0].strIngredient5, measure: response.drinks[0].strMeasure5},
            {name: response.drinks[0].strIngredient6, measure: response.drinks[0].strMeasure6},
            {name: response.drinks[0].strIngredient7, measure: response.drinks[0].strMeasure7},
            {name: response.drinks[0].strIngredient8, measure: response.drinks[0].strMeasure8},
            {name: response.drinks[0].strIngredient9, measure: response.drinks[0].strMeasure9},
            {name: response.drinks[0].strIngredient10, measure: response.drinks[0].strMeasure10},
            {name: response.drinks[0].strIngredient11, measure: response.drinks[0].strMeasure11},
            {name: response.drinks[0].strIngredient12, measure: response.drinks[0].strMeasure12},
            {name: response.drinks[0].strIngredient13, measure: response.drinks[0].strMeasure13},
            {name: response.drinks[0].strIngredient14, measure: response.drinks[0].strMeasure14},
            {name: response.drinks[0].strIngredient15, measure: response.drinks[0].strMeasure15}
          ],
          tags: response.drinks[0].strTags,
          video: response.drinks[0].strVideo
        };

        setResponseObj(drink);
        // 処理完了(Loading->False)
        setLoading(false);
        console.log(drink);

        // const ingredient = Object.keys(response.drinks[0])
        //   .filter(key => key.contains("strIngredient"))
        //   .reduce((obj, key) => {
        //     obj[key] = response.drinks[0][key];
        //     return obj;
        //   }, {});



        return response;

        
    }).catch(error => {
        setError(true);
        setLoading(false);
        console.log(error);
        return error;
    });

  },[]);

  var move = {
    initial:{
      y: 100,
      opacity: 0
    },

    enter:{ 
      y: 0,
      opacity: 1
    },
    
    exit:{
      x: -100,
      opacity: 0
    },

    transition:{
      duration: 0.5
    }
  };
    
    return(
      <>
      <div className="">
        {loading &&
          <h1>Loading...</h1>
        }
        {error &&
          <h1>Error...</h1>
        }
        {!loading && !error && responseObj ?
          <>
          {/* <motion.div initial="initial" animate="enter" exit="exit" transition="transition" key=""> */}
            {/* {JSON.stringify(responseObj)} */}
            {/* <h3>{id}</h3> */}
            <motion.div animate={{
          x: 0,
          opacity: 1
        }}
        initial={{
          x: 100,
          opacity: 0
        }}
        exit={{
          x: -100,
          opacity: 0
        }}
        transition={{
          duration: 0.5,
          delay:0
        }} className="position-absolute position-fixed d-none d-md-flex flex-right flex-column align-items-end" style={{"top": "0%", "right":"0%"}} >
              <img className="img-fluid" src={responseObj.thumbnail} style={{"max-width": "100%", "max-height": "100vh"}}></img>
            </motion.div>


            <motion.div animate={{
          x: -20,
          opacity: 1
        }}
        initial={{
          x: -20,
          opacity: 0
        }}
        exit={{
          x: -100,
          opacity: 0
        }}
        transition={{
          duration: 0.5,
          delay:0.5
        }} className="position-absolute position-fixed d-none d-md-flex flex-right flex-column align-items-end " style={{"bottom": "0%", "right":"0%"}} >
              {/* <h5 className="d-none d-md-block shadow1">{responseObj.alcoholic} / {responseObj.category}</h5> */}
              <h1 className="h2  sign my-shuffle">{responseObj.name}</h1>
            </motion.div>


            <div className="container-fluid pl-0">
              <div className="col-12 pl-0">
                <motion.div animate={{
            x: 0,
            opacity: 1
          }}
          initial={{
            x: -20,
            opacity: 0
          }}
          exit={{
            x: -20,
            opacity: 0
          }}
          transition={{
            duration: 0.5,
            delay:0.5
          }}  className="" style={{"z-index": 0}}>

                <button className="btn rounded-0 shadow-none h1 p-0 d-block d-md-none" onClick={() => props.history.goBack()}>
                  <span className="h3">← Back</span>
                </button>
                <h5 className="d-block d-md-none shadow1">{responseObj.alcoholic} / {responseObj.category}</h5>
                <h1 className="d-block d-md-none shadow1">{responseObj.name}</h1>

                
                <div className="mb-5">
                  <button className="btn rounded-0 shadow-none h1 p-0 d-none d-md-block" onClick={() => props.history.goBack()}>
                    <span className="h3">← Back</span>
                  </button>
                </div>

                <h5 className="d-none d-md-block shadow1 mb-0 pb-0">{responseObj.alcoholic} / {responseObj.category}</h5>
                <h1 className="display-2 shadow1 mt-0 title my-shuffle d-none d-md-block"><ShuffleText content={responseObj.name} charFrameTime={35} charFrames={13} /></h1>
              </motion.div>

              <motion.div animate={{
            x: 0,
            opacity: 1
          }}
          initial={{
            x: -20,
            opacity: 0
          }}
          exit={{
            x: -20,
            opacity: 0
          }}
          transition={{
            duration: 0.5,
            delay:0.75
          }} className="d-md-none mb-3">
            <img className="img-fluid" src={responseObj.thumbnail} ></img>

          </motion.div>

              <motion.div animate={{
            x: 0,
            opacity: 1
          }}
          initial={{
            x: -20,
            opacity: 0
          }}
          exit={{
            x: -20,
            opacity: 0
          }}
          transition={{
            duration: 0.5,
            delay:1
          }} className="shadow2">
                

                <div className="mb-4">
                  { 
                    responseObj.tags &&
                    responseObj.tags.split(',').map(tag =>
                      
                        <span className="badge badge-dark mr-2"><span className="h5">{tag}</span></span>
                      
                    )
                  }
                </div>

                <div className="mb-4">
                  <div className="w-100 d-block d-md-none">
                    <h2>Description</h2>
                    <p className="text-justify">{responseObj.instructions}</p>
                  </div>

                  <div className="w-50 d-none d-md-block">
                    <h2>Description</h2>
                    <p className="text-justify">{responseObj.instructions}</p>
                  </div>
                </div>
                
                <div className="mb-0">
                  <h2>Ingredients</h2>
                  <table className="table table-borderless table-sm text-white d-block">
                    {responseObj.ingredients &&

                      responseObj.ingredients.map(ingredient => (
                        ingredient.name &&
                        <tr style={{"height": "20px!important"}}>
                          <td className="mr-2">{ingredient.name}</td>
                          <td className="pl-5 text-left">{ingredient.measure}</td>
                        </tr>

                      ))
                    }
                  </table>
                </div>
                
                </motion.div>
              </div>

              
            </div>
            
            
          
          {/* </motion.div> */}
          </>
          : null
        }
      </div>

      
      </>
    )
}

export default Drink;