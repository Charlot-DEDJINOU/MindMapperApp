import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PageTitle = ({ title, path }) => {
  const location = useLocation();

  useEffect(() => {
    const array = path.split('/')
    document.title = array[array.length - 1].toUpperCase() + ' | SIFASOFT';
  }, [location, title]);

  return(
    <div className='text-black dark:text-white'>
        <p className='text-3xl font-bold mb-2'>{title}</p>
        <p className='opacity-85'>{path}</p>
    </div>
  );
};

export default PageTitle;