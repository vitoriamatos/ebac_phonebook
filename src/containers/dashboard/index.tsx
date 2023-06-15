import { useNavigate } from 'react-router-dom'
import { FiList, FiCalendar, FiSettings } from 'react-icons/fi'
import * as S from './styles'

import { Button, Container } from '../../styles'

const Dashboard = (props: any) => {
  const navigate = useNavigate()

  return (
    <>
      <S.Aside>
        <ul>
          <S.ListItem>
            <FiList font-weight={100} size={35}></FiList>
          </S.ListItem>
          <S.ListItem>
            <FiCalendar font-weight={100} size={35}></FiCalendar>
          </S.ListItem>
          <S.ListItem>
            <FiSettings font-weight={100} size={35}></FiSettings>
          </S.ListItem>
        </ul>
      </S.Aside>
    </>
  )
}

export default Dashboard
