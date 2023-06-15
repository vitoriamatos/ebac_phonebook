import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'

import { deleted, edit } from '../../store/reducers/Contact'
import ContactClass from '../../models/Contact'
import { Field, Button, SaveButton, CancelButton } from '../../styles'
import { channel } from 'diagnostics_channel'
import { groups } from '../../store/reducers/Filter'
import * as enums from '../../utils/enums/Groups'
type Props = ContactClass

const Contact = ({
  id,
  name: nameOriginal,
  number: numberOriginal,
  group: groupOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [group, setGroup] = useState('')
  useEffect(() => {
    if (nameOriginal.length > 0) {
      setName(nameOriginal)
    }
    if (numberOriginal.length > 0) {
      setNumber(numberOriginal)
    }
    if (groupOriginal !== group) {
      setGroup(groupOriginal)
    }
  }, [nameOriginal, numberOriginal, groupOriginal])

  function cancelEdit() {
    setIsEditing(false)
    setName(nameOriginal)
    setNumber(numberOriginal)
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
  const [showOptions, setShowOptions] = useState(false)

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }
  // const handleChange(event: string) = () => {
  //   setGroup(event.target.value)
  // }

  const handleChange = (event: string) => {
    setGroup(event)
  }
  return (
    <S.Card>
      <S.Cell className="grid_1">
        <S.Title>
          {isEditing && <span>Editando: </span>}
          <em>Nome: </em>
        </S.Title>
        <S.Description
          disabled={!isEditing}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </S.Cell>

      <S.Cell className="grid_2">
        <S.Title>
          <em>Telefone: </em>
        </S.Title>
        <S.Description
          value={number}
          onChange={({ target }) => telefoneMask(target.value)}
          disabled={!isEditing}
          maxLength={15}
          placeholder="Número"
        />
      </S.Cell>
      <S.Cell className="grid_3">
        <S.Title>
          <em>Grupo: </em>
        </S.Title>
        {!isEditing ? (
          <S.Description value={group} disabled={!isEditing} />
        ) : (
          <S.Options>
            <S.Select
              name="select"
              value={group}
              onChange={({ target }) => handleChange(target.value)}
            >
              {Object.values(enums.Group).map((group) => (
                // eslint-disable-next-line react/jsx-key
                <option value={group}>{group}</option>
              ))}
            </S.Select>
          </S.Options>
        )}
      </S.Cell>

      <S.Cell className="grid_4">
        <S.Title>{/* <em>Ações: </em> */}</S.Title>
        <S.ActionsBar>
          {isEditing ? (
            <>
              <S.ActionsBar>
                <S.MainButton onClick={toggleOptions}>
                  <span className="material-symbols-outlined">more_vert</span>
                </S.MainButton>
                <S.OptionsContainer show={showOptions}>
                  <S.OptionButton
                    onClick={() => {
                      dispatch(
                        edit({
                          id,
                          name,
                          number,
                          group
                        })
                      )
                      setIsEditing(false)
                    }}
                  >
                    Salvar
                  </S.OptionButton>
                  <S.OptionButton
                    onClick={() => {
                      cancelEdit()
                    }}
                  >
                    Cancelar
                  </S.OptionButton>
                </S.OptionsContainer>
              </S.ActionsBar>
            </>
          ) : (
            <>
              <S.ActionsBar>
                <S.MainButton onClick={toggleOptions}>
                  <span className="material-symbols-outlined">more_vert</span>
                </S.MainButton>
                <S.OptionsContainer show={showOptions}>
                  <S.OptionButton onClick={() => setIsEditing(true)}>
                    Editar
                  </S.OptionButton>
                  <S.OptionButton onClick={() => dispatch(deleted(id))}>
                    Remover
                  </S.OptionButton>
                </S.OptionsContainer>
              </S.ActionsBar>
            </>
          )}
        </S.ActionsBar>
      </S.Cell>
    </S.Card>
  )
}

export default Contact
