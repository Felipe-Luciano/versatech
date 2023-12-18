import style from './module/HeroSection.module.css'

export function HeroSection({onHandleScrollToContactUs}) {

    return(
        <div className={style.backgroundImage}>
            <div className={style.content}>
                <h1>Versatech</h1>
                <p>Engenharia clínica: Soluções de engenharia aplicada à saúde</p>
                <button type="button" onClick={onHandleScrollToContactUs}>Fale conosco</button>
            </div>
        </div>
    )
}