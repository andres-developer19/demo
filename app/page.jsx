import style from './styles/globals.css'
import Hero from './components/hero/Hero'
import img from './public/img/diseno-web.png'
import { LikeButton } from './LikeButton'

export default function page() {
  return (
    <div className="">
        <Hero 
            label="Soluciones web"
            title="Diseño Web y desarrollo Web"
            description="Esta es la deccripcion de nuestra gestion como desarrolladores de paginas web."
            buttonText="Ver Más"
            buttonColor="#dd32ff"
            imageSrc={img}
            reverse={false}
        />
    </div>
  )
}
