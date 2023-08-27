import img from '../public/img/materiales.png'
import Hero from '../components/hero/Hero'
import { LikeButton } from '../LikeButton'


export default function page() {
    return (
      <>
        <Hero 
          label="Materiales"
          title="¿Qué vamos a necesitar de tu parte?"
          description="
          Logo
          Paleta de colores
          Tipografía
          ENVIAR TODA LA
          INFORMACIÓN DISPONIBLE
          PARA TU SITIO
          Texto
          Imágenes
          Videos (en caso de que aplique)
          Imágenes gráficas
          CONTENIDO
          Objetivos para tu sitio web
          "
          buttonText="Ver Más"
          buttonColor="#3273ff"
          imageSrc={img}
          reverse={true}
        />
      </>
    )
  }