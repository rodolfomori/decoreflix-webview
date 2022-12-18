import { FaHome } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi'

import {
  Container, ContainerItems, Label
} from './styles';
import { useHome } from '../../hooks/HomeContext';

export function BottomMenu() {
  const { changeIframe, iFrame } = useHome();

  return (
    <Container>
      <ContainerItems onClick={() => changeIframe(0)} spotlight={iFrame === 0}>
        <FaHome name="home" size={24} color="#FFF" />
        <Label>Home</Label>
      </ContainerItems>
      
      <ContainerItems onClick={() => changeIframe(2)} spotlight={iFrame === 1}>
        <GiPartyPopper name="party" size={24} color="#FFF" />
        <Label>Clases</Label>
      </ContainerItems>
    </Container>
  );
}
