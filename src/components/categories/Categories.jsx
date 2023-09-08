import React from 'react'
import './Categories.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { request } from '../../utils/fetchApi'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import { MdOutlinePreview } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'

const Categories = () => {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = [
    'all',
    'nature',
    'music',
    'travel',
    'design',
    'programming',
    'fun',
    'fashion'
  ]

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await request('https://backend-blog-app-62dk.onrender.com/blog/getAll', 'GET')
        setBlogs(data)
        setFilteredBlogs(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBlogs()
  }, [])

  useEffect(() => {
    if(activeCategory === 'all'){
      setFilteredBlogs(blogs)
    } else {
      setFilteredBlogs((prev) => {
        const filteredBlogs = blogs.filter((blog) => blog.category.toLowerCase() === activeCategory.toLowerCase())

        return filteredBlogs
      })
    }
  }, [activeCategory])


  return (
    <div className='containerg'>
      <div className='wrapperg'>
        <h3>Select a category</h3>
        <div className='categoriesAndBlogs'>
          <div className='categories'>
            {categories.map((category) => (
              <span
                key={crypto.randomUUID()} 
                
                className='category' 
                onClick={() => setActiveCategory(prev => category)}
              >
                {category}
              </span>
            ))}
          </div>
          {filteredBlogs?.length > 0 ?
            <div className='blogs'>
              {filteredBlogs?.map((blog) => (
                <div key={blog._id} className='blog'>
                  <Link to={`/blogDetails/${blog?._id}`}>
                    <img src={`https://backend-blog-app-62dk.onrender.com/images/${blog?.photo}`} />
                  </Link>
                  <div className='blogData'>
                    <div className='categoryAndMetadata'>
                      <span className='category'>{blog?.category}</span>
                      <div className='metadata'>
                        <MdOutlinePreview /> {blog.views} views
                      </div>
                      <div className='metadata'>
                        <AiFillLike /> {blog?.likes?.length} likes
                      </div>
                    </div>
                    <h4>{blog?.title}</h4>
                    <p className='blogDesc'>
                      {blog?.desc}
                    </p>
                    <div className='authorAndCreatedAt'>
                      <span><span>Author:</span> {blog?.userId?.username}</span>
                      <span><span>Created:</span> {format(blog?.createdAt)}</span>
                    </div>
                    <Link to={`/blogDetails/${blog._id}`} className='readMore'>
                      Read More <FiArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            : <h3 className='noBlogsMessage'>No blogs</h3>}
        </div>
      </div>
    </div>
  )
}

export default Categories