import React from 'react'
import {Link} from 'react-router-dom'

const Dump = ({ history, dump, showControls, deleteDump  }) => {

  if(!dump) {
    return null;
  }
  else
  {
    const linkStyles = {
      color: 'green'
    }

    const {title, modified_date, category, content} = dump

    
    const handleEdit = (e) => {
      e.preventDefault()
      history.push(`/dumps/edit/${dump._id}`)
    }

    const handleDelete = (e) => {
      e.preventDefault()
      deleteDump(dump._id)
      history.push("/")
    }

    return (<div className="dump">

      <Link style={linkStyles} to={`/dumps/${dump._id}`}>
        <h1>{title}</h1>
      </Link>

      <h3>{category}</h3>

      <h3>{modified_date.toLocaleString()}</h3>

      <p>{content}</p>

      {showControls && (
        <div>
          <button onClick={handleEdit}> Edit </button>
          <button onClick={handleDelete}> Delete </button>          
        </div>
      )}

    </div>)
  }
}

export default Dump;