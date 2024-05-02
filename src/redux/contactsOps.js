import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const INSTANCE = axios.create({
    baseURL: "https://6633626df7d50bbd9b4933b1.mockapi.io"
});

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await INSTANCE.get('/contacts');
            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ( { name, number }, {rejectWithValue}) => {
        try {
            const response = await INSTANCE.post('/contacts', { name, number });
            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, {rejectWithValue}) => {
        try {
            const response = await INSTANCE.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);