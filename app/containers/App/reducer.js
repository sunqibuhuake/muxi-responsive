/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import initData from '../../data/init'
import {
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_ERROR,

  SELECT_ARTICLE,
  SELECT_ORDER,

  HIDE_BIG_HEADER,
  HIDE_SMALL_HEADER,

  DO_SEARCH,
  CHANGE_SEARCH_KEY,

  HIDE_FEATURE_IMAGE,
  SHOW_FEATURE_IMAGE,
  SWITCH_LANGUAGE,
  INIT_WEB_STATE,
  SELECT_TARGET,
  HOVER

} from './constants';


const initialState = fromJS(initData);

function appReducer(state = initialState, action) {
  switch (action.type) {


    case HOVER:
      return state.set('hover', action.key);
    case SWITCH_LANGUAGE:
      return state.set('language', action.lang)
        .setIn(['search', 'key'], '')
        .setIn(['search', 'active'], false);

    case CHANGE_SEARCH_KEY:

      if (action.key.trim()) {
        return state.setIn(['search', 'key'], action.key);

      } else {
        return state.setIn(['search', 'key'], '')
          .setIn(['search', 'active'], false);
      }

    case DO_SEARCH:
      const key = state.getIn(['search', 'key']);
      if (key) {
        return state.setIn(['search', 'active'], true)
          .set('feature', '')
          .set('selected', '');
      } else {
        return state.setIn(['search', 'active'], false)
          .set('feature', '')
          .set('selected', '');
      }

    case HIDE_BIG_HEADER:
      return state.set('header', 'small');

    case HIDE_SMALL_HEADER:
      return state.set('header', 'big');


    case SELECT_ORDER:

      return state.set('order', fromJS({name: action.order, lang: action.lang}))
        .set('selected', false)
        .set('target', fromJS({name: false, value: false}))
        .setIn(['search', 'key'], '')
        .setIn(['search', 'active'], false);

    //const cur_order = state.get('order').toJS()
    //if (cur_order.name !== action.order) {
    //  //const list = state.getIn(['projects', 'list']);
    //  //const next_list = sort(list, action.order,action.lang);
    //  return state.set('order', fromJS({name: action.order, lang: action.lang}))
    //    .set('selected', false)
    //    .set('target', fromJS({name: false, value: false}))
    //} else {
    //  return state;
    //}
    case LOAD_DATA:
      return state.set('ready', false)
        .set('error', false);

    case LOAD_DATA_SUCCESS:
      return state.set('ready', true)
        .set('error', false)
        .set('order', fromJS({
          name: 'date',
          lang: 'zh'
        }))
        .set('search', fromJS({
          key: '',
          active: false
        }))
        .set('selected', '')
        .set('projects', action.data.projects.map(item => {
          item.type = 'project';
          return item;
        }))
        .set('news', action.data.news.map(item => {
          item.type = 'news';
          return item;
        }))
        .set('about', action.data.about)

    case LOAD_DATA_ERROR:
      return state.set('ready', true)
        .set('error', true);


    case SELECT_ARTICLE:
      const cur_id = state.get('selected')
      let next_id = action.id;
      if (action.id == cur_id) {
        next_id = false
      } 
      return state.set('selected', next_id).set('feature', '');

    case SELECT_TARGET:
      return state.setIn(['target', 'name'], action.target)
        .setIn(['target', 'value'], action.value)
        .set('order', fromJS({
          name: 'date',
          lang: action.lang
        }))
        .set('selected', false);


    case HIDE_FEATURE_IMAGE:
      return state.set('feature', '');
    case SHOW_FEATURE_IMAGE:
      return state.set('feature', action.img);
    case INIT_WEB_STATE:
      return state
        .set('search', fromJS({key: '', active: false}))
        .set('selected', '')
        .set('order', fromJS({name: 'date', lang: 'zh'}))
        .set('target', fromJS({name: '', lang: ''}));

    default:
      return state;
  }
}

export default appReducer;
