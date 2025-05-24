import { GraduationCap } from 'lucide-react'
import React from 'react'

const Navbar = ({ data }) => {
    return (
        <header className='sticky top-0 p-6 min-h-10 bg-black flex flex-row justify-between'>
            <div >
                <a href='#' className='flex gap-4 items-center'>
                    <GraduationCap size={44} color='#39ac6d' />
                    <h1 className="text-2xl font-bold text-white">SkillTrail</h1>
                </a>
            </div>
            <div className='flex '>
                <ul className='flex gap-8 items-center'>
                    <li>
                        <a href='/login'>
                            <h1 className="text-lg font-medium text-white">Login</h1>
                        </a>

                    </li>
                    <li className='bg-[#39ac6d] p-2 rounded-md'>
                        <a href='/signup' >
                            <h1 className="text-lg font-medium text-white">Sign Up</h1>

                        </a>
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Navbar
