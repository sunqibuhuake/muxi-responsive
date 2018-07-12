import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import $ from 'jquery'
import { createStructuredSelector } from 'reselect';
import { makeSelectLang,
  makeSelectSearch,
  makeSelectLocation,
  makeSelectHeader,
  makeSelectOrder
} from '../App/selectors'
import {
  hideBigHeader,
  hideSmallHeader,
  doSearch,
  changeSearchKey,
  switchLanguage,
initWebState,
  selectOrder,
  selectArticle
} from '../App/actions'
import MobileHeader from './MobileHeader'
import SmallHeader from './SmallHeader'
import XHeader from './XHeader'
import Search from './Search'
import './logo.css'
import './style.css'

import helper from '../../utils/helper'
import Sort from '../Sort'


class Header extends React.Component {

  componentWillMount() {
  }


  componentDidMount() {

    this.status = 'BIG'
    //this.detectScroll()
    this.resizeLogo()
    this.bindBack()
    helper.changeLogoColor()


  }

  bindBack() {
    $('.header-container').click(function()  {
      if($(this).hasClass('back2top')) {
      console.log('back 2 top')
        $('html, body').animate({
          scrollTop: 0
        }, 300)
      }
    })
  }
  detectScroll() {
    const self = this;
    let trigger = false;
    $(window).scroll(function(e) {
      const delta = $(document).scrollTop();
      //console.log(delta)
      if (delta > 20 && self.props.header == 'big' && !trigger) {
        //trigger = true;
          //self.props.hideBigHeader()
      } else {
      }
    })
  }


  resizeLogo() {
    const self = this;
    $(document).on('scroll', function(e) {
      if ($(document).scrollTop() > 100) {

        if (self.status == 'SMALL') {
          return false;
        }

        self.status = 'SMALL'
        //$('.search-container').addClass('boldBorder')
        $('.header-container').addClass('back2top')

     

        $('.chineseLogo1').attr(
          'class',
          'chineseLogo chineseLogo1 shrinkChinese'
        );
        $('.chineseLogo2').attr(
          'class',
          'chineseLogo chineseLogo2 shrinkChinese'
        );
        $('.chineseLogo3').attr(
          'class',
          'chineseLogo chineseLogo3 shrinkChinese'
        );
        $('.chineseLogo4').attr(
          'class',
          'chineseLogo chineseLogo4 shrinkChinese'
        );
        $('.chineseLogo5').attr(
          'class',
          'chineseLogo chineseLogo5 shrinkChinese'
        );
        $('.chineseLogo6').attr(
          'class',
          'chineseLogo chineseLogo6 shrinkChinese'
        );

        $('.englishLogo1').attr(
          'class',
          'englishLogo englishLogo1 shrinkEnglish shrinkEnglishOne'
        );
        $('.englishLogo2').attr(
          'class',
          'englishLogo englishLogo2 shrinkEnglish shrinkEnglishTwo'
        );
        $('.englishLogo3').attr(
          'class',
          'englishLogo englishLogo3 shrinkEnglish'
        );
        $('.englishLogo4').attr(
          'class',
          'englishLogo englishLogo4 shrinkEnglish shrinkEnglishFour'
        );
        $('.englishLogo5').attr(
          'class',
          'englishLogo englishLogo5 shrinkEnglish'
        );
        $('.englishLogo6').attr(
          'class',
          'englishLogo englishLogo6 shrinkEnglish'
        );
        $('.englishLogo7').attr(
          'class',
          'englishLogo englishLogo7 shrinkEnglish'
        );
        $('.englishLogo8').attr(
          'class',
          'englishLogo englishLogo8 shrinkEnglish'
        );
        $('.header-item').css('display', 'none');
        $('.header-container').css('height', '54px');
      } else {
        
        if (self.status == 'BIG') {
          return false;
        }
        self.status = 'BIG'
        //$('.header-container').removeClass('back2top')

        //$('.search-container').removeClass('boldBorder')


        $('.chineseLogo1').attr('class', 'chineseLogo chineseLogo1');
        $('.chineseLogo2').attr('class', 'chineseLogo chineseLogo2');
        $('.chineseLogo3').attr('class', 'chineseLogo chineseLogo3');
        $('.chineseLogo4').attr('class', 'chineseLogo chineseLogo4');
        $('.chineseLogo5').attr('class', 'chineseLogo chineseLogo5');
        $('.chineseLogo6').attr('class', 'chineseLogo chineseLogo6');
        $('.englishLogo1').attr('class', 'englishLogo englishLogo1');
        $('.englishLogo2').attr('class', 'englishLogo englishLogo2');
        $('.englishLogo3').attr('class', 'englishLogo englishLogo3');
        $('.englishLogo4').attr('class', 'englishLogo englishLogo4');
        $('.englishLogo5').attr('class', 'englishLogo englishLogo5');
        $('.englishLogo6').attr('class', 'englishLogo englishLogo6');
        $('.englishLogo7').attr('class', 'englishLogo englishLogo7');
        $('.englishLogo8').attr('class', 'englishLogo englishLogo8');
        $('.header-item').css('display', 'block');
        $('.header-container').css('height', '160px');
      }
    });
  }

  componentWillReceiveProps(np) {

    if (np.location.pathname == '/about' || np.location.pathname == '/news' || np.location.pathname == '/') {
      if (np.location.pathname !== this.props.location.pathname) {
        helper.changeLogoColor()
      }
    }
  }

  componentDidUpdate() {
    
  }


  handleOrderSelect(order, lang) {
    const pageName = this.getModeByLocation()
    this.props.history.push({
      pathname: '/' + pageName
    })
    this.props.onOrderSelect(order, lang)
  }

  getModeByLocation() {
    const pathname = this.props.location.pathname;
    if (pathname == '/' || pathname.match('projects')) {
      return 'projects'
    } else {
      return 'news'
    }
  }


  render() {

    let headerElem = null;
    if (this.props.header == 'big') {
      headerElem = (
        <XHeader
          history={this.props.history}
          selectArticle={this.props.selectArticle}
          initWebState={this.props.initWebState}
          location={this.props.location}
          switchLanguage={this.props.switchLanguage}
          lang={this.props.lang}
        ></XHeader>
      )
    } else {
      headerElem = (
        <SmallHeader
          onClick={this.props.hideSmallHeader}
        >
        </SmallHeader>
      )
    }

    return (
      <header className="fix-header">
        {this.props.header == 'big'}
        {headerElem}
        <Search
          search={this.props.search}
          changeSearchKey={this.props.changeSearchKey}
          doSearch={this.props.doSearch}
        ></Search>
        {this.props.history.location.pathname !== '/about' ? (
        <Sort
        location={this.props.location}
        lang={this.props.lang}
        onOrderSelect={this.handleOrderSelect.bind(this)}
        activeOrder={this.props.activeOrder}
      ></Sort>
        ) : null}

      </header>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    hideBigHeader: () => dispatch(hideBigHeader()),
    hideSmallHeader: () => dispatch(hideSmallHeader()),
    doSearch: () => dispatch(doSearch()),
    selectArticle: (id) => dispatch(selectArticle(id)),
    changeSearchKey: (key) => dispatch(changeSearchKey(key)),
    switchLanguage: (lang) => dispatch(switchLanguage(lang)),
    initWebState: () => dispatch(initWebState()),
    onOrderSelect: (order, lang) => {
      dispatch(selectOrder(order, lang))
    },
  };
}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  header: makeSelectHeader(),
  search: makeSelectSearch(),
  lang: makeSelectLang(),
  activeOrder: makeSelectOrder(),


});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

//const withReducer = injectReducer({ key: 'header', reducer });
//const withSaga = injectSaga({ key: 'header', saga });

export default compose(
  //withReducer,
  //withSaga,
  withConnect
)(Header);


