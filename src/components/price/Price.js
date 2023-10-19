import React from 'react'
import './price.css'
import single_user from './single_user.png'
import couple_users from './couple_users.png'
import multiple_users from './multiple_users.png'
const Price = () => {
    return (
        <div className='card_container'>
            <div className='card_content' id='price'>
                <div className='card'>
                    <img src={single_user} alt='single_user' />
                    <h1> $ 149</h1>
                    <h2>500 GB Storage</h2>
                    <h2>1 Granted User</h2>
                    <h2>Send up to 2GB</h2>
                    <button>Start trial</button>
                </div>
                <div className='card'>
                    <img src={couple_users} alt='couple_users' />
                    <h1> $ 238</h1>
                    <h2>1500 GB Storage</h2>
                    <h2>2 Granted User</h2>
                    <h2>Send up to 4GB</h2>
                    <button>Start trial</button>
                </div>
                <div className='card'>
                    <img src={multiple_users} alt='multiple_users' />
                    <h1> $ 521</h1>
                    <h2>4000 GB Storage</h2>
                    <h2>5 Granted User</h2>
                    <h2>Send up to 15GB</h2>
                    <button>Start trial</button>
                </div>

            </div>
        </div>
    )
}

export default Price