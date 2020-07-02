import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    usersReceived: (users, action) => {
      return {
        ...users,
        ...action.payload,
      };
    },
    answerAddedToUser: (users, action) => {
      const { authUser, qid, answer } = action.payload;
      users[authUser].answers[qid] = answer;
    },
    questionAddedToUser: (users, action) => {
      const { author, id } = action.payload;
      users[author].questions.push(id);
    },
  },
});
export const {
  usersReceived,
  answerAddedToUser,
  questionAddedToUser,
} = slice.actions;
export default slice.reducer;
