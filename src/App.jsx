import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './index.css'
import PinkBear from './PinkBear'
import About from './About'
import Projects from './Projects'
import { useState, useEffect } from 'react'



const App = () => {
  // const [token, setToken] = useState<Token>({});
  const logo = `${import.meta.env.VITE_API_LOGO_TOKEN}`;
  const [background] = useState(`${import.meta.env.VITE_API_BACKGROUND_IMAGE_TOKEN}`);

  const tokenAvailable = () => true /*Boolean(token.access_token*/;
  
  useEffect(() => {
    const element = document.getElementById('background');
    if(element){
      element.style.backgroundImage = `url(${background})`;
    }
    
  }, background);
  
  return tokenAvailable() ? 
  (
    <>
      <overlay className='header-overlay'></overlay>
        <header className="header">
          <img src={`${logo}`} className="logo" alt="PinkBear logo"/>
          <nav className="nav">
            <Link to="/" className='active'>Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </header>
        <main className="main" id="body">
            <Routes>
              <Route path="/" element={<PinkBear/>} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
        </main>
      <footer className='pinkbear-footer'>
        <article className='tools'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript"/>
        </article>
      </footer>
    </>
  ) 
  :
  (
    <main className="main">
      <h1>loading...</h1>
    </main>
  )
}

export default App
