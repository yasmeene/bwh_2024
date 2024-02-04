function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-options">
        <div className="contact-option">
          <div className="icon-wrapper">
            <i className="phone-icon"></i> {/* Replace with actual icon */}
          </div>
          <h3>By Phone</h3>
          <p>(Monday to Friday, 9am to 4pm PST)</p>
          <p>North America Toll-Free:<br/>1-877-930-7483</p>
          <p>International:<br/>1-604-637-0780</p>
        </div>
        <div className="contact-option">
          <div className="icon-wrapper">
            <i className="case-icon"></i> {/* Replace with actual icon */}
          </div>
          <h3>Start a New Case</h3>
          <p>Just send us your questions or concerns by starting a new case and we will give you the help you need.</p>
          <button className="contact-button">Start Here</button>
        </div>
        <div className="contact-option">
          <div className="icon-wrapper">
            <i className="chat-icon"></i> {/* Replace with actual icon */}
          </div>
          <h3>Live Chat</h3>
          <p>Chat with a member of our in-house team.</p>
          <button className="contact-button">Start Chat</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
