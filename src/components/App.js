import React, { useState, useEffect } from 'react'
import blogData from '../data/post_data'

const App = () => {

  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    setBlogPosts(blogData)
  }, [])

  return (
    <div className="App">
        A basic empty template
    </div>
  );
}

export default App;


