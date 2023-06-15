import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { group } from 'console'
import Contact from '../../models/Contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      name: 'Naruto Uzumaki',
      number: '(81)9999-8888',
      group: 'friend'
    },
    {
      id: 2,
      name: 'Tanjiro Kamado',
      number: '(81)8888-7777',
      group: 'company'
    },
    {
      id: 3,
      name: 'kazutora Hanemiya',
      number: '(81)8888-6666',
      group: 'family'
    }
  ]
}
const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    delete: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactExist = state.itens.find(
        (contact) =>
          contact.number === action.payload.number ||
          contact.name === action.payload.name
      )
      if (contactExist) {
        alert('Já existe uma contato com este número ou nome')
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const deleted = ContactSlice.actions.delete
export const edit = ContactSlice.actions.edit
export const register = ContactSlice.actions.register

export default ContactSlice.reducer
