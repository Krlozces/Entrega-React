import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../styles/main.css'
import { Link } from 'react-router-dom'
function Cart() {
    return (
        <>
            <Link to="/cart-page"><FontAwesomeIcon icon={faCartShopping} className='icons' /></Link>
        </>
    )
}

export default Cart