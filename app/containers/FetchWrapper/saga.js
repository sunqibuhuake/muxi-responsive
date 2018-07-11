/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from '../App/constants';
import { loadDataError, loadDataSuccess } from '../App/actions';
import request from 'utils/request';
import api from '../../utils/api'


export function* loadData() {

  try {
    const res = yield call(request, api.loadData);
    if (res.status == 'success') {
      yield put(loadDataSuccess(res.data));
    } else {
      throw new Error('网络加载出错！')
    }
  } catch (err) {
    yield put(loadDataError());
  }
}

export default function* articleSaga() {
  yield takeLatest(LOAD_DATA, loadData);
}
