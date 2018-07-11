/**
 * Created by sunqi on 2018/6/11.
 */
import React from 'react'
import HeaderItem from './HeaderItem'
import {Row,Col} from 'antd'
import helper from '../../utils/helper'
import Logo from './Logo.js'
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

  const zh_res_span = helper.getResSpan('zh', props.lang);
  const en_res_span = helper.getResSpan('en', props.lang)


  return (
    <Row className="header-container">
      <Logo></Logo>
      <Col xs={zh_res_span} sm={zh_res_span} md={12} className="zh-font">
        <HeaderItem
          {...props}
          list={nav_zh}
        ></HeaderItem>
      </Col>
      <Col xs={en_res_span} sm={en_res_span} md={12} className="en-font">
        <HeaderItem
          {...props}
          list={nav_en}
        ></HeaderItem>
      </Col>
    </Row>

  )
}
