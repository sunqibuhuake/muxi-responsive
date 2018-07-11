/**
 * Created by sunqi on 2018/6/11.
 */
import React from 'react'

export default function (props) {


  return (
    <div
      span={12}
      className={"half-sort-container " + (props.lang == 'en' ? 'en-font' : 'zh-font')}>
            <span>
                {props.label}
            </span>
      {props.orders.map(l => (
        <span
          onMouseEnter={(evt) => {
            $(evt.target).parents('.ant-row').find('.sort-btn-' + l.name).addClass('hovering')
          }}
          onMouseLeave={(evt) => {
             $(evt.target).parents('.ant-row').find('.sort-btn-' + l.name).removeClass('hovering')
          }}
          onClick={props.onOrderSelect.bind(null,l.name, props.lang)}
          className={(props.activeOrder.name == l.name ? 'sort-btn active' : 'sort-btn') + ' sort-btn-' + l.name}
          key={Math.random()}
        >
                    {l[props.lang]}
                </span>
      ))}

    </div>
  )
}
