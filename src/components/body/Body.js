import React from 'react'
import './body.css'
import laptop from './resources.45ddf500e572fb2f1d35.jpg'

const Body = () => {
    return (
        <div className='dashboard' id='body' >
            <div className='dashboard_content'>
                <div><img src={laptop} alt='laptop' /></div>
                <div>
                    <h3>DATA ANALYTICS DASHBOARD</h3>
                    <h2>Manage Data Analytics Centrally</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?</p>
                    <button>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Body