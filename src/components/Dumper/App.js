import React, { useState, useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import dumperData from '../../data/dumper_data'
import NavBar from './NavBar'

import Dump from './Dump'
import Dumps from './Dumps'

const DumperApp = () => {

  const [dumps, setDumps] = useState([])

  //Grabs the post data from ./data/post_data
  useEffect(() => {
    setDumps(dumperData)
  }, [])

  const getDumpFromId = (id) => {
    return dumps.find((p) => p._id === parseInt(id))
  }

  return ( <div className="App">
    <BrowserRouter>
      <NavBar />
      <h1>Dumper</h1>

    {/* Single Dump - '/dumps/:id' */}
      <Route exact path="/dumps/:id" render={(props) =>
        <Dump {...props}
          post={ getDumpFromId(props.match.params.id) } />
      } />

    {/* Home / All Dumps - '/' */}
      <Route exact path="/" render={(props) =>
        <Dumps {...props} dumpsData={dumps} /> }
      />

    </BrowserRouter>
  </div> );
}

export default DumperApp;