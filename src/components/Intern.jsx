import React from 'react'

const Project = ({ intern }) => {

    const { designation, company, img } = intern;

    return (
        <div className='w-1/2 flex gap-2 mt-8'>
            <div>
                <img className='w-[46px] h-[46px] border-white shadow-md shadow-black rounded-lg hover:grayscale' alt='thumbnail-img' src={img} />
            </div>
            <div >
                <h1 className='text-md font-medium'>{company}</h1>
                <p className='text-sm pb-1'>{designation}</p>
            </div>
        </div>
    )
}

export default Project