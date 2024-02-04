import React from "react";
function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={require('./img/card1.png')} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              At Community Compass, we believe in providing a beacon of hope
              and support for those in need. Our mission is to connect
              individuals and families with essential services such as food banks,
              and mental health resources. Through partnerships with organizations 
              like BetterHelp and local clinics, we aim to create a comprehensive 
              network of support for every community member.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
