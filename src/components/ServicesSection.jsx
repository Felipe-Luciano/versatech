import style from "./module/ServicesSection.module.css"

import contractCreation from '../assets/contractCreation.jpg' 
import medicalEquipament from '../assets/medicalEquipament.jpg' 
import medicalEquipamentMaintanence from '../assets/medicalEquipamentMaintanence.jpg'
import medicalEquipamentCalibration from '../assets/medicalEquipamentCalibration.jpg'
import qualityControl from '../assets/qualityControl.jpg' 
import riskManagement from '../assets/riskManagement.jpg' 
import securityTestMachineMedical from '../assets/securityTestMachineMedical.jpg' 
import teamTraining from '../assets/teamTraining.jpg' 
import technologicalManagement from '../assets/technologicalManagement.jpg'  
 
import { forwardRef } from "react"

function ServicesSection(props, ref) {
    return(
        <div className={style.sectionWrapper} ref={ref}> 
            <h1>Serviços</h1>
            <section className={style.servicesSection}>
                <div className={style.cardService}>
                    <img src={medicalEquipamentMaintanence} alt="Engenheira realizando manutenção de equipamentos médicos" />
                    <h2>Manutenção Preventiva e Corretiva</h2>
                    <p> 
                        Tem por objetivo prevenir e manter os equipamentos operacionais e dentro das especificações de fábrica, 
                        aumentando o “up-time” desses.
                    </p>
                </div>
                <div className={style.cardService}>
                    <img src={medicalEquipamentCalibration} alt="Calibração de equipamentos médicos" />
                    <h2>Calibração e verificação funcional</h2>
                    <p>
                        Na calibração são comparados os parâmetros apresentados pelo equipamento com padrões rastreados, por meio de 
                        técnicas de amostragem e métodos estatísticos para a emissão de Laudos conformes com a Norma NBR ISO/IEC 17025. 
                        Já a Verificação Funcional confirma de forma rápida se esses parâmetros estão conformes.
                    </p>
                </div>
                <div className={style.cardService}>
                    <img src={securityTestMachineMedical} alt="Teste de segurança elétrico em equipamentos médicos" />
                    <h2>Teste de segurança elétrica</h2>
                    <p>Tem por objetivo verificar a segurança elétrica de EMH, para operadores e pacientes,com base na <span>NBR IEC 60.601-1</span></p>
                </div>
                <div className={style.cardService}>
                    <img src={medicalEquipament} alt="Novos equipamentos médicos" />
                    <h2>Aquisição de equipamentos e novas tecnologias</h2>
                    <p>
                        Essa assessoria traz para o cliente uma maior segurança na aquisição de novas tecnologias com redução de 
                        custo de propriedade (TCO) e melhor suporte durante da vida útil dos equipamentos.
                    </p>
                </div>
                <div className={style.cardService}>
                    <img src={contractCreation} alt="Elaboração de contratos realizada por dois trabalhadores" />
                    <h2>Elaboração de contratos de compra e manutenção</h2>
                    <p>
                        Nossos Engenheiros empregam seu conhecimento de forma a proteger os interesses do cliente e sua tecnologia, 
                        ao longo do tempo.
                    </p>
                </div>
                <div className={style.cardService}>
                    <img src={technologicalManagement} alt="Gestão tecnológica" />
                    <h2>Gestão Tecnológica</h2>
                    <p>
                        Nossa equipe cuida da gestão do parque tecnológico do cliente “on-site”, com equipe dedicada ou não, a 
                        critério e necessidade do cliente.
                    </p>
                </div>
                <div className={style.cardService}>
                    <img src={riskManagement} alt="Elaboração de relatórios para gerenciamento de risco" />
                    <h2>Gerenciamento de risco</h2>
                    <p>
                        Tecnologias podem apresentar situações de risco e com o gerenciamento, relatórios são elaborados com a 
                        finalidade da redução e controle desses, minimizando os impactos de eventos na rotina do cliente.
                    </p>
                </div>
                <div className={style.cardService}>
                    <img src={teamTraining} alt="Treinamento de equipe" />
                    <h2>Educação e treinamento de equipe</h2>
                    <p>
                        O treinamento continuado é a melhor estratégia para melhorar a assertividade no uso das tecnologias, reduzindo 
                        o impacto de paradas por mau uso ou uso indevido e reduzir eventos de risco.
                    </p>
                </div>
                <div className={style.cardService}>
                    <img src={qualityControl} alt="Engenheria realizando a analise de qualidade por meio de parâmetros." />
                    <h2>Controle de qualidade</h2>
                    <p>
                        Tem por finalidade verificar e controlar metas e parâmetros estabelecidos, garantindo a estabilidade 
                        dos serviços prestados.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default forwardRef(ServicesSection)