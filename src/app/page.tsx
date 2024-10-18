import Link from "next/link";

export default function Home() {
  return (
    <main className="text-black flex flex-col mb-6 ">
      <section className="relative min-h-[500px] md:h-[500px] overflow-hidden flex flex-col items-center">
        <video
          className="absolute object-cover w-full h-full"
          src="/videos/amazon.mp4" 
          muted
          loop
          autoPlay
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>
        <div className="absolute  top-7 md:top-32 mx-auto max-w-[900px] text-white md:text-lg font-semibold px-4">
          <p className="mb-2 ">
            Bem-vindo ao Planeta Vivo, um portal dedicado a conscientizar sobre
            a crise climática e inspirar ações positivas. Nosso objetivo é
            fornecer informações claras e práticas sobre mudanças climáticas,
            ajudando você a entender o impacto ambiental e as soluções
            disponíveis. Além disso, conectamos você a ONGs comprometidas com a
            sustentabilidade, para que juntos possamos contribuir para um futuro
            mais verde. Explore dicas de ações sustentáveis, participe de
            iniciativas e descubra como você pode fazer a diferença no cuidado
            com o nosso planeta!
          </p>
          <Link className="text-white text-sm px-4 py-1 bg-[#00b3e3] font-semibold" href="/posts">
            Confira
          </Link>
        </div>
      </section>
      <section className="bg-[#F2851D] text-white py-3 mb-4 px-4">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-2xl font-semibold mb-2">
            Nossa terra pede socorro
          </h1>
          <p>
            2024 se destaca como um dos anos mais quentes já registrados, com
            evidências contundentes das mudanças climáticas se manifestando em
            eventos extremos ao redor do globo. Ondas de calor recorrentes,
            incêndios florestais devastadores, tempestades intensas, secas
            prolongadas e o acelerado derretimento das geleiras marcaram o ano.
            A causa principal desses eventos é o aumento das emissões de gases
            do efeito estufa, intensificando o aquecimento global. As
            consequências são alarmantes, incluindo a perda de biodiversidade,
            insegurança alimentar, deslocamento de populações e impactos
            econômicos significativos. É crucial reduzir drasticamente as
            emissões, investir em medidas de adaptação e promover a
            conscientização sobre a urgência da ação climática.
          </p>
        </div>
      </section>
      <section className="px-4">
        <div className="max-w-[900px] mx-auto">
          <h1 className="font-semibold text-2xl mb-2">O que fazer?</h1>
          <p className="mb-2">
            Você pode fazer sua parte contribuindo financeiramente, divulgando
            ou se vouluntariando em causas que trabalham para mitigar as
            mudanças climáticas.
          </p>
          <Link className="text-[#00b3e3] font-semibold" href="/apoie">
            Saiba mais
          </Link>
        </div>
      </section>
    </main>
  );
}
