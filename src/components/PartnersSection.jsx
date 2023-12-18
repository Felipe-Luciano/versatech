import style from './module/PartnerSection.module.css'
import deltronixLogo from '../assets/deltronixLogo.svg'
import leistungLogo from '../assets/leistungLogo.svg'
import saevoLogo from '../assets/saevoLogo.svg'
import schusterLogo from '../assets/schusterLogo.svg'

import { forwardRef } from 'react'

function PartnerSection(props, ref) {
    return (
        <div className={style.sectionWrapper} ref={ref}>
            <div className={style.section}>
                <h1>Parceiros</h1>
                <p>
                    A Versatech possui parcerias técnicas com alguns fabricantes de equipamentos médicos com o objetivo de prestar serviço 
                    de manutenção corretiva, preventiva e calibração nos equipamentos produzidos pelos parceiros. Nossa equipe técnica é 
                    regularmente treinada em fábrica com a finalidade de garantir um serviço de alto padrão e atendendo as recomendaçãos e 
                    especificações técnicas dos fabricantes. Abaixo, algumas de nossas parcerias:    
                 </p>
            </div>
            <div className={style.logoWrapper}>
                <a href="https://www.deltronix.com.br/" target="_blank" rel="noopener noreferrer" className={style.logoContent}>
                    <img src={deltronixLogo} alt="Logo do parceiro comercial Deltronix" />  
                </a>
                <a href="https://leistungbrasil.com.br/" target="_blank" rel="noopener noreferrer" className={style.logoContent}>
                    <img src={leistungLogo} alt="Logo do parceiro comercial Leistung" />    
                </a>
                <a href="https://saevo.com.br/" target="_blank" rel="noopener noreferrer" className={style.logoContent}>
                    <img src={saevoLogo} alt="Logo do parceiro comercial Saevo" />   
                </a>
                <a href="https://www.schuster.ind.br/" target="_blank" rel="noopener noreferrer" className={style.logoContent}>
                    <img src={schusterLogo} alt="Logo do parceiro comercial Schuster" />
                </a>
            </div>
        </div>

    )
}

export default forwardRef(PartnerSection)