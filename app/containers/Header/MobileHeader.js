/**
 * Created by sunqi on 2018/6/17.
 */
/**
 * Created by sunqi on 2018/6/11.
 */
import React from 'react'
import HeaderItem from './HeaderItem'
import {Row,Col} from 'antd'
export default function(props) {

  const nav_zh = [
    {
      name: '项目',
      index: 'projects',
      path: '/'
    },
    {
      name: '新闻',
      index: 'news',
      path: '/news'
    },
    {
      name: '关于',
      index: 'about',
      path: '/about'

    }
  ];

  const nav_en = [
    {
      name: 'Projects',
      index: 'projects',
      path: '/'
    },
    {
      name: 'News',
      index: 'news',
      path: '/news'
    },
    {
      name: 'About',
      index: 'about',
      path: '/about'
    }
  ]

  return (
    <Row className="header-container">
      <Col span={24}>
        <HeaderItem
          {...props}
          list={props.lang == 'en' ? nav_en : nav_zh}
        ></HeaderItem>
      </Col>
    </Row>

  )
}
