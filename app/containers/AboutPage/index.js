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
import PaddingContainer from '../PaddingContainer'
import ArticleList from '../ArticlePage/Wrapper'

import {Row, Col} from 'antd'
import helper from '../../utils/helper'

import {
  makeSelectAbout,
  makeSelectHeader,
  makeSelectSearch,
  makeSelectLang

} from '../App/selectors';

import ContentBox from './ContentBox'
export class AboutPage extends React.PureComponent {


  render() {

    const styles = {
      zh: {
        padding: '12px 24px',
        fontSize: '12pt',
        lineHeight: '18pt',
        color: 'black'
      },
      en: {
        padding: '12px 24px',
        fontSize: '12pt',
        lineHeight: '18pt',
        color: 'black'
      }
    }

    if (this.props.search.active && this.props.search.key.length > 0) {
      return (
        <ArticleList></ArticleList>
      )
    }


    return (
      <PaddingContainer>
        <Row>
            <Col
              className="zh-font"
              md={12}
              sm={helper.getResSpan('zh', this.props.lang)}
              xs={helper.getResSpan('zh', this.props.lang)}

            >
              <ContentBox
                style={styles.zh}

                text={this.props.about.zh}
              >
              </ContentBox>
            </Col>
            <Col
              className="en-font"
              md={12}
              sm={helper.getResSpan('en', this.props.lang)}
              xs={helper.getResSpan('en', this.props.lang)}

            >
              <ContentBox
                style={styles.en}
                text={this.props.about.en}
              >
              </ContentBox>

            </Col>



        </Row>
      </PaddingContainer>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({
  about: makeSelectAbout(),
  header: makeSelectHeader(),
  search: makeSelectSearch(),
  lang: makeSelectLang()

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
)(AboutPage);
