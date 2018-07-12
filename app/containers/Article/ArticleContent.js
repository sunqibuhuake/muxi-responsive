/**
 * Created by sunqi on 2018/6/13.
 */
import React from 'react'
import {Row,Col} from 'antd'
import ArticleGallery from './ArticleGallery'
import ArticleText from './ArticleText'
//import $ from 'jquery'
export default class ArticleContent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      id: 'content-' + (Math.random() + '').split('.')[1],
      content: null
    }
  }

  componentDidMount() {
    console.log('did')
  }

  componentWillReceiveProps(np) {

    if (!this.props.active && np.active) {
      this.show()
    }
  }

  hideContent() {
    $('#' + this.state.id).css({
      display: 'none'
    })
  }


  show() {
    const self = this;
    $('.article-content-container').animate({'height': '0px'}, 300, () => {

    });
    function damn() {
   
      const top = $('#' + self.state.id).parent('.article-row').offset().top
      $('#' + self.state.id).css({
        height: 'auto'
      })
      // $('html,body').animate({"scrollTop": (top - 120 ) + 'px'}, 300, function() {
      //   console.log('scroll done')
      // })

      let scroll_delta = top - 148;
      console.log(scroll_delta)
      if (scroll_delta <= 140) {
        scroll_delta = 0;
      }
      $('html,body').animate({"scrollTop": scroll_delta + 'px'}, 300, function() {
        console.log('scroll done')
      })
    }

    setTimeout(damn, 330)
  }

  render() {
    console.log(22);
    return (
      <Row id={this.state.id}
           className={this.props.active ? "article-content-container active" : "article-content-container" }
           //style={{display: this.props.active? 'block' : 'none'}}
      >
        <div style={{height: 0}}></div>
        <ArticleGallery
          {...this.props}
        ></ArticleGallery>
        <ArticleText
          {...this.props}
        ></ArticleText>
      </Row>
    )
  }
}
