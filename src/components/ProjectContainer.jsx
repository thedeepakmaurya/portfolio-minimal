import { INFO } from '../utils/config'
import Project from './Project';

const ProjectContainer = () => {

    const { projects } = INFO;

    return (
        <div className='mt-16 sm:w-[90%] md:w-[70%] w-[43%]'>
            <div className='flex items-center justify-between pl-2 pr-2'>
                <h1 className='text-sm font-medium' ><i className='bx bx-code-alt align-middle'></i> Project</h1>
                <p className='text-xs font-medium underline decoration-dotted'><a href='https://github.com/thedeepakmaurya'>GitHub </a></p>
            </div>
            <div className='flex flex-wrap '>
                {
                    projects.map(project => <Project key={project.id} project={project} />)
                }
            </div>
        </div>
    )
}

export default ProjectContainer;