import style from './module/CompanySection.module.css'
import laboratoryImg from '../assets/laboratory.jpg'
import { forwardRef } from 'react'

function CompanySection(props, ref) {

    return(
        <div ref={ref} className={style.section}>
            <div className={style.content}>
                <h1>A Empresa</h1>
                <p>
                    Desde de 2005, a Versatech Equipamentos Médicos tem como seu principal objetivo, a satisfação de seus clientes. 
                    Oferecemos a nossos clientes diversos serviços na área da engenharia clínica.
                </p>
                <p>
                    Nossa equipe de técnicos e engenheiros possuem capacitação técnica e transmitem confiança, agilidade e 
                    segurança trabalhando para melhorar a qualidade de suas atividades em campo e um maior "up-time" dos equipamentos. 
                    Possuímos completo laboratório de manutenção e calibração, com padrões de testes modernos e calibrados periodicamente 
                    em laboratórios acreditados à RBC. Desta forma asseguramos a confiabilidade dos diagnósticos e resultados.  A 
                    Versatech possui certificação ISO9001 demonstrando o compromisso com a excelência operacional e abre portas para 
                    novas oportunidades comerciais. A certificação também garante a melhoria da qualidade, aumento da eficiência e maior 
                    confiabilidade. Além da certificação, a empresa é credenciado junto ao IPEM-MG para manutenção de balanças e 
                    esfigmomanômetros.
                </p>
            </div>
            <img className={style.laboratoryImg} src={laboratoryImg} alt="Laboratório de manutenção" />
        </div>
    )
}

export default forwardRef(CompanySection);