import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import {Container, PostCard} from "../components/index"

export default function AllPosts() {
  const [posts, setPosts] = useState()
  useEffect(()=>{
      appwriteService.getPosts([])
      if(posts){
        setPosts(posts.documents)
      }
    })
  return (
    <div className='w-full py-8'>
      <Container>
       <div className='flex flex-wrap'>
        {posts.map((post)=>(
          <div key={post.$id} className='p-2 w-1/4'>
            <PostCard post = {post} />
          </div>
        ))}
        </div>
      </Container>
    </div>
  )
  
}

