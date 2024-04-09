import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const selectContacts = (state) => state.contacts.items;

const initialState = {
  items: [
    {
      id: 'id-1',
      name: 'Rosie Simpson',
      number: '459-12-56',
    },
    {
      id: 'id-2',
      name: 'Hermione Kline',
      number: '443-89-12',
    },
    {
      id: 'id-3',
      name: 'Eden Clements',
      number: '645-17-79',
    },
    {
      id: 'id-4',
      name: 'Annie Copeland',
      number: '227-91-26',
    },
  ],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.unshift(action.payload.newContact);
      },
      prepare: ({
        name = 'John Smith',
        number = '555-SMITH',
      }) => ({
        payload: {
          newContact: {
            id: nanoid(),
            name,
            number,
          },
        },
      }),
    },
    deleteContact: {
      reducer: (state, action) => {
        const idx = state.items.findIndex(({ id }) => id === action.payload.id);
        state.items.splice(idx, 1);
      },
      prepare: (id) => ({
        payload: {
          id,
        },
      }),
    },
  },
});

export const {
  addContact,
  deleteContact,
} = slice.actions;
export const contactsReducer = slice.reducer;
