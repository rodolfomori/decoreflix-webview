import { IMG, Container } from './styles'
import Cademi from '../../assets/img/cademi.jpg'
import Insta from '../../assets/img/insta.jpg'
import Membro from '../../assets/img/membro.jpg'
import Suporte from '../../assets/img/suporte.jpg'
import Whats from '../../assets/img/whatsapp.jpg'
import { useHome } from '../../hooks/HomeContext'

export function Home() {
  const { changeIframe } = useHome()

  return (
    <Container>
      <button onClick={() => changeIframe(1)}>
        <IMG src={Membro} alt="imagem-thumb" />
      </button>

      <button onClick={() => changeIframe(2)}>
        <IMG src={Cademi} alt="imagem-thumb" />
      </button>

      <button onClick={() => changeIframe(3)}>
        <IMG src={Whats} alt="imagem-thumb" />
      </button>

      <button onClick={() => changeIframe(4)}>
        <IMG src={Insta} alt="imagem-thumb" />
      </button>

      <button onClick={() => changeIframe(5)}>
        <IMG src={Suporte} alt="imagem-thumb" />
      </button>

      {/* 
      <a href="https://go.rodolfomori.com.br/suportev">
        <IMG src={Mentoria} alt="imagem-thumb" />
      </a> */}

      {/* <h2 style={{ marginTop: 40 }}>Siga nas Redes Sociais</h2> */}

      {/* <ContainerItem href="https://www.instagram.com/rodolfomorii/">
        <GrInstagram style={{ color: '#DB43AA' }} />
        <h2>@rodolfomorii</h2>
      </ContainerItem>

      <ContainerItem href="https://bit.ly/3h1xtJ5">
        <GrYoutube style={{ color: 'red' }} />
        <h2>@rodolfomori</h2>
      </ContainerItem>

      <ContainerItem href="https://www.tiktok.com/@rodolfomori">
        <FaTiktok style={{ color: '#05FFF7' }} />
        <h2>@rodolfomori</h2>
      </ContainerItem> */}
    </Container>
  )
}
