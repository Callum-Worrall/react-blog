import React, { useState, useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import blogData from './data/post_data'
import Nav from './components/Nav'

import BlogPost from './components/BlogPost'
import BlogPosts from './components/BlogPosts'
import NewBlogPost from './components/NewBlogPost'
import EditBlogPost from './components/EditBlogPost'

const App = () => {

  const [blogPosts, setBlogPosts] = useState([])

  //Grabs the post data from ./data/post_data
  useEffect(() => {
    setBlogPosts(blogData)
  }, [])

  const getPostFromId = (id) => {
    return blogPosts.find((p) => p._id === parseInt(id))
  }

  const nextId = () => {
    return blogPosts.reduce((acc, cur) => acc._id > cur._id? acc : cur, {_id: 0})._id + 1
  }

  //Add
  const addBlogPost = (post) => {
    setBlogPosts([...blogPosts, post])
  }

  //Delete
  const deleteBlogPost = (id) => {
    const updatedPosts = blogPosts.filter((p) => p._id !== parseInt(id))
    setBlogPosts(updatedPosts)
  }

  //Update
  const updateBlogPost = (inPost) => {
    const updatedPosts = blogPosts.map((p) => (p._id === inPost._id) ? inPost : p)
    setBlogPosts(updatedPosts)
  }


  return (
    <div className="App">
        <BrowserRouter>
          <Nav />
          <h1>Blog App</h1>

        {/* New Blog Post Path - '/posts/new' */}
          <Route exact path="/posts/new" render={props =>
            <NewBlogPost {...props}
              addBlogPost={addBlogPost}
              nextId={nextId()}
              post={getPostFromId(props.match.params.id)}
            />

          }/>
        
        {/* Update Blog Post Path - '/posts/edit/:id' */}
        <Route exact path="/posts/edit/:id" render={(props) => 
          <EditBlogPost {...props}
            updateBlogPost={updateBlogPost}
            post={getPostFromId(props.match.params.id)}
          />

        }/>

        {/*
        <Route exact path="/posts/edit/:id" render={(props) => 
            <EditBlogPost {...props} updateBlogPost={updateBlogPost} 
              post={getPostFromId(props.match.params.id)}/>
        } />
        
        */}

        {/* Single Blog Post Path - '/posts/:id' */}
          <Route exact path="/posts/:id" render={(props) =>
            <BlogPost {...props} post={ getPostFromId(props.match.params.id) }
              showControls deleteBlogPost={deleteBlogPost} />
          } />

        {/* Home / All Blog Posts - '/' */}
          <Route exact path="/" render={(props) =>
            <BlogPosts {...props} postsData={blogPosts} />} />

        </BrowserRouter>
    </div>
  );
}

export default App;


/*


import React,{useState, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import blogData from './data/post_data'
import BlogPosts from './components/BlogPosts'
import BlogPost from './components/BlogPost'
import NewBlogPost from './components/NewBlogPost'
import EditBlogPost from './components/EditBlogPost'
import Nav from './components/Nav'

const App = () => {

  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    setBlogPosts(blogData)
  }, [])

  const getPostFromId = (id) => {
    return blogPosts.find((p) => p._id === parseInt(id))
  }

  const nextId = () => {
    return blogPosts.reduce((acc, cur) => acc._id > cur._id? acc : cur, {_id: 0})._id + 1
  }

  const addBlogPost = (post) => {
    setBlogPosts([...blogPosts, post])
  }

  const deleteBlogPost = (id) => {
    const updatedPosts = blogPosts.filter((p) => p._id !== parseInt(id))
    setBlogPosts(updatedPosts)
  }

  const updateBlogPost = (inPost) => {
    const updatedPosts = blogPosts.map((p) => (p._id === inPost._id) ? inPost : p)
    setBlogPosts(updatedPosts)
  }

  return (
    <div >
      <BrowserRouter>
        <Nav />
        <h1>Blog App :O</h1>
        <Route exact path="/posts/edit/:id" render={(props) => 
              <EditBlogPost {...props} updateBlogPost={updateBlogPost} 
                post={getPostFromId(props.match.params.id)}/>
          } />
        <Route exact path="/posts/new" render={props => 
          <NewBlogPost {...props} addBlogPost={addBlogPost} nextId={nextId()}/>} />
        <Route exact path="/posts/:id" render={(props) =>
          <BlogPost {...props} post={getPostFromId(props.match.params.id)}
            showControls deleteBlogPost={deleteBlogPost} />
        } />
        <Route exact path="/" render={(props) => <BlogPosts {...props} postsData={blogPosts} />} />
      </BrowserRouter>
    </div>
  )
}

export default App
*/