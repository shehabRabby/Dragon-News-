import React, { use } from 'react';
import { NavLink } from 'react-router';

// category data fetch
const categoryPromise = fetch("/categories.json")
.then((res) => res.json())


const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-semibold'>All Categories({categories.length})</h2>

            <div className='grid grid-cols-1 mt-5'>
                {
                    categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className='btn mb-3 bg-base-100 font-semibold hover:bg-base-200 border-0' >{category.name}</NavLink> )
                }
            </div>
        </div>
    );
};

export default Categories;