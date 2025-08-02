import React from 'react'
import { Link } from 'react-router-dom'

const Damages = () => {

    const damages = [
        {
            image: '/images/brokenscrn.png',
            title: 'Water Ingress Damage',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam, ex nostrum quos perferendis et officia officiis corrupti laudantium in  '
        },
        {
            image: '/images/battery.png',
            title: 'Poor Battery Life',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam, ex nostrum quos perferendis et officia officiis corrupti laudantium in  '
        },
        {
            image: '/images/chargingport.png',
            title: 'Broken Speakers',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam, ex nostrum quos perferendis et officia officiis corrupti laudantium in  '
        },
        {
            image: '/images/camera.png',
            title: 'Cracked Screens',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam, ex nostrum quos perferendis et officia officiis corrupti laudantium in  '
        },
        {
            image: '/images/speaker.png',
            title: 'Bent Chassis',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam, ex nostrum quos perferendis et officia officiis corrupti laudantium in  '
        },
        {
            image: '/images/motherboard.png',
            title: 'Camera Malfunction',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam, ex nostrum quos perferendis et officia officiis corrupti laudantium in  '
        }
    ]

    const displayDamages = (image, title, text) =>{
        return (
            <div className='flex flex-col items-center justify-center gap-3 rounded-3xl bg-white text-black p-8 '>
                <div className='flex items-center justify-center mb-4 rounded-full bg-teal-200'
                style={{ width: '70px', height: '70px',  }}>
                {/* <img src={image} alt={title} className='w-full h-40 object-cover mb-4 rounded' /> */}
                </div>
                <h2 className='text-xl font-bold mb-2'>{title}</h2>
                <p className='text-xs font-semibold'>{text}</p>
                <Link to="/order"><button className='mt-4 border border-gray-900 text-gray-900 px-3 text-xs font-semibold py-2 rounded-3xl'>Fix My Phone</button></Link>
            </div>
        )
    }

    const displayAllDamages = damages.map((damage, index) => (
        <div key={index} className='flex-1'>
            {displayDamages(damage.image, damage.title, damage.text)}
        </div>
    ))
  return (
     <div className='flex gap-10 flex-col items-center bg-[#0A3A5C] text-white justify-center md:px-40 md:py-24 mt-10'>
        <h1 className='text-center text-3xl font-bold lg:w-2/5'>We Make Mobile  Device Repair Stress Free</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-blue-900'>
                {displayAllDamages}
          
        </div>
      </div>
  )
}

export default Damages