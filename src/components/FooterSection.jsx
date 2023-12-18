import style from './module/FooterSection.module.css'
import emailLogo from '../assets/emailLogo.svg'
import whatsappLogo from '../assets/whatsappLogo.svg'
import instagramLogo from '../assets/instagramLogo.svg'

export function FooterSection() {
    return (
        <div className={style.footerWrapper}>
            <div className={style.iconWrapper}>
                <a href="mailto:contato@versatech.com.br" target="_blank" rel="noopener noreferrer">
                    <img className={style.icon} src={emailLogo} alt="Icone da logo do email." />
                </a>
                <a href="https://www.instagram.com/_versatech" target="_blank" rel="noopener noreferrer">
                    <img className={style.icon} src={instagramLogo} alt="Icone da logo do instagram." />
                </a>
                <a href="https://wa.me/553182631819" target="_blank" rel="noopener noreferrer">
                    <img className={style.icon} src={whatsappLogo} alt="Icone da logo do whatsapp." />
                </a>
            </div>
            <p className={style.footerPhrase}>© 2005 Versatech</p>
        </div>
    )
}