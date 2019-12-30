import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import './index-styles.css'
import pic01 from '../assets/images/pic01.jpg'

// skills icon 
import reactIcon from '../assets/images/reactIcon.svg'
import reduxIcon from '../assets/images/reduxIcon.svg'
import javascriptIcon from '../assets/images/javascriptIcon.svg'
import expressIcon from '../assets/images/expressIcon.svg'
import githubIcon from '../assets/images/githubIcon.svg'
import nodeIcon from '../assets/images/nodeIcon.svg'
import npmIcon from '../assets/images/npmIcon.svg'
import cssIcon from '../assets/images/cssIcon.svg'
import htmlIcon from '../assets/images/htmlIcon.svg'
import sqlIcon from '../assets/images/sqlIcon.svg'
import mongodbIcon from '../assets/images/mongodbIcon.svg'

// projects
import whereToNext1 from '../assets/images/whereToNext1.png'
import dashboard1 from '../assets/images/dashboard1.png'
import careportal7 from '../assets/images/careportal7.png'

// import Contact from '../components/Contact'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Kelly Nguyen" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

{/* ABOUT ME */}

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hi, I'm Kelly!</h2>
                </header>
                <p>
                  I am a full stack web developer who is passionate about designing, creating, and building digital webpages that creates an intuitive, dynamic user experience. I believe one of the best things about being a developer is seeing your thoughts and visions come to life. This makes me eager to keep on learning and taking on new challenges to furthur my skills.
                  <br></br>
                  <br></br>
                  Fueled by high energy levels and boundless enthusiasm, I am easily inspired and more than willing to follow my fascinations wherever they take me. This pushes me in the pursuit of many interests, hobbies, areas of study, and artistic endeavors. 
                  <br></br>
                  <br></br>
                  When I'm not coding, you can find me by the lake fishing or crabbing, hiking, taking pictures and making videos, cooking up a new recipe, or swing dancing my heart away. 
                </p>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More About What I Do
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

{/* TECHNICAL SKILLS */}

          <section id="first" className="main special">
            <header className="major">
              <h2>Technical Skills</h2>
            </header>
            <div className="skills-set">
              <div className="skills-icon">
              <h3 id="skills-title">React</h3>
              <img
                src={reactIcon}
                alt="react-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>
              
                <div className="skills-icon">
                <h3 id="skills-title">Redux</h3>
                <img
                  src={reduxIcon}
                  alt="redux-icon"
                  style={{
                    width: 90,
                    height: 90,
                  }}
                />
                </div>

              <div className="skills-icon">
              <h3 id="skills-title">ES6+</h3>
              <img
                src={javascriptIcon}
                alt="javascript-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>


              <div className="skills-icon">
              <h3 id="skills-title">Express</h3>
              <img
                src={expressIcon}
                alt="express-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>

              <div className="skills-icon">
              <h3 id="skills-title">Github</h3>
              <img
                src={githubIcon}
                alt="github-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>

              <div className="skills-icon">
              <h3 id="skills-title">Node</h3>
              <img
                src={nodeIcon}
                alt="node-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>

                <div className="skills-icon">
                <h3 id="skills-title">NPM</h3>
                <img
                  src={npmIcon}
                  alt="npm-icon"
                  style={{
                    width: 90,
                    height: 90,
                  }}
                />
                </div>

              <div className="skills-icon">
              <h3 id="skills-title">SQL</h3>
              <img
                src={sqlIcon}
                alt="sql-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>


              <div className="skills-icon">
              <h3 id="skills-title">CSS3</h3>
              <img
                src={cssIcon}
                alt="css-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>

              <div className="skills-icon">
              <h3 id="skills-title">HTML5</h3>
              <img
                src={htmlIcon}
                alt="html-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>

            <div className="skills-icon">
              <h3 id="skills-title">MongoDB</h3>
              <img
                src={mongodbIcon}
                alt="mongodb-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
              </div>
            </div>

        
            <footer className="major">
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul> */}
            </footer>
          </section>

{/* PROJECTS */}

          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>

            <div>
              <h2 id="project one"> <a href="https://github.com/kelly-tnguyen/WhereToNext">Where To Next</a></h2>
              <img id="projectPic"
                src={whereToNext1}
                // style={{
                //   height: 500
                // }}
              />
                <p><br></br>
                 As a nature lover and an adventurer, my goal is to visit and explore all 62 National Parks in the United States. Where To Next allows users to keep track of parks that they have been to. Users can create their own profile and search for their desired parks and add it to their next adventure list. After exploring the park, they can then check it off and add it to the archive tab.
                </p>
            </div>

            <div>
              <h2 id="project two"> <a href="https://github.com/kelly-tnguyen/react-redux-reducer-dashboard">Redux Dashboard</a></h2>
              <img id="projectPic"
                src={dashboard1}
                // style={{
                //   height: 500
                // }}
              />
                <p><br></br>
                This is a hypothetical software dashboard page. Visualization, graphs, charts, and tables are shown on the front page using React, Redux, Javascript, HTML, and CSS. Users can view details on transactions, have a statistics overview of data, a tasks panel to follow up on previous tasks, a donut chart to better visualize data at a glance, and many more. 
                </p>
            </div>

            <div>
              <h2 id="project three"> <a href="https://github.com/kelly-tnguyen/rocket.build-2019">CarePortal</a></h2>
              <img id="projectPic mobile"
                src={careportal7}
                style={{
                  height: 500
                }}
              />
                <p><br></br>
                This application serves to bolster the support of local organizations and community members who can provide to families in need by creating a catalogue of items that they can search from. We created a mobile application where local volunteers can donate products (e.g. beds, rugs, etc.) or services (e.g. electrical or plumbing skills) to those in need.
                </p>
            </div>
            
            <footer className="major">
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul> */}
            </footer>
          </section>

{/* CONTACT ME */}
{/* <Contact/> */}
          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <br></br>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
