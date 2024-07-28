import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StaffEdit.css';

function StaffEdit() {
    const { id } = useParams();
    const [staff, setStaff] = useState({ name: '', title: '', image_url: '' });
    const navigate = useNavigate();
    const staffList = [
        { id: 1, name: 'Alexander', title: 'Professor of Physics', image_url: 'img/person.jpg' },
        { id: 2, name: 'Alexander', title: 'Professor of Chemistry', image_url: 'img/person.jpg' },
        { id: 3, name: 'Alexander', title: 'Professor of Mathematics', image_url: 'img/person.jpg' },
        { id: 4, name: 'Alexander', title: 'Lecturer in Molecular Biology', image_url: 'img/person.jpg' },
        { id: 5, name: 'Alexander', title: 'Professor of Biology', image_url: 'img/person.jpg' },
        { id: 6, name: 'Alexander', title: 'Lecturer in Mathematics', image_url: 'img/person.jpg' }
    ];



    const researchList = [
        { id: 1, staff_id: 1, research_title: 'Theory of Relativity', research_summary: 'Investigation of the fundamentals of spacetime.' },
        { id: 2, staff_id: 2, research_title: 'Radioactivity', research_summary: 'Discovery of radium and polonium, furthering understanding of atomic structure.' },
        { id: 3, staff_id: 3, research_title: 'Laws of Motion and Universal Gravitation', research_summary: 'Proposed the three laws of motion and the law of universal gravitation.' },
        { id: 4, staff_id: 4, research_title: 'X-Ray Diffraction', research_summary: 'Worked on the X-ray diffraction images of DNA, which led to the discovery of the DNA double helix.' },
        { id: 5, staff_id: 5, research_title: 'Theory of Evolution', research_summary: 'Proposed that all species of life have descended over time from common ancestors.' },
        { id: 6, staff_id: 6, research_title: 'Work on Analytical Engine', research_summary: 'Worked on the analytical engine, an early mechanical general-purpose computer.' }
    ];

    const articlesList = [
        { id: 1, staff_id: 1, article_title: 'On the Electrodynamics of Moving Bodies', article_url: 'https://www.wikisource.org/wiki/On_the_Electrodynamics_of_Moving_Bodies' },
        { id: 2, staff_id: 2, article_title: 'Radioactive Substances', article_url: 'https://www.gutenberg.org/ebooks/54206' },
        { id: 3, staff_id: 3, article_title: 'Philosophiæ Naturalis Principia Mathematica', article_url: 'https://www.gutenberg.org/files/28233/28233-h/28233-h.htm' },
        { id: 4, staff_id: 4, article_title: 'Molecular Configuration in Sodium Thymonucleate', article_url: 'https://profiles.nlm.nih.gov/spotlight/kr/feature/narrative' },
        { id: 5, staff_id: 5, article_title: 'On the Origin of Species', article_url: 'https://www.gutenberg.org/files/2009/2009-h/2009-h.htm' },
        { id: 6, staff_id: 6, article_title: 'Notes on the Analytical Engine', article_url: 'https://www.fourmilab.ch/babbage/sketch.html' }
    ];

    useEffect(() => {
        const staffMember = staffList.find(staff => staff.id === Number(id));
        setStaff(staffMember);
    }, [id]);

    const handleChange = (event) => {
        setStaff({ ...staff, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you might want to do something to save the updated staff information
        // but for now we'll just navigate back to the staff detail page
        navigate('/staff/' + id);
    }

    return (
        <div className="staff-container">
            <div className="staff-info">
                <h2>Staff Information</h2>
                <p>Name: {staff.name}</p>
                <p>Title: {staff.title}</p>
                <p><img src={staff.image_url}  alt={staff.name} /></p>
            </div>
            <form onSubmit={handleSubmit} className="staff-form">
                <label>
                    Name:
                    <input type="text" name="name" value={staff.name} onChange={handleChange} />
                </label>
                <label>
                    Title:
                    <input type="text" name="title" value={staff.title} onChange={handleChange} />
                </label>
                <label>
                    Image URL:
                    <input type="text" name="image_url" value={staff.image_url} onChange={handleChange} />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default StaffEdit;
