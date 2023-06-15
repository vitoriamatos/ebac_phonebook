import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  CancelButton,
  MainContainer,
  MainContainerRegister,
  SaveButton
} from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Groups'
import { register } from '../../store/reducers/Contact'

const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [group, setGroup] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registerContact = (event: FormEvent) => {
    event.preventDefault()

    dispatch(register({ name, number, group }))
    navigate('/')
  }

  const telefoneMask = (event: string) => {
    let input = event.replace(/\D/g, '')

    if (input.length > 0) {
      input = input.replace(/(\d{1})(\d)/, '($1$2) ')
    }

    if (input.length >= 8) {
      input = input.replace(/(\d{5})(\d)/, '$1-$2')
    }
    setNumber(input)
  }
  return (
    <MainContainerRegister>
      <S.Title>Novo Contato</S.Title>
      <S.Forms onSubmit={registerContact}>
        <S.Field
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Nome"
        />
        <S.Field
          value={number}
          onChange={({ target }) => telefoneMask(target.value)}
          type="text"
          placeholder="Número"
          maxLength={15}
        />
        <S.Options>
          <S.GroupLabel>Grupo</S.GroupLabel>
          {Object.values(enums.Group).map((group) => (
            <S.Option key={group}>
              <input
                value={group}
                name="group"
                type="radio"
                onChange={(event) =>
                  setGroup(event.target.value as enums.Group)
                }
                id={group}
                defaultChecked={group === enums.Group.COMPANY}
              />
              <label htmlFor={group}>{group}</label>
            </S.Option>
          ))}
        </S.Options>
        <Button type="submit">Cadastrar</Button>
        <CancelButton onClick={() => navigate('/')}>voltar</CancelButton>
      </S.Forms>
    </MainContainerRegister>
  )
}

export default Form
