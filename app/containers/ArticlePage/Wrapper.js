/**
 * Created by sunqi on 2018/6/17.
 */
import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import PaddingContainer from '../PaddingContainer'
import ArticleList from './index'

import {makeSelectLocation} from '../App/selectors'
export  class Wrapper extends React.PureComponent{



  render() {
    return (
      <PaddingContainer>
        <ArticleList></ArticleList>
      </PaddingContainer>

    )
  }

}


export function mapDispatchToProps(dispatch) {
  return {
  };
}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
)(Wrapper);
