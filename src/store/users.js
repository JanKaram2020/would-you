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
      // return {
      //   ...users,
      //   [authUser]: {
      //     ...users[authUser],
      //     answers: {
      //       ...users[authUser].answers,
      //       [qid]: answer,
      //     },
      //   },
      // };
    },
    questionAddedToUser: (users, action) => {
      const { author, id } = action.payload;
      users[author].questions.concat(id);
      // return {
      //   ...users,
      //   [author]: {
      //     ...users[author],
      //     questions: users[author].questions.concat(id),
      //   },
      // };
    },
  },
});
export const {
  usersReceived,
  answerAddedToUser,
  questionAddedToUser,
} = slice.actions;
export default slice.reducer;
