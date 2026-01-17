import React, { use } from 'react'
import { NavLink } from 'react-router';
const categoriesPromise = fetch('/categories.json').then(res=> res.json());
export default function Categories() {
    const categories = use(categoriesPromise);
    console.log(categories)
  return (
    <div>
        <h3>Categories: {categories.length}</h3>
        <div className='grid grid-cols-1 mt-5 gap-5'>
            {
                categories.map(category => 
                <NavLink to={`/category/${category.id}`} className='hover:bg-base-200 py-3 text-center w-full' key={category.id}>{category.name}</NavLink>)
            }
        </div>
    </div>
  )
}
