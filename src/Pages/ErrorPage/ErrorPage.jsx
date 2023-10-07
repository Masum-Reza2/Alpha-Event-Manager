import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../assets/images/errorpage.jpg'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <div className='text-center space-y-2'>
                <img className='w-1/2 md:w-1/3 lg:w-1/4 mx-auto ' src={errorImg} alt="" />
                <p className='font-semibold'>Sorry, an unexpected error has occurred.</p>
                <p className='font-bold'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to={'/'}>
                    <button className="btn btn-outline btn-success mt-2">Goto Home</button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage