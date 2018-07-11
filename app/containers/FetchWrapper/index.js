/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectReady,
  makeSelectError,
  makeSelectLang
} from '../App/selectors';
import { loadData, selectArticle, selectOrder,switchLanguage  } from '../App/actions';

import saga from './saga';
import search from '../../utils/search'

export class FetchWrapper extends React.PureComponent {

  componentDidMount() {
    this.props.loadData()
    this.detectTimeZone()
  }

  detectTimeZone() {
    const d=new Date(); //创建一个Date对象
    const localTime = d.getTimezoneOffset();

    if (localTime == -480) {
      //do nothing
    } else {
      this.props.switchLanguage('en')
    }

  }

  reload() {
    this.props.loadData();
  }


  render() {

    const styles = {
      root: {
        padding: 0,
        margin: 0,
        width: '100%'
      }
    }
    if (!this.props.ready) {
      return (<h3 style={{paddingTop: 120,textAlign:'center'}}>LOADING</h3>)
    }

    if (this.props.error) {
      return (<h3>出现错误</h3>)
    }

    return (
      <div style={styles.root}>
        {this.props.children}
      </div>
    )

  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadData()),
    switchLanguage: (lang) => dispatch(switchLanguage(lang))
  };
}

const mapStateToProps = createStructuredSelector({
  ready: makeSelectReady(),
  error: makeSelectError(),
  lang: makeSelectLang()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({key: 'fetch', saga});

export default compose(
  withSaga,
  withConnect
)(FetchWrapper);
