/**
 * Created by sunqi on 2018/5/24.
 */
import { Link } from 'react-router-dom';
import React from 'react'
import {Row, Col} from 'antd'
import helper from '../../utils/helper'
export default class NavBtn extends React.PureComponent {

  handleClick() {

    helper.changeLogoColor
    this.props.initWebState()
    this.props.history.push({
      pathname: this.props.path
    })

  }

  render() {

    const {active, name, index} = this.props;
    return (
      <div
        onMouseEnter={(evt) => {
            $(evt.target).parents('.header-container').find('.nav-btn-' + index).addClass('hovering')
          }}
        onMouseLeave={(evt) => {
             $(evt.target).parents('.header-container').find('.nav-btn-' + index).removeClass('hovering')
          }}
        onClick={this.handleClick.bind(this)}
        className={(active ? 'nav-btn active' : 'nav-btn') + ' nav-btn-' + index}
      >
        <span>
        {name}
        </span>
      </div>
    )
  }

}
