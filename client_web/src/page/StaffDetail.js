import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './StaffDetail.css';

function StaffDetail() {
    const { id } = useParams();
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

    const staff = staffList.find(s => s.id === parseInt(id));
    const research = researchList.filter(r => r.staff_id === parseInt(id));
    const articles = articlesList.filter(a => a.staff_id === parseInt(id));

    if (!staff) {
        return <div>Loading...</div>;
    }

    return (
        <div className="staff-detail">
            <div className="staff-header">
                <div className="staff-info">
                    <img className="staff-image" src={staff.image_url} alt={staff.name} />
                    <h1>{staff.name}</h1>
                    <p>{staff.title}</p>
                    <Link to={`/edit/${id}`} className="edit-button">Edit</Link>
                </div>
            </div>
            <h2>Research</h2>
            {research.map(r => (
                <div key={r.id} className="research-item">
                    <h3>{r.research_title}</h3>
                    <p>{r.research_summary}</p>
                </div>
            ))}
            <h2>Articles</h2>
            {articles.map(a => (
                <div key={a.id} className="article-item">
                    <a href={a.article_url}>{a.article_title}</a>
                </div>
            ))}
        </div>
    );
}

export default StaffDetail;
