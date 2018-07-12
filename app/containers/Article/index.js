/**
 * Created by sunqi on 2018/6/12.
 */
/**
 * Created by sunqi on 2018/6/11.
 */
import React from 'react'
import ArticleItem from './ArticleItem'
import './style.css'
import sort from '../../utils/sort'
import {Row ,Col} from 'antd'
import helper from '../../utils/helper'
export default class Article extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

componentDidMount() {
  this.getSortedItems(this.props)
}


  detectDiff(np) {
    const _order = np.activeOrder;
    const _selected_id = np.selected_id;
    const _search = np.search;
    const _list = np.list;

    const order = this.props.activeOrder;
    const selected_id = this.props.selected_id;
    const search = this.props.search;
    const list = this.props.list;


    let changed = false;


    if (_search.key !== search.key) {
      changed = true;
    }

    if (order.name !== _order.name || order.lang !== _order.lang) {
        changed = true;
    }

    if (selected_id !== _selected_id) {
      changed = true;
    }

    if (list.length !== _list.length) {
      changed = true
    } else {
      list.forEach((l, i) => {
        if (l._id !== _list[i]._id) {
          changed = true
        }
      })
    }

    // 移动端特殊项
    if (np.lang !== this.props.lang) {
      changed = true;
    }

    if (changed) {
      this.getSortedItems(np);
    }
  }


  getSortedItems() {
    const props = this.props;
    const { list, selected_id } = props;
    const order = props.activeOrder;

    const sorted_list = sort(list, order.name, order.lang);

    return sorted_list.map((item) => (
        <ArticleItem
          {...item}
          lang={props.lang}
          active={selected_id == item._id}
          showFeatureImage={props.showFeatureImage}
          hideFeatureImage={props.hideFeatureImage}
          key={item._id}
          onArticleSelect={props.onArticleSelect}
          onTargetSelect={props.onTargetSelect}
          hover={this.props.hover}
          hoverName={this.props.hoverName}
          history={this.props.history}
        ></ArticleItem>
      ))
    //this.setState({
    //  items: articles
    //})
  }

  componentWillReceiveProps(np) {

    //this.detectDiff(np);


  }

  render() {

    const items = this.getSortedItems()
    return (
      <section>
        {items.length> 0 ? items : (
          <Row>
            <Col 
            md={12}
            sm={helper.getResSpan('zh', this.props.lang)}
            xs={helper.getResSpan('zh', this.props.lang)}
            span={12}>
            <h3 className="zh-font" style={{paddingTop: 12,paddingLeft: 24,textAlign: 'left'}}>暂无内容</h3>
            </Col>

             <Col 
             md={12}
             sm={helper.getResSpan('en', this.props.lang)}
             xs={helper.getResSpan('en', this.props.lang)}
             span={12}>
            <h3 className="en-font" style={{paddingTop: 12,paddingLeft: 24,textAlign: 'left'}}>No Content Yet</h3>
            </Col>
          </Row>
          
        )}
      </section>
    )
  }
}
