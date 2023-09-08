import React from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { request } from '../../utils/fetchApi'
import Footer from '../../components/footer/Footer'
import './blogDetails.css'

import { format } from 'timeago.js'
import { AiFillEdit, AiFillLike, AiFillDelete, AiOutlineArrowRight, AiOutlineLike } from 'react-icons/ai'
import NavBar from '../../components/Navbar/NavBar'

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const { id } = useParams()
  const { user, token } = useSelector((state) => state.auth)

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const options = { 'Authorization': `Bearer ${token}` }
        const data = await request(`https://backend-blog-app-62dk.onrender.com/blog/find/${id}`, 'GET', options)
        setBlogDetails(data)
        setIsLiked(data.likes.includes(user._id))
      } catch (error) {
        console.error(error)
      }
    }
    fetchBlogDetails()
  }, [id])

  // like
  const handleLikePost = async () => {
    try {
      const options = { "Authorization": `Bearer ${token}` }
      await request(`https://backend-blog-app-62dk.onrender.com/blog/likeBlog/${id}`, "PUT", options)
      setIsLiked(prev => !prev)
    } catch (error) {
      console.error(error)
    }
  }

  // delete
  const handleDeleteBlog = async() => {
    try {
      const options = {"Authorization": `Bearer ${token}`}
      await request(`https://backend-blog-app-62dk.onrender.com/blog/deleteBlog/${id}`, "DELETE", options)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
     <NavBar/>
      <div className='containerb'>
        <Link to='/' className='goBack'>
          Go Back <AiOutlineArrowRight />
        </Link>
        <div className='wrapperb'>
          <img src={`https://backend-blog-app-62dk.onrender.com/images/${blogDetails?.photo}`} />
          <div className='titleAndControls'>
            <h3 className='title'>{blogDetails?.title}</h3>
            {blogDetails?.userId?._id === user._id ?
              <div className='controls'>
                <Link to={`/updateBlog/${blogDetails?._id}`} className='edit'>
                  <AiFillEdit />
                </Link>
                <div className='delete'>
                  <AiFillDelete onClick={handleDeleteBlog}/>
                </div>
              </div>
              :
              <>
                {isLiked
                  ? <div className='like'>
                    <AiFillLike onClick={handleLikePost} />
                  </div> 
                  :
                  <div className='like'>
                    <AiOutlineLike onClick={handleLikePost} />
                  </div>
                }
              </>
            }
          </div>
          <div className='descAndLikesViews'>
            <p className='desc'>
              <span>Description: </span>
              {blogDetails?.desc}
            </p>
            <div className='likesAndViews'>
              <span>{blogDetails?.views} views</span>
              <span>{blogDetails?.likes?.length} likes</span>
            </div>
          </div>
          <div className='authorAndCreatedAt'>
            <span><span>Author:</span> {blogDetails?.userId?.username}</span>
            <span><span>Created At:</span> {format(blogDetails?.createdAt)}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogDetails