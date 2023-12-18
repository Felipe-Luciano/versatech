import {useRef, useState} from "react"

import logo from '../assets/logo.png'
import {FaBars, FaTimes} from "react-icons/fa"

import style from './module/Navbar.module.css'

export function NavBar({
    onHandleScrollToCompany, 
    onHandleScrollToClinicalEngineering,
    onHandleScrollToServices,
    onHandleScrollToPartner,
    onHandleScrollToContactUs
}) {

    const [show, setShow] = useState(false)
    
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			style.responsiveNav
		)
        
        setShow(!show)
	};

    return(
        <header className={style.header}>
            <img className={style.logoImg} src={logo} alt="VersatechLogo" />
            <nav ref={navRef} className={style.nav} >
                <button className={style.link} onClick={onHandleScrollToCompany}>A empresa</button>
                <button className={style.link} onClick={onHandleScrollToClinicalEngineering}>Engenharia Clínica</button>
                <button className={style.link} onClick={onHandleScrollToServices}>Serviços</button>
                <button className={style.link} onClick={onHandleScrollToPartner}>Parceiros</button>
                <button className={style.link} onClick={onHandleScrollToContactUs}>Fale conosco</button>
            </nav>
            <button className={style.navBtn} onClick={showNavbar}>
                {
                    show ? <FaTimes /> : <FaBars />
                }
            </button>
        </header>
    )
}