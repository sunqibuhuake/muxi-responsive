/**
 * Created by sunqi on 2018/6/12.
 */
import React from 'react'
import './style.css'
import {Row, Col} from 'antd'
import $ from 'jquery'
import {host} from '../../utils/api'
export default class DoubleImage extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      id: 'box-' + (Math.random() + '').split('.')[1]
    }
  }




  componentDidMount() {
    const id = this.state.id;
    const arr = $('#' + id).find('.img-box').each(function() {
      const src = $(this).data('image');
      $(this).css({
        backgroundImage: `url(${src})`
      })
    })


    const w = window.innerWidth;
    let h = w / (this.props.images[0].width - 0) * (this.props.images[0].height - 0);

    if (h > (window.innerHeight * 0.8)) {
      h = window.innerHeight * 0.8
    }

    $('#' + this.state.id + ' .img-box').css({
      height: h
    })
  }



  render() {

    const styles = {
      hide: {
        display: 'none'
      }
    }
    return (
      <Row id={this.state.id}>
        <div
          data-image={host + '/uploads/' + this.props.images[0].name}
          className="img-box">
        </div>
      </Row>
    )

  }
}
