import React, { useState } from 'react'
import './navbar.css'
import { FiMenu } from 'react-icons/fi'
import { ImCancelCircle } from 'react-icons/im'
import { motion } from 'framer-motion'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='nav'>
            <div className='nav_content'>
                <h1>JABIR.</h1>
                <div>
                    <ul className='nav_list'>
                        <a href='#home' ><li>Home</li></a>
                        <a href='#body'><li>Company</li></a>
                        <a href='#sign_up'><li>Resources</li></a>
                        <a href='#price'><li>About</li></a>
                        <a href='#footer'><li>Contact</li></a>
                    </ul>
                </div>
                <div className='nav_menu'>
                    <FiMenu onClick={() => setToggle(true)} className='burger' />


                    {toggle && (
                        <motion.div
                            whileInView={{ x: [250, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                            className="div">
                            <ImCancelCircle onClick={() => setToggle(false)} className='exit' />
                            <ul className='menu_list'>
                                <a href='#home' onClick={() => setToggle(false)}><li>Home</li></a>
                                <a href='#body' onClick={() => setToggle(false)}><li>Company</li></a>
                                <a href='#sign_up' onClick={() => setToggle(false)}><li>Resources</li></a>
                                <a href='#price' onClick={() => setToggle(false)}><li>About</li></a>
                                <a href='#footer' onClick={() => setToggle(false)}><li>Contact</li></a>
                            </ul>
                        </motion.div>
                    )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar