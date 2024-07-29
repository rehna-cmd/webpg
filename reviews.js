import React from 'react';
const ReviewsAndAdvisors = () => 
{return (
<div className="container mt-5">
{/* Reviews Section */} 
<div className="text-center mb-5"> 
<h2>5-star reviews on Trustpilot from satisfied customers</h2>
<div className="d-flex justify-content-center mt-4">
 <div className="card mx-2" style={{ width: '18rem' }}>
<div className="card-body">
<p className="card-text">Firstly, the website of Lanterna Education is so easy to open and access. Also, there are plentiful resources available for free!</p>
 <p className="text-muted">4.8/5.0</p>
 <p className="text-muted">Claudia Kemper</p>
  </div>
</div>
<div className="card mx-2" style={{ width: '18rem' }}>
 <div className="card-body">
<p className="card-text">The tutor that Lanterna recommended for my IA was very professional and had deep knowledge of the subject.</p>
<p className="text-muted">4.8/5.0</p>
<p className="text-muted">Claudia Kemper</p>
  </div>
 </div>
 <div className="card mx-2" style={{ width: '18rem' }}>
  <div className="card-body">
<p className="card-text">Firstly, the website of Lanterna Education is so easy to open and access. Also, there are plentiful resources available for free!</p>
 <p className="text-muted">4.8/5.0</p>
<p className="text-muted">Claudia Kemper</p>
</div>
 </div>
 </div>
 </div>
{/* Advisors Section */}
  <div className="text-center mb-5">
 <h2>Our advisor. With you 360.</h2>
  <p>We'll put some happy little leaves here and there. In nature, dead trees are just as normal <br></br> as live trees. The very fact that you're aware of suffering is enough reason.</p>
 <div className="row">
<div className="col-md-4">
<div className="card mb-4">
<img src="Advisor1.png" className="card-img-top" alt="Advisor 1" />
 <div className="card-body">
 <h5 className="card-title">Why I believe tutoring can <br></br> help everyone.</h5>
<p className="card-text">Painting should do one thing. It should put happiness in your heart. Let's make a nice big leafy tree some happy little limbs on this tree.</p>
</div>
 </div>
 </div>
<div className="col-md-4">
 <div className="card mb-4">
<img src="Advisor2.jpg" className="card-img-top" alt="Advisor 2" />
  <div className="card-body">
<h5 className="card-title">Why I believe tutoring can <br></br>  help everyone.</h5>
 <p className="card-text">Painting should do one thing. It should put happiness in your heart. Let's make a nice big leafy tree some happy little limbs on this tree.</p>
</div>
 </div>
</div>
<div className="col-md-4">
 <div className="card mb-4">
 <img src="Advisor3.jpg" className="card-img-top" alt="Advisor 3" />
<div className="card-body">
 <h5 className="card-title">Why I believe tutoring can <br></br> help everyone.</h5>
 <p className="card-text">Painting should do one thing. It should put happiness in your heart. Let's make a nice big leafy tree some happy little limbs on this tree.</p>
</div>
 </div>
 </div>
</div>
<a href="/advisors" className="btn btn-warning">View all advisors</a>
 </div>
 </div>
  );
}
export default ReviewsAndAdvisors;