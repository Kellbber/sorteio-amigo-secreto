import Header from "../Header/Header"
import ButtonLink from "../Button/Button"
const Dashboard = () => {


  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-dashboard-image bg-cover bc-center h-screen flex items-start justify-center flex-col">
    <Header/>
    <section className="w-full px-4 flex flex-col">
      <span className="text-white text-xl md:text-3xl font-extrabold mb-8">Natal de {currentYear}</span>
      <span className="w-full text-white font-semibold text-xl md:text-4xl lg:text-5xl mb-2">
      Desperte sorrisos com nosso sorteio 
      </span>
      <strong className="w-full text-white text-xl md:text-4xl lg:text-5xl mb-4">
      de Amigo Secreto:
      </strong>
      <span className="w-full text-white text-lg md:text-xl lg:text-2xl mb-2">
      espalhe a magia das surpresas neste Natal!
      </span>
      <ButtonLink label="iniciar sorteio" className="mt-2 px-4 py-2 w-52" href="#sorteio"/>
    </section>
    </div>
  )
}

export default Dashboard