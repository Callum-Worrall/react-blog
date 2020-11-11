import React from 'react'
import {Link} from 'react-router-dom'

const Dump = ({ dump }) => {

  if(!dump) {
    return null;
  }
  else
  {
    const linkStyles = {
      color: 'green'
    }

    const {title, modified_date, category, content} = dump

    return (<div className="dump">

      <Link style={linkStyles} to={`/dumps/${dump._id}`}>
        <h1>{title}</h1> </Link>

      <h3>{category}</h3>

      <h3>{modified_date.toLocaleString()}</h3>

      <p>{content}</p>

    </div>)
  }
}

export default Dump;