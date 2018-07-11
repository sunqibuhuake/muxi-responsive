/**
 * Created by sunqi on 2018/6/11.
 */
import React from 'react'
import './style.css'
import {Row,Col} from 'antd'
import SortItem from './SortItem'
import helper from '../../utils/helper'
const projects_orders = [
  {
    name: 'date',
    zh: '时间',
    en: 'Time'
  },
  {
    name: 'location',
    zh: '地点',
    en: 'Location'
  },
  {
    name: 'client',
    zh: '委托人',
    en: 'Client'
  },
  {
    name: 'cat',
    zh: '类型',
    en: 'Service'
  }
]

const news_order = [
  {
    name: 'date',
    zh: '时间',
    en: 'Time'
  },
  {
    name: 'cat',
    zh: '类型',
    en: 'Service'
  }
]




export default class Sort extends React.PureComponent {

  //constructor(props) {
  //  this.state = {
  //    orders:[]
  //  }
  //}
  //
  //componentDidMount() {
  //  this.setState({
  //    orders: this.getOrders(this.props.search, this.props.location)
  //  })
  //}


  getOrders() {
    const mode = helper.getModeByLocation(this.props.location.pathname)
    if (mode == 'projects') {
      return projects_orders
    }else if (mode == 'news') {
      return news_order
    } else {
      return []
    }
  }

  render() {
    const orders = this.getOrders();
    const zh_res_span = helper.getResSpan('zh', this.props.lang)
    const en_res_span = helper.getResSpan('en', this.props.lang)


    return (
      <Row className="sort-row">
        <Col
          xs={zh_res_span}
          sm={zh_res_span}
          md={12}
        >
          <SortItem
            {...this.props}
            label={'排序方式:' }
            orders={orders}
            lang={'zh'}
          ></SortItem>
        </Col>
        <Col
          xs={en_res_span}
          sm={en_res_span}
          md={12}
        >
          <SortItem
            {...this.props}
            label={'Sort by:' }
            orders={orders}
            lang={'en'}

          ></SortItem>
        </Col>

      </Row>
    )
  }
}
