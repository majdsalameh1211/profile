import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/About.css';

const About = () => {
  const skills = [
    { title: "Programming", items: ["C", "C#", "C++", "JavaScript", "Python"] },
    { title: "Systems", items: ["ML/DL", "Data Mining", "Cloud Computing", "Server-Client Communication"] },
    { title: "Databases", items: ["SQL", "NoSQL"] },
    { title: "Tools", items: ["Git", "Linux", "Vercel", "Heroku"] },
    { title: "Frameworks", items: ["React", "Next.js", "Preact", "JavaFX"] },
    { title: "UI/UX", items: ["Web", "GUI", "Android"] },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of visible boxes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="about" className="about">
      
      <h4>About Me </h4>
      <div className="about-container">
        
        <div className="about-text">
          <p>
            I am a Software Engineering student with two semesters remaining,
            equipped with strong foundations in Software Systems Architecture,
            object-oriented programming (OOP), and functional programming. My
            experience includes developing diverse DevOps, full-stack, frontend,
            and backend projects, leveraging APIs and deploying applications to
            custom domains. As an Agile practitioner in dynamic environments, I
            excel as a collaborative team player with excellent communication
            skills. Passionate about continuous learning and innovation, I am
            eager to grow and contribute to impactful projects.
          </p>
          <h3>Software Engineering Student </h3>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h4>Skills</h4>
        <Slider {...sliderSettings}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              <h3>{skill.title}</h3>
              <ul>
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default About;
