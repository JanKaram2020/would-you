import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {
  },
  reducers: {
    usersReceived: (users, action) => {
      return {
        ...users,
        ...action.payload
      }
    },
    answerAddedToUser: (users, action) => {
      const { authUser, qid, answer } = action;

      return {
        ...users,
        [authUser]: {
          ...users[authUser],
          answers: {
            ...users[authUser].answers,
            [qid]: answer
          }
        }
      };
    },
    questionAddedToUser: (users, action) => {
      return {
        ...users,
        [action.payload.author]: {
          ...users[action.payload.author],
          questions: users[action.payload.author].questions.concat(action.payload.id)
        }
    }
  },
}});
export const { usersReceived, answerAddedToUser, questionAddedToUser} = slice.actions;
export default slice.reducer;

// TODO : i need to receive users -- typed without logic
// TODO : i need to receive questions
// TODO : i need to add question to questions
// TODO : i need to add question to user -- typed without logic
// TODO : i need to add answer to questions
// TODO : i need to add answer to user -- typed without logic
