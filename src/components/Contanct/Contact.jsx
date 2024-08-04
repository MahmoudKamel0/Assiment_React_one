import './Contact.css'

export default function Contact() {
       return (
              <section id='Contact' className='d-flex flex-column align-items-center justify-content-start'>
                     <h1>CONTACT SECTION</h1>
                     <span className='icon'><i className="fa-solid fa-star"></i></span>

                     <div className="form | d-flex flex-column align-items-start">
                            <input type="text" name="username" id="username" placeholder='userName' />
                            <input type="text" name="age" id="age" placeholder='userAge' />
                            <input type="email" name="email" id="email" placeholder='userEmail' />
                            <input type="password" name="password" id="password" placeholder='userPassword' />
                            <button className="btn mt-4 text-white"> send Message </button>
                     </div>

              </section>
       )
}
