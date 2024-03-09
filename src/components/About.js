import React from 'react';

const About = () => {


    return (
        <>
        
          <div className="about">
          <div className="about__container  container">
            <div className="about__image-container">

            </div>
              <div className="about__text-container">
                <p className="about__text">I am a front-end developer with audiovisual creation background.</p>

                <p>After some years working as a graphic designer, photographer and videographer I decided to reinvent myself as a front-end developer. I am passionate about constant learning so the dynamism of the digital world is perfect for me.  </p>
              </div>
              
            <div className="about__skills--container">
              <ul className="about__technical-skills">
                <h3 className="about__skills--title">Technical Skills</h3>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SAAS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue</li>
                <li>Git</li>
              </ul>
              <ul className="about__design-skills">
                <h3 className="about__skills--title">Design Skills</h3>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>InDesign</li>
                <li>Premiere</li>
                <li>After effects</li>
                <li>Capture One</li>
              </ul>
              <ul className="about__soft-skills">
                <h3 className="about__skills--title">Soft Skills</h3>
                <li>Proactive</li>
                <li>Problem solving</li>
                <li>Creative and innovative</li>
                <li>Curious</li>
                <li>Teamwork</li>
                <li>Teleworking</li>
              </ul>
            </div>

         

          <nav className="about__social-container">
            <ul className="about__social">
              <li><a className="social__icon" href="./cv.pdf" aria-label="download cv" title="cv" alt="cv" rel="noopener noreferrer" target="_blank"><i className="far fa-file"></i></a></li>
              <li><a className="social__icon" href="https://es.linkedin.com/in/maria-mateo-vazquez" aria-label="linkedin" title="linkedin" alt="linkedin" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a className="social__icon" href="https://github.com/mnemearie" aria-label="github" title="github" alt="github" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-alt"></i></a></li>
              <li><a className="social__icon" href="https://twitter.com/mnemearie" aria-label="twitter" title="twitter" alt="twitter" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li><a className="social__icon" href="https://www.instagram.com/mnemearie/" aria-label="instagram" title="instagram" alt="instagram" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>            </ul>
        </nav>
        </div>
        </div>
        </>
  



  
  
  
    )
  }
  
  export default About;