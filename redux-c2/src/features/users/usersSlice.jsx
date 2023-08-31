import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' },
    { id: '3', name: 'Tran Nguyen Han' },
    { id: '4', name: 'Le Hung' },
    { id: '5', name: 'Le Loi' },
    { id: '6', name: 'Le Sat' },
    { id: '7', name: 'Ly Trien' },
    { id: '8', name: 'Nguyen Xi' },
    { id: '9', name: 'Dinh Le' },
    { id: '10', name: 'Trinh Kha' },
    { id: '11', name: 'Le Ngan' },
    { id: '12', name: 'Nguyen Chich' },
    { id: '13', name: 'Pham Van' },
    { id: '14', name: 'Pham Van Xao' },
    { id: '15', name: 'Le Van Linh' },
    { id: '16', name: 'Le Thach' },
    { id: '17', name: 'Dinh Liet' },
    { id: '18', name: 'Le Van An' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;