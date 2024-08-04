import React from 'react';
import { Link } from 'react-router-dom';
import './StaffList.css';

function StaffList() {
    const staffList = [
        { id: 1, name: 'Alexander', title: 'Professor of Physics', image_url: 'img/person.jpg' },
        { id: 2, name: 'Alexander', title: 'Professor of Chemistry', image_url: 'img/person.jpg' },
        { id: 3, name: 'Alexander', title: 'Professor of Mathematics', image_url: 'img/person.jpg' },
        { id: 4, name: 'Alexander', title: 'Lecturer in Molecular Biology', image_url: 'img/person.jpg' },
        { id: 5, name: 'Alexander', title: 'Professor of Biology', image_url: 'img/person.jpg' },
        { id: 6, name: 'Alexander', title: 'Lecturer in Mathematics', image_url: 'img/person.jpg' }
    ];

    return (
        <div id="stafflist" className="text-center">
            <div className="staff-list">
                <h1>Staff List</h1>
                {staffList.map(staff => (
                    <div key={staff.id} className="staff-card">
                        <img className="staff-image" src={staff.image_url} alt={staff.name} />
                        <div className="staff-info">
                            <h2><Link to={`/staff/${staff.id}`}>{staff.name}</Link></h2>
                            <p>{staff.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StaffList;
