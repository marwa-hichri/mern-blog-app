import React from 'react'
import './Home.css'
import NavBar from '../../components/Navbar/NavBar'
import FeatureBlogs from '../../components/featureBlogs/FeatureBlogs'
import Categories from '../../components/categories/Categories'
import Newsletter from '../../components/newslettre/Newslettre'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <FeatureBlogs/>
        <Categories/>
        <Newsletter />
      <Footer />
    </div>
  )
}

export default Home