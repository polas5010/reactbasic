import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="container">
        
      <Header />
      
      <div className="main-content">
        <Sidebar />
        <div className="content">
          {/* Your main content goes here */}
          <h1>Main Content</h1>
          <p>This is an example of main content.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home