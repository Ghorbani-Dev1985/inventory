
import { all } from 'redux-saga/effects';
import { watchFetchPost } from './PostSaga';


export function* rootSaga() { //this is a generate function, with *
   yield all([watchFetchPost()]);
}