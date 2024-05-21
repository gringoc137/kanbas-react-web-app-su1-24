export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">

            <img src="/images/reactjs.jpg" />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">

            <img src="/images/angular.jpg" />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS2345 Angular
              </a>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">

            <img src="/images/NLP.jpg" />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS4321 Natural Language Processing
              </a>
              <p className="wd-dashboard-course-title card-text">
              Data Science
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">

            <img src="/images/ML.jpg" />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS3456 Machine Learning
              </a>
              <p className="wd-dashboard-course-title card-text">
              Data Science
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">

            <img src="/images/SE.jpg" />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1234 Software Engineering
              </a>
              <p className="wd-dashboard-course-title card-text">
              Computer Science
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">

            <img src="/images/AI.jpg" />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1235 Intro to AI
              </a>
              <p className="wd-dashboard-course-title card-text">
              Artificial Intelligence
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">

            <img src="/images/cloud.jpg" />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1237 Cloud Computing
              </a>
              <p className="wd-dashboard-course-title card-text">
              Computer Science
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          {" "}
        </div>
      </div>
    </div>
  );}
  