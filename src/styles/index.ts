import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        paddding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        // overflow-y: hidden;
        overflow-x: hidden;
        @media (max-width: 1024px) {

        }

        @media (max-width: 768px) {

        }
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 190px auto;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: block;
  }
`
export const Body = styled.body`
  background: linear-gradient(#f3f6fd, #bdc6db);
  height: 100vh;
`
export const MainContainer = styled.div`
  padding: 0 200px;
  height: 80vh;
  width: 96%;
  overflow-y: hidden;
  justify-content: center;
  background-color: #ffffff95;
  border-radius: 80px;
  position: relative;
  margin-bottom: 10px;
  p {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    padding: 0 40px;
    height: 120vh;
    border-radius: 0px;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
    border-radius: 0px;
    height: 150vh;
    width: 100%;
  }
`
export const MainContainerList = styled(MainContainer)``
export const MainContainerRegister = styled(MainContainer)``
export const Title = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`

export const Field = styled.input`
  border: #ddd solid 1px;
  float: left;
  padding: 5px 20px 5px 5px;

  #lupa {
    float: left;
    margin: 3px 0px 0px -20px;
    cursor: pointer;
  }

  #lupa:after {
    font-family: FontAwesome;
    background: #000;
    font-size: 14px;
    content: '\f002';
  }
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.darkBlue};
  border-radius: 8px;
  margin-right: 8px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const SaveButton = styled(Button)`
  background-color: ${variables.blue};
`
export const CancelButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${variables.darkBlue};
  color: ${variables.darkBlue};
`
export default GlobalStyle
