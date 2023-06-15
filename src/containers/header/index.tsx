import { useNavigate } from 'react-router-dom'
import {
  FiUser,
  FiPhoneCall,
  FiList,
  FiCalendar,
  FiSettings
} from 'react-icons/fi'
import * as S from './styles'

import { Button, Container } from '../../styles'
import { useState } from 'react'

type Props = {
  showFilters: boolean
}
const Header = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const [showDiv, setShowDiv] = useState(false)

  const showDashboard = () => {
    setShowDiv(!showDiv)
  }
  return (
    <>
      <S.Header>
        <S.Icon>
          <FiPhoneCall font-weight={100} size={35}></FiPhoneCall>
        </S.Icon>
        <S.Nav>
          <ul>
            <li>
              <S.MainMenu>
                <S.Text>Bem vindo, usuário</S.Text>
                <FiUser size={24}></FiUser>
              </S.MainMenu>
              <S.MobileMenu>
                <S.ButtonMenu onClick={showDashboard}>
                  <span className="material-symbols-outlined">menu</span>
                </S.ButtonMenu>
              </S.MobileMenu>
              <S.Dashboard show={showDiv}>
                <ul>
                  <S.ListItem>
                    <FiList font-weight={100} size={35}></FiList>
                    <span></span>
                  </S.ListItem>
                  <S.ListItem>
                    <FiCalendar font-weight={100} size={35}></FiCalendar>
                  </S.ListItem>
                  <S.ListItem>
                    <FiSettings font-weight={100} size={35}></FiSettings>
                  </S.ListItem>
                </ul>
              </S.Dashboard>
            </li>
          </ul>
        </S.Nav>
      </S.Header>
    </>
  )
}

export default Header
