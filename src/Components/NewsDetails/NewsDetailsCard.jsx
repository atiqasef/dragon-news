import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router';

export default function NewsDetailsCard({news}) {
    const {thumbnail_url, title, details, category_id} = news;
  return (
    <div>
        <h1 className='mb-5'>Dragon News</h1>
        <img className='mb-5' src={thumbnail_url} alt="" />
        <h3>{title}</h3>
        <p className='mb-5'>{details}</p>
        <Link to={`/category/${category_id}`}><button className='btn btn-secondary'> <FaLongArrowAltLeft /> All category here</button></Link>
    </div>
  )
}
