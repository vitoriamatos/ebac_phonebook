import styled from 'styled-components'
import variables from '../../styles/variables'
import { FiSearch } from 'react-icons/fi'
import exp from 'constants'

type Props = {
  show: boolean
}

export const Header = styled.header`
  // padding: 16px 0;
  padding: 40px;
  padding-right: 150px;
  padding-bottom: 25px;
  color: #000;

  display: grid;
  grid-template-columns: 6fr 1fr;
  justify-content: space-around;

  @media (max-width: 1024px) {
    grid-template-columns: 5fr 2fr;
    font-size: 12px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr 2fr;
    font-size: 12px;
    padding-right: 65px;
  }
  @media (min-width: 768px and max-width: 768px) {
    grid-template-columns: 5fr 2fr;
    font-size: 12px;
  }
`
export const Head = styled.div``
export const Filter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 16px;
  background-color: #fff !important;
  padding: 40px;
  width: 100%;
`
export const Form = styled.form`
  display: flex !important;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
  width: 100%;
`
export const SearchInputField = styled.input`
  border: none;
  outline: none;
  margin-right: 50rem;
`

export const Title = styled.h1`
  font-weight: 100;
`

export const HeaderContainer = styled.div``
export const Icon = styled.div`
  svg {
    @media (max-width: 1024px) {
      width: 30%;
    }

    @media (max-width: 768px) {
      width: 50%;
    }
  }
`

export const List = styled.li`
  display: inline;
  font-size: 12px;
}
`
export const Text = styled.h3`
  font-weight: 100;
  margin-right: 10px;
  display: inline;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: right;
`

export const MainMenu = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: right;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: right;
  }
`
export const ListItem = styled.li`
  margin-bottom: 40px;
  padding: 10px;
  text-align: right;
  margin-left: 50px;
  display: flex;
  :hover {
    background-color: black;
    border-radius: 50%;
    color: #fff;
  }
`
export const Dashboard = styled.div<Props>`
  display: ${(props) => (props.show ? 'block' : 'none')};
`
export const ButtonMenu = styled.button`
  background-color: transparent;
  border: 1px solid black;
  padding: 10px;
`
