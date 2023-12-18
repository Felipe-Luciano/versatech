import { forwardRef } from 'react'

import style from './module/ContactUsSection.module.css'
import { FooterSection } from './FooterSection'
import emailjs from '@emailjs/browser';


function ContactUsSection(props, ref) {

    const userID = process.env.REACT_APP_PUBLIC_KEY;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;

    function sendEmail(e) {
        e.preventDefault();
        console.log(userID)
        console.log(templateID)
        console.log(serviceID)
        
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }
        );
    }

    return(
        <div className={style.backgroundImage} ref={ref}>
            <div className={style.section}>
                <h1>Entre em contato!</h1>
                <div className={style.content}>
                    <form onSubmit={sendEmail}>
                        <input type="text" name="name" id="name"  placeholder="Nome*" required/>
                        <input type="email" name="email" id="email"  placeholder="Email*" required/>
                        <input type="number" name="cellphone" id="cellphone"  placeholder="Telefone"/>
                        <textarea required name="message" id="message" placeholder="Mensagem*"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.623591893833!2d-43.96247522486505!3d-19.81355053469281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68febc82580a9%3A0x276fb81ece8bc09f!2sRua%20Luiza%20Vieira%2C%20190%20-%20Venda%20Nova%2C%20Belo%20Horizonte%20-%20MG%2C%2031610-110!5e0!3m2!1spt-BR!2sbr!4v1700944704389!5m2!1spt-BR!2sbr" 
                        className={style.map}
                        style={{border: 0, borderRadius: 8}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <FooterSection />
            </div>
        </div>
    )
}

export default forwardRef(ContactUsSection)