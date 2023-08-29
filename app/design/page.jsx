
import img from '../public/img/diseño.png'
import Hero from '../components/hero/Hero'
import { LikeButton } from '../LikeButton'

export default function page() {
    return (
      <>
        <Hero 
          bgColor="#0D2689;
          "
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
        <Hero 
          bgColor="#fff;
          "
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
          reverse={false}
        />
        <Hero 
          bgColor="#405271;
          "
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