import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    questionsReceived: (questions, action) => {
      return {
        ...questions,
        ...action.payload
      }
    },
    questionAdded: (questions, action) => {
      return {
        ...questions,
        [action.payload.id]:action.payload,
      }
    },
    questionAnswered: (questions, action) => {
      return {
        ...questions,
        [action.payload.qid]: {
          ...questions[action.payload.qid],
          [action.payload.answer]: {
            ...questions[action.payload.qid][action.payload.answer],
            votes: questions[action.payload.qid][action.payload.answer].votes.concat(action.payload.authUser)
          }
        }
      }
    },
  },
});
export const { questionsReceived, questionAdded, questionAnswered } = slice.actions;
export default slice.reducer;

// TODO : i need to receive users
// TODO : i need to receive questions -- typed without logic
// TODO : i need to add question to questions -- typed without logic
// TODO : i need to add question to user
// TODO : i need to add answer to questions -- typed without logic
// TODO : i need to add answer to user
