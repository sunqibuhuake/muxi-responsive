/**
 * Created by sunqi on 2018/6/11.
 */
import React from 'react'
import {Col} from 'antd'
import TitleCell from './TitleCell'
export default function (props) {



  const hover = {}

  return (
    <div
      className={"half-article-container  " + (props.lang == 'en' ? 'en-font' : 'zh-font') }>
      <span className="article-header-title">
        {props.title}
      </span>
      <ul className="article-header-meta">

        <span>



          
      <TitleCell
        mr={props.end ? true : false}
        onTargetSelect={props.onTargetSelect}
          name='start'
          lang={props.lang}
          text={props.start}
        >
        </TitleCell>
         
          {props.end ? (
            <span className="minus">-</span>
          ) : ''}
          {props.end ? (


            <TitleCell
            onTargetSelect={props.onTargetSelect}
              name='end'
              lang={props.lang}
              text={props.end}
            >
            </TitleCell>

          
          ) : ''}
        </span>

        <TitleCell
        onTargetSelect={props.onTargetSelect}
          name='client'
          lang={props.lang}
          text={props.client}
        >
        </TitleCell>

        <TitleCell
          onTargetSelect={props.onTargetSelect}
          name='cat'
          lang={props.lang}
          text={props.cat}
        >
        </TitleCell>
   
      </ul>
      <div></div>
    </div>
  )
}
