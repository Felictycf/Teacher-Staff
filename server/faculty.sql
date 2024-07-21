create database facutl_database;
use facutl_database;
CREATE TABLE Staff (
                       id INT AUTO_INCREMENT,
                       name VARCHAR(255),
                       title VARCHAR(255),
                       image_url VARCHAR(255),
                       PRIMARY KEY (id)
);
CREATE TABLE Research (
                          id INT AUTO_INCREMENT,
                          staff_id INT,
                          research_title VARCHAR(255),
                          research_summary TEXT,
                          PRIMARY KEY (id),
                          FOREIGN KEY (staff_id) REFERENCES Staff(id)
);
CREATE TABLE Articles (
                          id INT AUTO_INCREMENT,
                          staff_id INT,
                          article_title VARCHAR(255),
                          article_url VARCHAR(255),
                          PRIMARY KEY (id),
                          FOREIGN KEY (staff_id) REFERENCES Staff(id)
);


INSERT INTO Staff (name, title, image_url) VALUES
                                               ('Alexander', 'Professor of Physics', 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg'),
                                               ('Alexander', 'Professor of Chemistry', 'https://upload.wikimedia.org/wikipedia/commons/7/71/Marie_Curie_c1920.jpg');

INSERT INTO Research (staff_id, research_title, research_summary) VALUES
                                                                      (1, 'Theory of Relativity', 'Investigation of the fundamentals of spacetime.'),
                                                                      (2, 'Radioactivity', 'Discovery of radium and polonium, furthering understanding of atomic structure.');

INSERT INTO Articles (staff_id, article_title, article_url) VALUES
                                                                (1, 'On the Electrodynamics of Moving Bodies', 'https://www.wikisource.org/wiki/On_the_Electrodynamics_of_Moving_Bodies'),
                                                                (2, 'Radioactive Substances', 'https://www.gutenberg.org/ebooks/54206');
INSERT INTO Staff (name, title, image_url) VALUES
                                               ('Alexander', 'Professor of Mathematics', 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg'),
                                               ('Alexander', 'Lecturer in Molecular Biology', 'https://upload.wikimedia.org/wikipedia/en/6/60/Rosalind_Franklin.jpg'),
                                               ('Alexander', 'Professor of Biology', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Charles_Darwin_seated_crop.jpg'),
                                               ('Alexander', 'Lecturer in Mathematics', 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg');

INSERT INTO Research (staff_id, research_title, research_summary) VALUES
                                                                      (3, 'Laws of Motion and Universal Gravitation', 'Proposed the three laws of motion and the law of universal gravitation.'),
                                                                      (4, 'X-Ray Diffraction', 'Worked on the X-ray diffraction images of DNA, which led to the discovery of the DNA double helix.'),
                                                                      (5, 'Theory of Evolution', 'Proposed that all species of life have descended over time from common ancestors.'),
                                                                      (6, 'Work on Analytical Engine', 'Worked on the analytical engine, an early mechanical general-purpose computer.');

INSERT INTO Articles (staff_id, article_title, article_url) VALUES
                                                                (3, 'Philosophiæ Naturalis Principia Mathematica', 'https://www.gutenberg.org/files/28233/28233-h/28233-h.htm'),
                                                                (4, 'Molecular Configuration in Sodium Thymonucleate', 'https://profiles.nlm.nih.gov/spotlight/kr/feature/narrative'),
                                                                (5, 'On the Origin of Species', 'https://www.gutenberg.org/files/2009/2009-h/2009-h.htm'),
                                                                (6, 'Notes on the Analytical Engine', 'https://www.fourmilab.ch/babbage/sketch.html');

