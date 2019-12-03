import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from './breadcrumb/component';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
    const labels = ['label1', 'label2', 'label3'];
    const Breadcrumbs = labels.map((label, index) => <BreadCrumb id={index} label={label} />);
    return (
        <>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/breadcrumb">Products</Link></li>
                    <li class="breadcrumb-item"><Link to="/youtube">Accessories</Link></li>
                </ol>
            </nav>
            {Breadcrumbs}
        </>
    );
}