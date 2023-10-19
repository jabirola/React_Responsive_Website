import React from 'react'
import './sign_up.css'

const Sign_up = () => {
    return (
        <div className='sign_up' id='sign_up'>
            <div className='sign_up_content'>
                <div className='news'>
                    <h1>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='mail'>
                    <form action="/url" method="GET">
                        <div><input type="email" id="email" placeholder="Enter Email" required /></div>
                        <div><button type="submit">Notify Me</button></div>
                    </form>
                    <p>We care about the protection of your data. Read our <a href="http://localhost:3000/">privacy policy</a></p>
                </div>

            </div>

        </div>

    )
}

export default Sign_up