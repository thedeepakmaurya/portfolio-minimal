import React, { useContext } from 'react'
import logo from '../assets/img/profile.png'
import userContext from '../utils/userContext'

const Profile = () => {

    const { profile }  = useContext(userContext); 

    return (
        <div className='flex sm:w-[90%] md:w-[70%] w-[43%] gap-5'>
            <div className='w-1/6'>
                <img className='w-20 rounded-full border-2 border-white shadow-black shadow-md' alt='profile-img' src={logo} />
            </div>
            <div className='w-5/6'>
                <a href='/'><h1 className='font-bold text-md'>{profile.name}</h1></a>
                <p className='text-sm mb-2'>{profile.summary}</p>
                <div className='flex gap-1'>
                    <a href='https://linkedin.com/in/thedeepakmaurya'><i className='bx bx-border bxl-linkedin hover:-translate-y-[1px] transition-all'></i></a>
                    <a href='https://github.com/thedeepakmaurya'><i className='bx bx-border bxl-github hover:-translate-y-[1px] transition-all' ></i></a>
                    <a href='https://discord.com/users/deepakstack'><i className='bx bx-border bxl-discord-alt hover:-translate-y-[1px] transition-all' ></i></a>
                    <a href='mailto:deipakmaurya@gmail.com'><i className='bx bx-border bxl-gmail hover:-translate-y-[1px] transition-all' ></i></a>
                </div>
            </div>
        </div>
    )
}

export default Profile;