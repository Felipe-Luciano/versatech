import style from './module/ClinicalEngineeringSection.module.css'
import equipamentCalibration from '../assets/equipamentCalibration.jpeg'
import { forwardRef } from 'react'

function ClinicalEngineeringSection(props, ref) {
    return (
        <div className={style.section} ref={ref}>
            <img className={style.equipamentCalibrationImg} src={equipamentCalibration} alt="Engenharia clínica e manutenção de equipamentos médicos" />
            <div className={style.content}>
                <h1>Engenharia clínica</h1>
                <p>
                    A Engenharia Clínica atua nos estabelecimentos assistenciais na área da saúde-EAS, desenvolvendo atividades 
                    envolvendo o conhecimento de gestão das tecnologias de saúde, com o objetivo de promover o melhor cuidado ao 
                    paciente. Isso inclui projetos, planejamento, gestão do parque tecnológico, manutenções e  calibrações dos 
                    equipamentos da área da saúde. O objetivo da engenharia clínica é promover a segurança no uso das tecnologias com 
                    a redução do custo operacional e de manutenção, além da melhoria contínua na qualidade dos serviços prestados.
                </p>
            </div>
        </div>
    )
}

export default forwardRef(ClinicalEngineeringSection)