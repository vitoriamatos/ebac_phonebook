import styled from 'styled-components'

export const Filter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  border-bottom: 1px solid #ccc;
  p {
    justify-content: left;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    display: block;

    span {
      font-size: 12px;
    }
  }
`
export const Form = styled.form`
  display: flex !important;
`

export const InputContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 10px;
  background-color: #fff;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const SearchInputField = styled.input`
  border: none;
  outline: none;
  margin-left: 8px;
  margin-right: 10%;
  font-size: 20px;
  width: 100%;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 50px;
    font-size: 14px;
  }
`

export const Title = styled.h1`
  display: flex;
  justify-content: left;
  margin-bottom: 50px;
  margin-top: 20px;
`

export const Fliter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
`
export const Rigth = styled.div`
  display: flex;
  justify-content: left;
`

export const List = styled.div`
  justify-content: left;
`
export const ContainerList = styled.div`
  overflow-y: scroll;
  height: 50%;
  padding-right: 80px;
  margin-bottom: 10%;
  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 50px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #2f3640;
    border-radius: 50px;
    height: 2px;
  }
`
