import React from "react";

function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={require('./img/about.png')} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              Welcome to Community Compass, where our core belief is in fostering resilience and providing support to those in need. Our journey is driven by two fundamental principles outlined in our mission and vision.
            </p>
            <p className="main-p">
              Mission Statement: To empower individuals and families by providing accessible pathways to essential services and resources, fostering resilience, and building a supportive community network. At Community Compass, we are dedicated to navigating together towards a future where everyone has the support they need to thrive.
            </p>
            <p className="main-p">
              Vision Statement: Envisioning a world where no one is left behind, Community Compass aims to be the beacon of hope and support for all. Our vision is to create an inclusive community where access to food, mental health support, and healthcare is a right, not a privilege. Through collaboration, innovation, and compassion, we strive to break down barriers and build a foundation for health, well-being, and opportunity for generations to come.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
