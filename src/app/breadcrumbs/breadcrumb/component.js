import React from 'react';
import './style.css';

const BreadCrumb = ({ id, label }) => {
    return (
        <div id={`breadcrumb-${id}`} className='bg-primary'>
            <span>
                <h2>{label}</h2>
            </span>
            <button className='btn btn-secondary' type='button'>
                Submit and Continue
            </button>
        </div>
    );
};

export default BreadCrumb;