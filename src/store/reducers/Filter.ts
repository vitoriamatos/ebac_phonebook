import * as enums from '../../utils/enums/Groups'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type StateFilter = {
  name?: string
  number?: string
  group?: enums.Group
}

const initialState: StateFilter = {
  name: '',
  number: ''
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    changeGroup: (state, action: PayloadAction<StateFilter>) => {
      state.group = action.payload.group
    }
  }
})

export const filters = FilterSlice.actions.changeName
export const groups = FilterSlice.actions.changeGroup
export default FilterSlice.reducer
