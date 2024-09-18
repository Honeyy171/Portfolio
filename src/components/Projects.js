import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import RealStateImg from "../assets/img/RealEstate.png";
import ToDoAppImg from "../assets/img/To.png";
import CalmImg from "../assets/img/Calm.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Myntra Clone",
      description:
        "The Myntra Clone project is a web application inspired by the popular online fashion and lifestyle shopping platform, Myntra. This project is built using React.js for the frontend and responsive",
      imgUrl: projImg1,
    },
    {
      title: "Vaibahv Estate",
      description:
        " A comprehensive real estate platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to list properties for sale or rent. ",
      imgUrl: RealStateImg,
    },
    {
      title: "To Do App",
      description: "It is a basic To Do list App built using FrontEnd tech stack: React.js, CSS",
      imgUrl: ToDoAppImg,
    },
    {
      title: "Calm HeadPhones",
      description: "It is a  Meditation based headphone Ecommerce Website built using HTML and CSS",
      imgUrl: CalmImg,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A collection of diverse projects that showcase my ability to
                    design and develop frontend application as well as
                    full-stack web applications, with a focus on clean code,
                    user experience, and efficient database management.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>For future Projects Work</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>For future Projects Work</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
