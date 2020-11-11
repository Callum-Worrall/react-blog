import React from 'react'
import Dump from './Dump'

const Dumps = ({dumpsData}) => {

    return (
    <div className="dumps">      
      {
        //returns all the blogposts, that have been provided by props
        dumpsData
          .sort((a, b) => b.modified_date - a.modified_date)
          .map((dump) => <Dump key={dump._id} dump={dump} />)
      }
    </div>
    )
}

export default Dumps;