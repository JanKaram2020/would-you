import {
  questionsReceived,
  questionAdded,
  questionAnswered,
} from "./store/questions";
import {
  usersReceived,
  questionAddedToUser,
  answerAddedToUser,
} from "./store/users";
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => ({
        users,
        questions,
      }))
      .then(({ users, questions }) => {
        dispatch(questionsReceived(questions));
        dispatch(usersReceived(users));
      });
  };
}
export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return _saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: author,
    }).then((question) => {
      dispatch(questionAdded(question));
      dispatch(questionAddedToUser(question));
    });
  };
}
export function handleAnswerQuestion(authUser, qid, answer) {
  return (dispatch) => {
    dispatch(
      answerAddedToUser({ authUser: authUser, qid: qid, answer: answer })
    );
    dispatch(
      questionAnswered({ authUser: authUser, qid: qid, answer: answer })
    );
    return _saveQuestionAnswer({
      authUser: authUser,
      qid: qid,
      answer: answer,
    });
  };
}
