import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  padding-bottom: 150px;

  a {
    justify-content: center;
    display: flex;
  }

  h2 {
    margin: 20px 0;
  }

  button {
    border: none;
  }
`
export const ContainerItem = styled.a`
  background: #271760;
  height: 70px;
  width: 200px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px 0;

  h2 {
    color: white;
    font-size: 18px;
    margin-left: 10px;
  }

  svg {
    height: 35px;
    width: 35px;
  }
`

export const IMG = styled.img`
  width: 90%;
  border-radius: 10px;
  margin-top: 10px;
`

export const Logo = styled.img`
  height: 100px;
`


