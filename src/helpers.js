import { getInitialData, saveQuestion, saveQuestionAnswer} from "./API";
import { questionsReceived, questionAdded, questionAnswered } from "./store/questions";
import { usersReceived, questionAddedToUser, answerAddedToUser } from "./store/users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(questionsReceived(questions));
      dispatch(usersReceived(users));
    });
  };
}
export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({ optionOneText:optionOneText, optionTwoText:optionTwoText, author:author }).then(
        (question) => {
          dispatch(questionAdded(question));
          dispatch(questionAddedToUser(question));
        }
    );
  };
}
export function handleAnswerQuestion(authUser, qid, answer) {
    return dispatch => {
        dispatch(answerAddedToUser(authUser, qid, answer));
        dispatch(questionAnswered(authUser, qid, answer));
        return saveQuestionAnswer({authUser:authUser, qid:qid, answer:answer});
    };
}