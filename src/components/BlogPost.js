import React from 'react'

const BlogPost = ({post}) => {

  if(!post) {
    return null;
  }

    return ( <div className="blog-post">

      <h1>BlogPost</h1>
    
    </div> )
}

export default BlogPost;