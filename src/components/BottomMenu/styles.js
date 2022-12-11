import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  background: #343434;
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 0 0 18px;
  border-radius: 15px;
  margin-left: 2.5%;

  img {
    height: 24px;
    width: 24px;
    border: none;


    &-active {
      opacity: 0.8;
    }

    &-hover {
      opacity: 0.8;
    }
  }
`

export const ContainerItems = styled.button`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.spotlight ? '#4b4b45' : '#343434;')};
  padding: 5px;
  border-radius: 5px;
  border: none;
`

export const Label = styled.p`
  color: #f0f0f0;
  font-size: 10px;
`
