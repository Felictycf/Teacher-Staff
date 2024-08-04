import React from 'react';

const styles = {
  container: {
    margin: '0 auto',
    width: '50%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px'
  },
  title: {
    color: '#444',
    textAlign: 'center'
  },
  // add more styles as you need
};

const StaffProfile = ({ profile }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p>{profile.researchField}</p>
      <h3>Research Achievements</h3>
      {profile.research.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <h3>Papers</h3>
      {profile.papers.map((paper, index) => (
        <div key={index}>
          <p>{paper.title}</p>
          <a href={paper.downloadLink}>Download</a>
        </div>
      ))}
    </div>
  );
};

export default StaffProfile;
