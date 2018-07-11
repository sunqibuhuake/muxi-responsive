/**
 * Created by sunqi on 2018/6/13.
 */
import React from 'react'

export default function({onClick}) {

  function handleClick() {
    $('html, body').animate({scrollTop: 0}, 100, function() {
      onClick()
    })
  }

  return (
    <header
      onClick={handleClick}
      className="small-header">
      <p>
        直径叙事设计
      </p>
      <p>
        DIAMETER
      </p>
    </header>
  )
}
