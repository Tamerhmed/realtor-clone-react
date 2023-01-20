import {FcGoogle} from 'react-icons/fc';

const OAuth = () => {
  return (
    <button
            type='submit'
            className='flex items-center w-full bg-red-600
           text-white px-7 justify-center
            py-3 text-sm font-medium uppercase
             rounded shadow-md hover:shadow-lg
             hover:bg-red-800
             active:shadow-lg
             transition duration-150
             active:bg-red-900'
            >
          <FcGoogle 
          className='text-2xl bg-white
           rounded-full mr-2'
          />
            continue with google
          </button>
  )
}

export default OAuth