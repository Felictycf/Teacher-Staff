import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const HomePageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const MentorImageWall = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MentorImage = styled.div`
  width: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const MentorImageImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const NewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NewsListItem = styled.li`
  margin-bottom: 20px;
`;

const NewsTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const NewsContent = styled.p`
  font-size: 14px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

// Mock Data
const mentors = [
  { id: 1, name: 'Mentor 1', image: 'mentor1.jpg' },
  { id: 2, name: 'Mentor 2', image: 'mentor2.jpg' },
  { id: 3, name: 'Mentor 3', image: 'mentor3.jpg' },
];

const news = [
  { id: 1, title: 'News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'News 2', content: 'Nullam vitae est at ipsum hendrerit pulvinar ut eu nunc.' },
  { id: 3, title: 'News 3', content: 'Pellentesque luctus velit id augue maximus semper.' },
];

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // 在这里执行搜索逻辑
  };

  const filteredMentors = mentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <HomePageContainer>
      <Title>Welcome to the Staff Homepage</Title>

      <SectionTitle>Mentor Image Wall</SectionTitle>
      <MentorImageWall>
        {filteredMentors.map((mentor) => (
          <MentorImage key={mentor.id}>
            <MentorImageImg src={mentor.image} alt={mentor.name} />
            <span>{mentor.name}</span>
          </MentorImage>
))}
</MentorImageWall>
<SectionTitle>News</SectionTitle>
  <NewsList>
    {news.map((item) => (
      <NewsListItem key={item.id}>
        <NewsTitle>{item.title}</NewsTitle>
        <NewsContent>{item.content}</NewsContent>
      </NewsListItem>
    ))}
  </NewsList>

  <SectionTitle>Staff Categories</SectionTitle>
  <SearchInput
    type="text"
    placeholder="Search staff..."
    value={searchQuery}
    onChange={handleSearch}
  />
</HomePageContainer>
);
}
export default HomePage;
