import './Home.css'
import photo from './img/photo.svg'

export default function Home() {
       return (
              <section id='Home' className='d-flex flex-column align-items-center justify-content-center'>
                     <img className='mb-5' src={photo} alt="boy photo"  width={250}/>
                     <h1>START FRAMEWORK</h1>
                     <span className='icon'><i className="fa-solid fa-star"></i></span>
                     <p>Graphic Artist - Web Designer - Illustrator</p>
              </section>
       )
}
