import img from '../public/img/inversion.jpg'
import Hero from '../components/hero/Hero'
import { LikeButton } from '../LikeButton'

export default function page() {
    return (
      <>
        <Hero 
          label="Inversion"
          title="COSTO TOTAL
          DEL SERVICIO"
          description="
          $300 USD
          en pesos argentinos
          cotización al dólar blue
          Aceptamos transferencias
          bancarias, depósitos.
          Emitimos factura C,

          El proyecto se entrega en
          máximo 4 semanas. Puede
          estar listo antes.
          Al iniciar con el proceso de
          diseño le estaremos
          enviando el primer avance
          en máximo 5 días hábiles.

          Para iniciar el proyecto se
          requiere abonar el 40% del
          costo total.
          Secciones adicionales
          tienen un costo de $20 USD

          "
          buttonText="Ver Más"
          buttonColor="#3273ff"
          imageSrc={img}
          reverse={true}
        />
      </>
    )
  }
  