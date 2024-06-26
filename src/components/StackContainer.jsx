import React, { useContext } from 'react'
import { INFO } from '../utils/config'
import Stack from './Stack';
import userContext from '../utils/userContext';

const StackContainer = () => {

    const { stack } = INFO;
    const { stackdesc } = useContext(userContext)

    return (
        <div className='mt-8 sm:w-[90%] md:w-[70%] w-[43%]'>
            <div className='flex items-center justify-between pl-2 pr-2'>
                <h1 className='text-sm font-medium' ><i className='bx bx-laptop align-middle'></i> Tech Stack</h1>
                <p className='text-xs font-medium underline decoration-dotted'><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a></p>
            </div>
            <div className='mt-5 '>
            <p className='text-sm'>{stackdesc.description}</p>
            <br/>
            <p className='text-sm'>{stackdesc.description2}</p>
            </div>
            <div className='flex flex-wrap '>
                {
                    stack.map(stk => <Stack key={stk.id} stack={stk} />)
                }
            </div>
        </div>
    )
}

export default StackContainer;