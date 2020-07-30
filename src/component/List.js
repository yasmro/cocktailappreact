import React, { useState } from 'react';
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';

const List = (props) => {

    var drinks = props.responseObj.drinks;
    
    return(
      <>
      {props.error &&
        <div>
          <span className="badge badge-danger"><h2>Please enter a query.</h2></span>
        </div>  
      }
      {props.loading && 
        <div>
        <h1>Loading...</h1>
        </div>
      }
      {
        (!props.loading && !props.error && props.responseObj.drinks) ?
          <>
            <div className="row">
              {
                drinks.map( (drink, i) =>
                  <div key={i} className="col-6 col-md-4 col-lg-3 text-center">
                    <Link className="text-white" to={process.env.PUBLIC_URL + "/drink/" + drink.idDrink}>
                      <img src={drink.strDrinkThumb} className="img-fluid rounded mx-auto d-block"></img>
                      <h3>{drink.strDrink}</h3>
                    </Link>
                  </div>
                  
                )
              }
            </div>
          </>
        : null
      }


      </>
    )
}

export default List;