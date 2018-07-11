/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');


const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);
const makeSelectProjects = () => createSelector(
  selectGlobal,
  (state) => state.get('projects')
);

const makeSelectOrder = () => createSelector(
  selectGlobal,
  (state) => state.get('order').toJS()
);

const makeSelectHeader = () => createSelector(
  selectGlobal,
  (state) => state.get('header')
);
const makeSelectSearch = () => createSelector(
  selectGlobal,
  (state) => state.get('search').toJS()
);
const makeSelectSelected = () => createSelector(
  selectGlobal,
  (state) => state.get('selected')
);


const makeSelectTarget = () => createSelector(
  selectGlobal,
  (state) => state.get('target').toJS()
);

const makeSelectNews = () => createSelector(
  selectGlobal,
  (state) => state.get('news')
);
const makeSelectReady = () => createSelector(
  selectGlobal,
  (state) => state.get('ready')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (state) => state.get('error')
);

const makeSelectAbout = () => createSelector(
  selectGlobal,
  (state) => state.get('about')
);
const makeSelectFeature = () => createSelector(
  selectGlobal,
  (state) => state.get('feature')
);

const makeSelectLang = () => createSelector(
  selectGlobal,
  (state) => state.get('language')
);

const makeSelectHover = () => createSelector(
  selectGlobal,
  (state) => state.get('hover')
);




export {
  selectGlobal,
  makeSelectLocation,

  makeSelectProjects,
  makeSelectNews,
  makeSelectAbout,

  makeSelectOrder,
  makeSelectSelected,
  makeSelectSearch,
  makeSelectHeader,
  makeSelectFeature,

  makeSelectError,
  makeSelectReady,
  makeSelectLang,
  makeSelectTarget,
  makeSelectHover
};
