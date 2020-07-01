import authUser from "./authUser";
import questions from "./questions";
import users from "./users";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({ authUser, questions, users });
export default function () {
  return configureStore({
    reducer,
  });
}
