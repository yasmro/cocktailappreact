import React, { useState } from 'react';
import List from './List';
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';

const Form = (props) => {
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [query, setQuery] = useState(props.query);



    // function search(e){
    //   e.preventDefault();

    //   if (query.length === 0) {
    //     throw new Error()
    //       // return setError(true);
    //   }

    //   // Clear state in preparation for new data
    //   setError(false);

    //   // スタート時はLoadingをTrueにする
    //   setLoading(true);


    //   var uri = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query;
    //   fetch(uri, {
    //       "method": "GET"
          
    //   })
    //   .then(response => response.json())
    //   .then(response => {
    //       // エラー時はerrorをスローする
    //       // if (response.drinks === null) {
    //       //     throw new Error()
    //       // }
    //       console.log(response);

    //       setResponseObj(response);
    //       // 処理完了(Loading->False)
    //       setLoading(false);

    //       // document.searchForm.action = process.env.PUBLIC_URL + "/search";

          
    //   }).catch(error => {
    //       setError(true);
    //       setLoading(false);
    //       console.log(error)
    //   });

    // }

    return(
      <>
        <form name="searchForm"  action={process.env.PUBLIC_URL + "/search/" + query}  className="text-center">
                {/*onSubmit={search}  */}
          <div className="md-form form-check-inline">
              <input
                  id = "query"
                  className = "form-control rounded-0 text-white"
                  type="text"
                  // name=""
                  placeholder="Query"
                  maxLength="50"
                  value={query}
                  onChange={(e) => {setQuery(e.target.value);}}
              />
          </div>

          <button type="submit" className="btn border-white border rounded-0"><span className="h6">Search</span></button>
          {/* <Link type="submit" className="btn bg-warning rounded-0" to={process.env.PUBLIC_URL + "/search/" + query }><span className="h6">GO2</span></Link> */}

        </form>
        <List responseObj={responseObj} loading={loading} error={error} />
      </>
    )
}

export default Form;