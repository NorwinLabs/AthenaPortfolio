import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Windhelm",
      description: "A procedurally generated fantasy RPG created with C++ and UE5.",
      imgUrl: projImg1,
    },
    {
      title: "DiscordDupe",
      description: "A small yet effective application for online communication between different hosts written in Assembly language.",
      imgUrl: projImg2,
    },
    {
      title: "AthenaPortfolio",
      description: "Ironically, this repo is THIS exact site. Written in React.js, HTML, and SCSS",
      imgUrl: projImg3,
    }
  ];

  const Windhelm = [
    {
      title: "Windhelm",
      description: "A procedurally generated fantasy RPG created with C++ and UE5.",
      imgUrl: projImg1,
    }
  ];

    const DiscordDupe = [
      {
        title: "Custom Linux Server + Site",
        description: "This is a custom HTML/CSS Website hosted on an Apache2 webserver running on a raspberry pi4. ",
        imgUrl: projImg4,
      }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I try to create projects that will allow me to learn while I create something awesome!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects & Repos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Windhelm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Custom Linux Server + Site</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This is my personal passion project, Windhelm! Coming to PC in 2025!</p>
                      <Row>
                        {
                          Windhelm.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>This is a custom HTML/CSS Website hosted on an Apache2 webserver running on a raspberry pi4. </p>
                      <Row>
                        {
                          DiscordDupe.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
