import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
    return (
        <div className="fullscreen-bg">
            <h1>Welcome to the Faculty Website</h1>
            <p>Explore our faculty members, their research, and more.</p>
            <Link to="/stafflist" className="btn">View Staff List</Link>
        </div>
    );
}


export default MainPage;
