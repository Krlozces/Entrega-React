import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../styles/main.css'
import { Link } from 'react-router-dom'
function Favourites() {
    return (
        <>
            <Link to="/wishlist"><FontAwesomeIcon icon={faHeart} className='icons' /></Link>
        </>
    )
}

export default Favourites