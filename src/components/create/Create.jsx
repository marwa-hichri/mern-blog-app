import React, { useState } from 'react'
import './create.css'
import Footer from '../footer/Footer'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { request } from '../../utils/fetchApi'

const Create = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState("")
  const [category, setCategory] = useState("")
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)

  const onChangeFile = (e) =>{
    setImg(e.target.files[0])
  }

  const handleCloseImg = () => {
    setImg(null)
  }

  const handleCreateBlog = async(e) =>{
    e.preventDefault()
    try {
      const formData = new FormData()

      let filename = null
      if (img) {
        filename = crypto.randomUUID() + img.name
        console.log("filename : " , filename)
        formData.append("filename", filename)
        formData.append("image", img)

        await fetch(`http://localhost:8585/upload`, {
          method: "POST",
          body: formData
        })
      } else {
        return
      }

      const options = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }

      const body = {
        title,
        desc,
        category,
        photo: filename
      }


      const data = await request('/blog', "POST", options, body)
      navigate(`/blogDetails/${data._id}`)

    } catch (error) {
      console.error(error)
    }
  
  }
  const categories = [
    'nature',
    'music',
    'travel',
    'design',
    'programming',
    'fun',
    'fashion'
  ]
  return (
    <>
    <div className='containerc'> 
      <div className='wrapperc'>
        <h2 className='title'>Create Blog</h2>
        <form className='formc' onSubmit={handleCreateBlog} encType='multipart/form-data'>
          <div className='inputwrapper'>
          <label>Title:</label>
          <input type='text' placeholder='title' className='input' onChange={(e)=> setTitle(e.target.value)}/>
          </div>


          <div className='inputwrapper'>
          <label>Description:</label>
          <input type='text' placeholder='description' className='input' onChange={(e)=> setDesc(e.target.value)} />
          </div>


          <div className='inputWrapperSelect'>
          <label>Category:</label>
          <select  value={category} onChange={(e) => setCategory(e.target.value)} >
          {categories.map((category) => (
                  <option key={crypto.randomUUID()} value={category}>{category}</option>
                ))}
          </select>
          </div>

          <div className='inputwrapperImg'>
            <label htmlFor='image' className='labelFileInput'>
              Image: <span>Upload here</span>
            </label>
            <input id='image'
            type='file' className='input' onChange={onChangeFile} style={{display:'none'}}/>
            {img && <p className='imageName'>{img.name} <AiOutlineClockCircle className='closeIcon' onClick={()=>handleCloseImg()}/></p>}
          </div>
          <div className='buttonwrapper'>
            <button className='submitBtn' type='submit'>
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Create