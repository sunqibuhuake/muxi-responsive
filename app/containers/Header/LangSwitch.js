/**
 * Created by sunqi on 2018/6/17.
 */
import React from 'react'
import {Row, Col} from 'antd'
export default function (props) {

  return (
    <Col
      md={0}
      sm={12}
      xs={12}
      style={{
        padding: '0 24px',
        cursor: 'pointer'
      }}
      onClick={() => {
        props.switchLanguage(props.lang === 'en' ? 'zh' : 'en')
      }}
    >
      <div
        className={'nav-btn'}
      >
        {props.lang == 'en' ? '中文' : 'EN'}
      </div>
    </Col>
  )
}
