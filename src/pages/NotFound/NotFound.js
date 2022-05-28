import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/notFound.png'

const NotFound = () => {
    return (
        <main>
            <section>
                <div className="container py-32 mx-auto text-center">
                    <img src={notFound} alt="notfound" className=' w-5/12 mx-auto' />
                    <h1 className='mt-5'>Ooops! Error 404</h1>
                    <p className='mb-5'>Sorry, But the page you are looking for doesn't exist!</p>
                    <Link to='/' className=' bg-primary py-3 px-4 text-lime-50'>Go to home page</Link>
                </div>
            </section>
        </main>
    );
};

export default NotFound;