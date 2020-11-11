import React, { useState, useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import dumperData from '../../data/dumper_data'
import NavBar from './NavBar'

import Dump from './Dump'
import Dumps from './Dumps'
import NewDump from './NewDump'
import EditDump from './EditDump'

const DumperApp = () => {

  const [dumps, setDumps] = useState([])

  //Grabs the post data from ./data/post_data
  useEffect(() => {
    setDumps(dumperData)
  }, [])

  const getDumpFromId = (id) => {
    return dumps.find((p) => p._id === parseInt(id))
  }
  
  const nextId = () => {
    return dumps.reduce((acc, cur) => acc._id > cur._id ? acc : cur, {_id: 0})._id + 1
  }

  //Add
  const addDump = (dump) => {
    setDumps([...dumps, dump])
  }

  //Delete
  const deleteDump = (id) => {
    const updatedDumps = dumps.filter((p) => p._id !== parseInt(id))
    setDumps(updatedDumps)
  }

  //Update
  const updateDump = (inDump) => {
    const updatedDumps = dumps.map((p) => (p._id === inDump._id) ? inDump : p)
    setDumps(updatedDumps)
  }

  return ( <div className="App">
    <BrowserRouter>
      <NavBar />
      <h1>Dumper</h1>

    {/* Single Dump - '/dumps/:id' */}
    <Route exact path="/dumps/:id" render={(props) =>
      <Dump {...props} dump={getDumpFromId(props.match.params.id)}
        showControls deleteDump={deleteDump}
      />        
    }/>

    {/* Home / All Dumps - '/' */}
    <Route exact path="/" render={(props) =>
      <Dumps {...props} dumpsData={dumps}/> }
    />

    {/* New Blog Dump Path - '/dumps/new' */}
    <Route exact path="/dumps/new" render={props =>
      <NewDump {...props}
        addDump={addDump}
        nextId={nextId()}
        dump={getDumpFromId(props.match.params.id)}
      />
    }/>

    {/* Update Blog Dump Path - '/dumps/edit/:id' */}
    <Route exact path="/dumps/edit/:id" render={(props) => 
      <EditDump {...props}
        updateDump={updateDump}
        dump={getDumpFromId(props.match.params.id)}
      />
    }/>

    </BrowserRouter>
  </div> );
}

export default DumperApp;