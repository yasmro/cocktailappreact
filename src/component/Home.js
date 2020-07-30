import React, { useState } from 'react';

import Form from './Form';
import NavBar from './NavBar';

const Home = () => {
    let [responseObj, setResponseObj] = useState({});

    return(
        <>
          <NavBar />
          <Form query=""/>
        </>
    )
}

export default Home;