export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
          <img src="/images/angular.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS2345 Angular
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/NLP.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS4321 Natural Language Processing
            </a>
            <p className="wd-dashboard-course-title">
              Data Science
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/ML.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS3456 Machine Learning
            </a>
            <p className="wd-dashboard-course-title">
              Data Science
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/SE.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS1234 Software Engineering
            </a>
            <p className="wd-dashboard-course-title">
              Computer Science
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/AI.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS1235 Intro to AI
            </a>
            <p className="wd-dashboard-course-title">
              Artificial Intelligence
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/cloud.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS1237 Cloud Computing
            </a>
            <p className="wd-dashboard-course-title">
              Computer Science
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>{" "}
      </div>
    </div>
  );}
  