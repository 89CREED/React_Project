import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {

    const location = useLocation();
    const path = location.pathname.split('/').filter((x) => x);

    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className='border-t-2 border-black mx-8 mt-6'>
            <div className='flex items-center gap-3 ml-20 mt-10'>
                <Link to="/" className='text-lg font-normal'>
                    Home
                </Link>
                {path.map((value, index) => {
                    const to = `/${path.slice(0, index + 1).join('/')}`;
                    const isLast = index === path.length - 1;
                    const displayValue = decodeURIComponent(value).replace(/-/g, ' ');
                    return (
                        <React.Fragment key={to}>
                            <span className='text-lg font-normal capitalize'>
                                {' -> '}
                            </span>
                            {!isLast ? (
                                <Link to={to} className='text-lg font-normal capitalize'>
                                    {displayValue}
                                </Link>
                            ) : (
                                <span className='text-lg font-normal capitalize'>
                                    {displayValue}
                                </span>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    )
}

export default Breadcrumbs
