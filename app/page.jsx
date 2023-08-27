import style from './styles/globals.css'
import Hero from './components/hero/Hero'
import img from './public/img/diseno-web.png'

export default function page() {
  return (
    <div className={style.main}>
        <Hero 
            title="Diseño Web y desarrollo Web"
            description="Esta es la deccripcion de nuestra gestion como desarrolladores de paginas web."
            buttonText="Ver Más"
            imageSrc={img}
            reverse={false}
        />
    </div>
  )
}
