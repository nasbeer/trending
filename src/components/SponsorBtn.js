import { Icon } from '@iconify/react';
import { useState } from 'react';

function SponsorBtn() {
   // const [sponsor, setSponsor] = useState(false)
    const[sponsor] = useState(false)
    // const handleSponsor = () => {
    //     setSponsor(!sponsor)
    // }
    return (
        <button  className="px-3 py-1 mr-2 text-xs text-gray-400 leading-5 bg-gray-600 bg-opacity-25 border rounded-md transition duration-200 ease-in-out border-gray-500 border-opacity-40  hover:border-gray-400 hover:bg-opacity-50">
            {

                (!sponsor) ? (
                    <>
                       <a href="https://github.com/sponsors/community" > <Icon className="text-pink-400 mr-1 md:mr-1 align-text-bottom inline-block overflow-visible" icon="octicon:heart-16" height={16} width={16} />
                        <span className="hidden md:inline font-medium"> Sponsor </span></a>
                    </>
                    ) : (
                    <>
                      
                    </>
                    )
            }
            
        </button> 
    )
}

export default SponsorBtn
