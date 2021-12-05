import { useState } from "react"
import { FaCaretDown } from 'react-icons/fa'
import { Popover } from '@headlessui/react'

function DropDown({ label, options }) {
    const [selOpt, setSelOpt] = useState('Any')
    
//    const options1 = ['Daily', 'Weekly','Monthly']
    return (
        <>
            <Popover className="relative">
                <Popover.Button>
                    <div className="mb-4 sm:mb-0">
                        <button className="text-gray-400 hover:text-gray-200 flex items-center text-sm sm:px-4"> {label}: {selOpt} <FaCaretDown /></button>
                    </div>
                </Popover.Button>

                {/* <Popover.Panel className="absolute bg-gray z-10 border-gray-500 border rounded-md ">
                    <div className="grid grid-cols-12 text-right items-right">
                        <label  className="text-gray-400 hover:text-gray-200 flex items-center text-sm sm:px-4">Select a {label}</label>
                    
                        
                        
                    </div>
                    
                </Popover.Panel> */}

               
            </Popover>


        </>
    )
}

export default DropDown
