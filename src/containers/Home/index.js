import { IMG, Container, ContainerItem } from './styles'
import Thumb from '../../assets/thumb.png'
import Telegram from '../../assets/img/Link-Telegram-768x271.webp'
import DevClub from '../../assets/img/Link-Seja-sócioDev-768x432.webp'
import Terca from '../../assets/img/Link-Aula-Terças-768x271.webp'
import Contato from '../../assets/img/Link-Contato-768x271.webp'
import Mentoria from '../../assets/img/Link-Mentoriamod2-768x271.webp'
import { GrInstagram, GrYoutube } from 'react-icons/gr'
import { FaTiktok } from 'react-icons/fa'


export function Home() {
  return (
    <Container>
      <a href="https://youtu.be/hDbt75n1IMo" style={{ marginBottom: 30 }}>
        <IMG src={Thumb} alt="imagem-thumb" />
      </a>

      <a href="https://go.rodolfomori.com.br/suportev">
        <IMG src={DevClub} alt="imagem-thumb" />
      </a>

      <a href="https://go.rodolfomori.com.br/telegram">
        <IMG src={Telegram} alt="imagem-thumb" />
      </a>

      <a href="https://rodolfomori.com.br/aulas-ao-vivo/">
        <IMG src={Terca} alt="imagem-thumb" />
      </a>

      <a href="https://go.rodolfomori.com.br/suporte">
        <IMG src={Contato} alt="imagem-thumb" />
      </a>

      <a href="https://go.rodolfomori.com.br/suportev">
        <IMG src={Mentoria} alt="imagem-thumb" />
      </a>

      <h2 style={{ marginTop: 40 }}>Siga nas Redes Sociais</h2>

      <ContainerItem href="https://www.instagram.com/rodolfomorii/">
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
      </ContainerItem>

    </Container>
  )
}
