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
      const { authUser, qid, answer } = action.payload;
      return {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat(authUser)
          }
        }
      };
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
