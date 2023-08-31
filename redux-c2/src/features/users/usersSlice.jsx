import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Tran Nguyen Han' },
    { id: '1', name: 'Le Hung' },
    { id: '2', name: 'Le Loi' },
    { id: '0', name: 'Le Sat' },
    { id: '0', name: 'Ly Trien' },
    { id: '0', name: 'Nguyen Xi' },
    { id: '0', name: 'Dinh Le' },
    { id: '0', name: 'Trinh Kha' },
    { id: '0', name: 'Le Ngan' },
    { id: '0', name: 'Nguyen Chich' },
    { id: '0', name: 'Pham Van' },
    { id: '0', name: 'Pham Van Xao' },
    { id: '0', name: 'Le Van Linh' },
    { id: '0', name: 'Le Thach' },
    { id: '0', name: 'Dinh Liet' },
    { id: '0', name: 'Le Van An' },

]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer