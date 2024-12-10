import React from 'react'
import NavBar from '../components/header/NavBar'
import Footer from '../components/footer/Footer'
import '../styles/main.css'
import Content from '../components/main/Content'
function Home() {
    return (
        <>
            <NavBar />
            <Content />
            <Footer />
            
        </>
    )
}

export default Home