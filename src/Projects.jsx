import { Link } from 'react-router-dom'
import './App.css'
import './PinkBear.css'

const Projects = () => {

  return (
    <>
      <section className="pinkBear-content">
        <Link to="/">back</Link>
        <h3>GitHub Repos:</h3>
          <article>
            <a href="https://github.com/ThePinkBear/portfolio-frontend.git" target="_blank"><h3>The repo for this portfolios frontend(React Typescript)</h3></a>
          </article>
          <article>
            <a href="https://github.com/ThePinkBear/portfolio-backend.git" target="_blank"><h3>The repo for this portfolios backend(.Net c# web-api)</h3></a>
          </article>
      </section>
    </>
  )
}

export default Projects
