import { useState, useEffect } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index';
import './App.css';
import './PinkBear.css';


function PinkBear() {
  const [textPost, setTextPost] = useState([]);
  const profilePicture = import.meta.env.VITE_API_PROFILE_PIC;
  
  const gh = import.meta.env.VITE_API_GH_LINK;
  const li = import.meta.env.VITE_API_LI_LINK;
  const API_URL = (import.meta.env.VITE_API_URL);
  

  const fetchData = () => {
    fetch(`https://${API_URL}/api/texts/test`)
      .then(response => response.json())
      .then(data => setTextPost(data));
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <section className='pinkBear'>
        <article className='pinkBear-content'>
          <h3>Hi, my name is:</h3>
          <h1>Björn Noctiluca</h1>
            <h3>
              I'm a:
              <span>
              <Typewriter
                      words={[
                        " .Net Backend Developer.",
                        " React Frontend Developer.",
                        " Fullstack Developer."
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="<"
                      cursorBlinking={false}
                      cursorColor="#f98d00"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
              </span>
            </h3>
          <h5>{textPost.find((tp) => tp.name === "home")?.text}</h5> 
          <p>Socials:</p>
            <section className='rIcons'>
              <BsGithub className='gitHub' target='_blank' onClick={_ => window.location.href=gh}/>
              <BsLinkedin className='linkedIn' target='_blank' onClick={_ => window.location.href=li}/>
            </section>
        </article>
        <article className='pinkbear-image'>
        <img src={`${profilePicture}`} className="image" alt="A picture of me." />
        </article>
      </section>
    </>
  )
}

export default PinkBear
