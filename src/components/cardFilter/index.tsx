import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import * as enumns from '../../utils/enums/Groups'
import { RootReducer } from '../../store'
import { filters, groups } from '../../store/reducers/Filter'

export type Props = {
  name?: string
  number?: string
  legend?: string
  group?: enumns.Group
}

const CardFilter = ({ legend, group, name, number }: Props) => {
  const { filter, contacts } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()
  const contactCount = () => {
    if (!group) return contacts.itens.length
    if (group === 'friend') {
      return contacts.itens.filter((item) => item.group === group).length
    }
    if (group === 'company') {
      return contacts.itens.filter((item) => item.group === group).length
    }
    if (group === 'family') {
      return contacts.itens.filter((item) => item.group === group).length
    }
  }
  const isActive = () => {
    const sameGroup = filter.group === group

    return sameGroup
  }

  const filterCard = () => {
    dispatch(groups({ name, number, group }))
  }
  const count = contactCount()
  const active = isActive()
  return (
    <S.Card onClick={filterCard} active={active}>
      {/* <S.Counter>{count}</S.Counter> */}
      <S.Label>{legend}</S.Label>
    </S.Card>
  )
}

export default CardFilter
