import {
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_ERROR,

  SELECT_ARTICLE,
  SELECT_ORDER,
  SELECT_TARGET,

  HIDE_BIG_HEADER,
  HIDE_SMALL_HEADER,

  DO_SEARCH,
  CHANGE_SEARCH_KEY,

  SHOW_FEATURE_IMAGE,
  HIDE_FEATURE_IMAGE,
  SWITCH_LANGUAGE,
  INIT_WEB_STATE,
HOVER

} from './constants';


export function hover(key) {
  return {
    type: HOVER,
    key
  }
}
export function selectTarget(target, value, lang) {
  return {
    type: SELECT_TARGET,
    target, value,lang
  }

}
export function initWebState() {
  return {
    type: INIT_WEB_STATE
  }
}

export function switchLanguage(lang) {
  return {
    type: SWITCH_LANGUAGE,
    lang
  }
}
export function hideFeatureImage() {
  return {
    type: HIDE_FEATURE_IMAGE
  }
}


export function showFeatureImage(img) {
  return {
    type: SHOW_FEATURE_IMAGE,
    img
  }
}

export function changeSearchKey(key) {
  return {
    type: CHANGE_SEARCH_KEY,
    key
  }
}

export function doSearch() {
  return {
    type: DO_SEARCH
  }
}
export function hideSmallHeader() {
  return {
    type: HIDE_SMALL_HEADER
  }
}

export function hideBigHeader() {
  return {
    type: HIDE_BIG_HEADER
  }
}
export function selectOrder(order, lang) {
  return {
    type: SELECT_ORDER,
    order, lang
  }
}
export function selectArticle(id) {
  return {
    type: SELECT_ARTICLE,
    id
  }
}
export function loadData() {
  return {
    type: LOAD_DATA
  }
}

export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    data
  }
}
export function loadDataError() {
  return {
    type: LOAD_DATA_ERROR
  }
}
