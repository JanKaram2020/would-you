import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    questionsReceived: (questions, action) => {
      return {
        ...questions,
        ...action.payload,
      };
    },
    questionAdded: (questions, action) => {
      const {id} = action.payload;
      questions[id] = action.payload;
      // return {
      //   ...questions,
      //   [action.payload.id]: action.payload,
      // };
    },
    questionAnswered: (questions, action) => {
      const { authUser, qid, answer } = action.payload;
      questions[qid][answer].votes.concat(authUser);
      // return {
      //   ...questions,
      //   [qid]: {
      //     ...questions[qid],
      //     [answer]: {
      //       ...questions[qid][answer],
      //       votes: questions[qid][answer].votes.concat(authUser),
      //     },
      //   },
      // };
    },
  },
});
export const {
  questionsReceived,
  questionAdded,
  questionAnswered,
} = slice.actions;
export default slice.reducer;
