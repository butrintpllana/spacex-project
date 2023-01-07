import React from 'react'
import { Link } from 'react-router-dom'
import {SiSpacex} from "react-icons/si"

export default function Header() {
  return <>
    <header className='flex items-center justify-between px-80'>
        <div>
            <Link to="/">

                <SiSpacex className='text-7xl text-indigo-900 text-center' /> 

            </Link>
        </div>
            <ul>
              {/* <li>
                <Link to="/" className="text-indigo-900 text-sm lg:text-base">Home</Link>
              </li> */}
            </ul>
        <nav>
           

        </nav>
    </header>
  
  </>
}

