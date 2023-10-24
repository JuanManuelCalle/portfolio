import { Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon3.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const ProjectCard = ({ projects }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{width: '100%', height: '300px'}} src={projects.data.imgUrl} />
        <div className="proj-txtx">
          <h4>{projects.data.title}</h4>
          <span>{projects.data.description}</span>
          <div>
            <div className="social-icon">
                <abbr title="Repositorio">
                  <a href={projects.data.gitHub} target="_blank"><img src={navIcon2} alt="Github" /></a>
                </abbr>
                <abbr title="Demo del proyecto">
                  <a href={projects.data.demo ? projects.data.demo : "#"} target="_blank"><img src={navIcon1} alt="Demo"/></a>
                </abbr>
              </div>
          </div>
        </div>
      </div>
    </Col>
  )
}
