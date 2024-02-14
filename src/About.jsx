import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PinkBear.css'
import './App.css'
import './About.css'

const About = () => {
  const [textPost, setTextPost] = useState([]);
  const API_URL = (import.meta.env.VITE_API_URL);
  
  const fetchData = () => {
    fetch(`https://${API_URL}/api/texts/temporary`)
    .then(response => response.json())
    .then(data => setTextPost(data));
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const about = textPost.find(tp => tp.name === "about")?.text.split('\n');

  if(!about) return <h1>loading...</h1>

  return (
    <>
      <section className='pinkBear'>
        <article className='about-content'>
        <Link to="/">back</Link>
        <h3>About me:</h3>
          {about.map((about, index) => (<p key={index}>{about}<br/></p>))}
        </article>
      </section>
    </>
  )
}

export default About
