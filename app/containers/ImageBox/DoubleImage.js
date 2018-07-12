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


    const w = window.innerWidth / 2;
    let h1 = w / (this.props.images[0].width - 0) *(this.props.images[0].height - 0);
    let h2 = w / (this.props.images[1].width - 0) * (this.props.images[1].height - 0);

    console.log(h1, h2);
    let h = h1 > h2 ? h2 : h1;
    if (h > window.innerHeight) {
      h = window.innerHeight
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
      <Row
      style={{padding: 0}} 
      id={this.state.id}>

        {this.props.images.map(image => (
          <Col
            key={Math.random()}
            span={12}>
            <div
              data-image={host + '/uploads/' + image.name}
              className="img-box">
            </div>
          </Col>
        ))}
      </Row>
    )

  }
}
