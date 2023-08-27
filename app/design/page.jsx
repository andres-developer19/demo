
import img from '../public/img/diseño.png'
import Hero from '../components/hero/Hero'
import { LikeButton } from '../LikeButton'

export default function page() {
    return (
      <>
        <Hero 
          label="Diseño web"
          title="Diseño web"
          description="
          Accesos al panel de control del sitio web
          Desarrollo completo del sitio web
          Recomendaciones de uso
          Capacitación
          Cuenta de correo electrónico profesional"
          buttonText="Ver Más"
          buttonColor="#3273ff"
          imageSrc={img}
          reverse={true}
        />
      </>
    )
  }