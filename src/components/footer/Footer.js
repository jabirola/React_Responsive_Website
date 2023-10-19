import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer_content'>
                <div className='intel'>
                    <h1>REACT.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                </div>

                <div className='content_lists'>
                    <ul>
                        <li>Solutions</li>
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insight</li>
                    </ul>
                    <ul>
                        <li>Supports</li>
                        <li>Pricing</li>
                        <li>Hosting</li>
                        <li>Guides</li>
                        <li>Api Status</li>
                    </ul>
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Careers</li>
                    </ul>
                    <ul>
                        <li>Legal</li>
                        <li>Claim</li>
                        <li>Policy</li>
                        <li>Terms</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Footer