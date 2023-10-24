import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from 'firebase/firestore';
import db from '../firebase/firebaseAuth'

export const Projects = () => {

  const [projects, setProjetcs] = useState([])

  useEffect(() => {
    const projectsArray = [];
    getDocs(collection(db, 'projects'))
    .then((snap) => {
      snap.forEach((doc) => {
        projectsArray.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setProjetcs(projectsArray)
    })
  }, [])

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projectos</h2>
                <p>En mi viaje a través del desarrollo y diseño, he tenido el privilegio de trabajar en una variedad de proyectos emocionantes y desafiantes. Cada proyecto es una oportunidad de fusionar mi creatividad con mi experiencia técnica para crear soluciones excepcionales.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                projects={project}
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
