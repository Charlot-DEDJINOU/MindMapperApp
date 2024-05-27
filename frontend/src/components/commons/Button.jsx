import ReloadIcon from '../icons/ReloadIcon'

/* eslint-disable react/prop-types */

export default function Button({onClick, className, isLoading = false, children}) {
    return(
        <button className={`bg-primary text-white py-2 px-3 rounded-md flex flex-row items-center justify-center ${className}`} onClick={onClick} type='submit'>
            {
                isLoading ? (
                    <>
                        <ReloadIcon className="animate-spin"/>
                        <span className="block mx-2">Loading...</span>
                    </>
                ) : children
            }
        </button>
    )
}