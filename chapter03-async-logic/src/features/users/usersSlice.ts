import { createSlice } from "@reduxjs/toolkit";

type Users = {
  id: string,
  name: string,
}

type UsersState = {
  users: Users[],
}
const initialState = [
    {id: "0", name: "Lewis"},
    {id: "1", name: "Billy"},
    {id: "2", name: "Geanie"}
];

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
})

export const selectAllUsers = (state: UsersState) => state.users;
export default usersSlice.reducer;