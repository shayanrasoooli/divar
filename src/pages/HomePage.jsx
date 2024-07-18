import React from 'react'
import SideBar from '../components/template/SideBar'
import Main from '../components/template/Main'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../../services/user'
import Loader from '../components/module/Loader'
import { getCategory } from '../../services/admin'
const style = {display : "flex"}

function HomePage() {
    const {data: categories ,isLoading : catLoading} = useQuery(["get-categories" ], getCategory)


  const {data: posts , isLoading : postLoading}  = useQuery(["post-list"] , getAllPosts)
  return (
    <>
    {
      catLoading || postLoading ? <Loader/> : (
    <div style={style}>
      <SideBar categories={categories}/>
      <Main posts={posts} />
    </div>
      )
    }
    </>
  )
}

export default HomePage