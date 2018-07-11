/**
 * Created by sunqi on 2018/6/13.
 */
import React from 'react'
import {Row,Col} from 'antd'
import helper from '../../utils/helper'
const styles = {
  root: {
    padding: '0 0 12px'
  },
  zh: {
    lineHeight: '18pt',
    fontSize: '12pt',
    padding: '0 24px'
  },
  en: {
    lineHeight: '20pt',
    fontSize: '12pt',
    padding: '0 24px'
  }

}


function convert2html(str) {
  let htm = str.replace(/\r\n/g, '<br/>');
  htm = htm.replace(/\n/g, '<br/>'); //IE7-8
  htm = htm.replace(/\s/g, ' '); //空格处理
  return htm
}

export default function (props) {

  const content = props['content_' + props.lang];
  const html = convert2html(content);
  return (
    <Row 
    style={styles.root}
    >
      <Col
    className={'zh-font' }

        style={styles[props.lang]}
        sm={helper.getResSpan('zh', props.lang)}
        xs={helper.getResSpan('zh', props.lang)}
        md={12}
        dangerouslySetInnerHTML={
          {
            __html: convert2html(props.content_zh)
          }
        }
      >
      </Col>
      <Col
    className={ 'en-font' }

        style={styles[props.lang]}
        sm={helper.getResSpan('en', props.lang)}
        xs={helper.getResSpan('en', props.lang)}
        md={12}
        dangerouslySetInnerHTML={
          {
            __html: convert2html(props.content_en)
          }
        }
      >
      </Col>
    </Row>

  )
}

