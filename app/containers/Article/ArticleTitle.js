/**
 * Created by sunqi on 2018/6/11.
 */
import React from 'react'
import {Col, Row} from 'antd'
import ArticleTitleItem from './ArticleTitleItem'
import helper from '../../utils/helper'
export default class ArticleTitle extends React.PureComponent{
  handleTitleClick() {
    let base = this.props.history.location.pathname.split('/')[1]
    if (!base) {
      base = 'projects'
    }

    if (this.props.active) {
      this.props.history.push({
        pathname: '/' + base
      })
    } else {
      this.props.history.push({
        pathname: '/' + base + '/' + this.props._id
      })
    }
    this.props.onArticleSelect(this.props._id)
  }
  render() {
    const props = this.props;
    const styles = {
      root: {
        cursor: 'pointer'
      },
      header: {
        padding: '12px 0'
      }
    }
    const zh = {
      title: props.title_zh,
      start: props.start,
      end: props.end == 9999 ? '今' : props.end,
      location: props.location_zh,
      client: props.client_zh,
      cat: props.cat_zh || ''
    }
    const en = {
      title: props.title_en,
      start: props.start,
      end: props.end == 9999 ? 'Now' : props.end,
      location: props.location_en,
      client: props.client_en,
      cat:  props.cat_en || ''
    }

    return (
      <Row
        style={styles.root}
        onClick={this.handleTitleClick.bind(this)}>
        <Col
          md={12}
          sm={helper.getResSpan('zh', props.lang)}
          xs={helper.getResSpan('zh', props.lang)}
          style={styles.header}

        >
          <ArticleTitleItem
            {...zh}
            lang="zh"
            hover={this.props.hover}
            onTargetSelect={this.props.onTargetSelect}
          ></ArticleTitleItem>
        </Col>
        <Col
          md={12}
          sm={helper.getResSpan('en', props.lang)}
          xs={helper.getResSpan('en', props.lang)}
          style={styles.header}
        >
          <ArticleTitleItem
            {...en}
            lang="en"
            hover={this.props.hover}
            onTargetSelect={this.props.onTargetSelect}
          ></ArticleTitleItem>
        </Col>
      </Row>
    )

  }


}
