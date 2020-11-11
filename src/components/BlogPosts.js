import React from 'react'
import BlogPost from './BlogPost'

const BlogPosts = ({postsData}) => {

    return (
    <div className="blog-posts">      
      {
        //returns all the blogposts, that have been provided by props
        postsData
          .sort((a, b) => b.modified_date - a.modified_date)
          .map((post) => <BlogPost key={post._id} post={post} />)
      }
    </div>
    )
}

export default BlogPosts;