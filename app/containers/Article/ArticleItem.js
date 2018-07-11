/**
 * Created by sunqi on 2018/6/12.
 */
/**
 * Created by sunqi on 2018/6/11.
 */
import {Col, Row} from 'antd'
import React from 'react'

import ArticleTitle from './ArticleTitle'

import ArticleContent from './ArticleContent'

import $ from 'jquery'

export default class ArticleItem extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      id: 'elem' + (Math.random() + '').split('.')[1]
    }
  }

  componentDidMount() {
    const self = this;
    $('#' + this.state.id).mouseover(function () {
      $('#' + self.state.id + ' .hover-border-top').css({
        height: 2
      })
      $('#' + self.state.id + ' .hover-border-bottom').css({
        height: 3
      })
    })

    $('#' + this.state.id).mouseout(function () {
      $('#' + self.state.id + ' .hover-border-top').css({
        height: 0
      })
      $('#' + self.state.id + ' .hover-border-bottom').css({
        height: 1
      })
    })
  }

  onMouseEnter() {

    if (this.props.active) {
      return false;
    }

    let img = '';
    try {
      img = JSON.parse(this.props.feature).name;
    } catch (e) {
      console.log(e);
    }

    if (img) {
      this.props.showFeatureImage(img)
    }
  }

  onMouseLeave() {
    this.props.hideFeatureImage()
  }

  render() {
    return (
      <section
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        className={"article-row  " }
        id={this.state.id}>
        <div
          className="hover-border-top fake-border"
          style={{
            height: this.props.active ? '2px' : '0px'
          }}
        ></div>
        <div
          className="hover-border-bottom fake-border"
          style={{
            height: this.props.active ? '3px' : '1px'
          }}
        ></div>
        <ArticleTitle {...this.props}></ArticleTitle>
        <ArticleContent {...this.props}></ArticleContent>
      </section>

    )

  }


}
