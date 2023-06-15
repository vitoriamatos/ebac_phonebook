import Task from '../../components/contact'
import { MainContainer, MainContainerList, Title } from '../../styles'
import * as enums from '../../utils/enums/Groups'
import RegisterButton from '../../components/registerButton'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { FiSearch, FiUser } from 'react-icons/fi'
import * as S from './styles'
import { filters } from '../../store/reducers/Filter'
import CardFilter from '../../components/cardFilter'
import Dashboard from '../dashboard'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { name, number, group } = useSelector(
    (state: RootReducer) => state.filter
  )

  const dispatch = useDispatch()
  const contactFilter = () => {
    let contactsFiltered = itens

    if (name !== undefined) {
      contactsFiltered = itens.filter(
        (item) =>
          item.name.toLowerCase().search(name.toLowerCase()) >= 0 ||
          item.number.search(name) >= 0
      )

      if (group === 'company') {
        contactsFiltered = contactsFiltered.filter(
          (item) => item.group == group
        )
      } else if (group === 'family') {
        contactsFiltered = contactsFiltered.filter(
          (item) => item.group == group
        )
      } else if (group === 'friend') {
        contactsFiltered = contactsFiltered.filter(
          (item) => item.group == group
        )
      }
      return contactsFiltered
    } else {
      return itens
    }
  }

  const showResultFilter = (quantity: number) => {
    let message = ''
    const complementation =
      name !== undefined && name.length > 0 ? `${name}` : ''

    if (name === '') {
      message = `Todos os contatos`
    } else {
      message = `${quantity} contato(s) encontrado(s) como: "${`${number}`}${complementation}"`
    }

    return message
  }

  const contacts = contactFilter()
  const message = showResultFilter(contacts.length)
  return (
    <MainContainerList>
      <S.Title>Lista de contatos</S.Title>
      <S.Filter>
        <div>
          <span>Informe o número ou nome do contato: </span>
          <S.InputContainer>
            <S.SearchInputField
              type="text"
              placeholder="Buscar"
              value={name}
              onChange={(event) => dispatch(filters(event.target.value))}
            />
            <FiSearch size={18} />
          </S.InputContainer>
        </div>
        <S.Rigth>
          <RegisterButton></RegisterButton>
        </S.Rigth>

        <S.Fliter>
          <CardFilter legend={'Todos'} />
          <CardFilter legend={'Empresa'} group={enums.Group.COMPANY} />
          <CardFilter legend={'Família'} group={enums.Group.FAMILY} />
          <CardFilter legend={'Amigos'} group={enums.Group.FRIEND} />
        </S.Fliter>
      </S.Filter>

      <Title as="p">{message}</Title>

      <S.ContainerList>
        <S.List>
          {contacts.map((t) => (
            <li key={t.name}>
              <Task id={t.id} name={t.name} number={t.number} group={t.group} />
            </li>
          ))}
        </S.List>
      </S.ContainerList>
    </MainContainerList>
  )
}
export default ContactList
