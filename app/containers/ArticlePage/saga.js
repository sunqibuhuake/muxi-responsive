/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_PROJECTS } from '../App/constants';
import { loadProjectsSuccess, loadProjectsError } from '../App/actions';
import request from 'utils/request';
import { makeSelectOrder } from '../App/selectors';
import api from '../../utils/api'


export function* getProjects() {

  try {
    const res = yield call(request, api.getProjects);
    if (res.status == 'success') {
      yield put(loadProjectsSuccess(res.projects));
    } else {
      yield put(loadProjectsError());
    }
  } catch (err) {
    yield put(loadProjectsError());
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_PROJECTS, getProjects);
}
