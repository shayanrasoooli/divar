import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPosts } from '../../../services/user'
import Loader from "../module/Loader"

function PostList() {
    const {data , isLoading } = useQuery(["my-post-list"] , getPosts)
    console.log(data);
  return (
    <div>
      {
        isLoading ? <Loader /> : (
          <>
          <h3>اگهی های شما</h3>
          {
            data.data.posts.map(post => (
              <div key={post._id}>
                <img src={`http://localhost:3400/${post.images[0]}`}  />
                <div>
                  <p>{post.options.title}</p>
                  <span>{post.options.content}</span>
                </div>
                <div>
                  <p>{post.createdAt}</p>
                  <span>{post.amount} تومان</span>
                </div>
              </div>
            ))
          }
          </>
        )
      }
    </div>
  )
}

export default PostList