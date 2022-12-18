import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { MdRefresh } from 'react-icons/md'
import { Container, ContainerItems } from './styles';
import { useHome } from '../../hooks/HomeContext';

export function TopMenu({ goBack }) {
  const { changeIframe, iFrame } = useHome();

  return (
    <Container>
      <ContainerItems onClick={() => goBack()} className="back">
        <IoIosArrowDropleftCircle color="#FFF" />
      </ContainerItems>

      <ContainerItems className="refresh">
        <MdRefresh color="#FFF" onClick={() => changeIframe(iFrame)} />
      </ContainerItems>
    </Container>
  );
}
