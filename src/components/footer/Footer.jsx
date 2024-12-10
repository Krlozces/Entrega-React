import React from 'react'
import items from '../../services/footerItems.json'
import CardFooter from '../CardFooter'
import '../../styles/main.css'
import '../../styles/footer.css'
function Footer() {
    return (
        <div className='footer-section'>
            <div className='footer'>
                {items.data.map(
                    (item, index) => (
                        <CardFooter key={index} title={item.title} items={[
                            item.firstTitle,
                            item.secondTitle,
                            item.thirdTitle,
                            item.fourthTitle,
                        ].filter(Boolean)} />
                    )
                )}
            </div>
        </div>
    )
}

export default Footer