import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Food Services" img="card1.png" text="We connect individuals facing food insecurity to local food banks offering fresh, canned, and packaged foods. Our services include daily food distribution and nutrition programs to promote healthy eating habits." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Mental Health Resources" img="card2.png" text="We guide you to essential mental health support, offering access to counseling, support groups, and online therapy through partnerships with licensed professionals and organizations like BetterHelp." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Clinics" img="card3.png" text="We provide access to family health clinics for comprehensive care, including check-ups, immunizations, and chronic disease management, ensuring ever receive the care they need at every life stage.

" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
