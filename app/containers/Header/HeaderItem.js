/**
 * Created by sunqi on 2018/6/11.
 */
import {Link} from 'react-router-dom'
import React from 'react'
import {Row, Col} from 'antd'
import NavBtn from './NavBtn'
import LangSwitch from './LangSwitch'
export default function (props) {

  const links = props.list.map(l => {
    let active = false
    if (l.path == '/') {
      if (props.location.pathname == '/' || props.location.pathname.match('projects')) {
        active = true;
      }
    }

    if (l.path == '/news') {
      if (props.location.pathname.match('new')) {
        active = true
      }
    }

    if (l.path == '/about') {
      if (props.location.pathname == '/about') {
        active = true;
      }
    }
    return (
      <Col
        style={{
          padding: '0 24px'
        }}
        key={Math.random()}
        span={12}>
        <NavBtn

          {...l}
          active={active}
          history={props.history}
          initWebState={props.initWebState}
          selectArticle={props.selectArticle}
        >
        </NavBtn>
      </Col>

    )
  });

  links.push(
    <LangSwitch
      key={Math.random()}
      lang={props.lang}
      switchLanguage={props.switchLanguage}
    ></LangSwitch>
  )
  return (
    <Row className="header-item">
      {links}
    </Row>
  )
}
