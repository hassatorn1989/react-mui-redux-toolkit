import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../services/AuthService';

interface AuthState {
    user: any
}

const initialState: AuthState = {
    user: null,
}

export const loginService = createAsyncThunk(
    'auth/login',
    async (data: { username: string, password: string }, { rejectWithValue }) => {
        try {
            const response = await AuthService.login(data);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginService.pending, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(loginService.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(loginService.rejected, (state, action) => {
            state.user = action.payload
        })
    }
})


export default authSlice.reducer