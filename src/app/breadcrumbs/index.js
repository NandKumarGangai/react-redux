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
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/breadcrumb">BreadCrumb</Link></li>
                    <li><Link to="/youtube">YouTube</Link></li>
                </ol>
            </nav>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="#breadcrumb-0">Home</a></li>
                    <li class="breadcrumb-item"><a href="#breadcrumb-1">Products</a></li>
                    <li class="breadcrumb-item"><a href="#breadcrumb-2">Accessories</a></li>
                </ol>
            </nav>
            {Breadcrumbs}
        </>
    );
}