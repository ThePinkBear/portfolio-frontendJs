import { useState, useEffect } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './App.css';
import './PinkBear.css';


function PinkBear() {
  const [textPost, setTextPost] = useState([]);
  const profilePicture = import.meta.env.VITE_API_PROFILE_PIC;
  const { text } = useTypewriter({
    words: ['Fullstack Developer', 'React Frontend Developer', '.Net Backend Developer'],
    loop: 0,
  });
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
            <h3 className='wrapper'>
              I'm a:
              <span style={{fontWeight: 'bold', color:'pink'}}>
                {text}
              </span>
              <span style={{color: '#f98d00'}}>
                <Cursor cursorStyle='<'/>
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
