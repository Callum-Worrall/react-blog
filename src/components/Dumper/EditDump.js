import React, { useState, useEffect } from 'react'

const EditDump = ({history, updateDump, dump}) => {

  const divStyles = {
      display: "grid",
      width: "100vw"
  }
  const inputStyles = {
      width: "70vw",
      margin: ".5em"
  }
  const labelStyles = {
      fontSize: "1.2em"
  }
  const textAreaStyles = {
      height: "200px",
      margin: ".5em",
      width: "70vw"
  }

  const initialFormState = {
      title: "",
      category: "",
      content: ""
  }

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    dump && setFormState({
        title: dump.title,
        category: dump.category,
        content: dump.content
    })
  }, [dump])

  const handleChange = (e) => {
      const {name, value} = e.target
      setFormState({
          ...formState,
          [name]: value
      })
      console.log(formState)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      const updatedDump = {
          _id: dump._id,
          title: formState.title,
          category: formState.category || "general",
          modified_date: new Date(),
          content: formState.content
      }
      updateDump(updatedDump)
      history.push(`/dumps/${dump._id}`)
  }

  return (
  <form id="editDumpForm" onSubmit={handleSubmit}>

    {/* Title */}
    <div style={divStyles}>
        <label style={labelStyles}>Title</label>
        <input
            style={inputStyles} required type="text" name="title"
            value={formState.title} onChange={handleChange}/>
    </div>

    {/* Category */}
    <div style={divStyles}>
        <label style={labelStyles}>Category</label>
        <input
            style={inputStyles} required type="text" name="category"
            value={formState.category} onChange={handleChange}/>
    </div>

    {/* Content */}
    <div style={divStyles}>
        <label style={labelStyles}>Content</label>
        <textarea form="editDumpForm" required style={textAreaStyles} name="content"
          value={formState.content} onChange={handleChange} />
    </div>

    {/* Submit Button */}
    <input type="submit" value="Save Changes"></input>
    
  </form>
  )
}

export default EditDump;