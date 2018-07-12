/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import helper from '../../utils/helper'
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
import {
  makeSelectNews,
  makeSelectProjects,
  makeSelectAbout,

  makeSelectOrder,
  makeSelectSearch,

  makeSelectSelected,
  makeSelectHeader,
  makeSelectFeature,
  makeSelectLang,
  makeSelectLocation,
  makeSelectTarget,
  makeSelectHover

} from '../App/selectors';
import { selectTarget,selectArticle, selectOrder, showFeatureImage, hideFeatureImage } from '../App/actions';

//import reducer from './reducer';
//import saga from './saga';

import Sort from '../Sort'
import Article from '../Article'
import searchFunc from '../../utils/search'
import FloatImage from './FloatImage'

import PaddingContainer from '../PaddingContainer'

export class ArticlePage extends React.PureComponent {


  filterByTarget(list) {

    const target = this.props.target;
    if (!target.name) {
      return list
    }
    if (target.name == 'start') {
      return list.filter(l => {
        if (l.start <= target.value && l.end >= target.value) {
          return true
        }
      })
    }

    if (target.name == 'end') {
      return list.filter(l => {
        if (l.start <= target.value && l.end >= target.value) {
          return true
        }
      })
    }

    return list.filter(l => {
      return (l[target.name + '_zh'] == target.value || l[target.name + '_en'] == target.value)
    })

  }

  filterBySearchKey() {
    const list = this.getListByMode();
    const {search} = this.props;
    // 如果是搜索模式
    //if (search.active && search.key) {
    if (search.key) {
      return searchFunc(list, search.key)
    } else {
      return list;
    }
  }


  filter() {
    // todo 优化:搜索和target 其实是不能并存的两种状态
    const filterByKey = this.filterBySearchKey()
    const filterByTarget = this.filterByTarget(filterByKey)
    return filterByTarget;
  }

  componentDidMount() {

    if (this.props.location.pathname == '/news') {
      this.selectFirstNews()
    } else if (this.props.match.params.id) {
      this.selectArticleById(this.props.match.params.id)
    }
  }

  selectFirstNews() {
    if (this.props.news.length > 0) {
      let last = this.props.news[0];
      this.props.news.forEach(n => {
        if(n.start > last.start) {
          last = n;
        }
      })
      this.props.onArticleSelect(last._id)
    }
  }

  componentWillReceiveProps(np) {

    //　取消选中
    if (this.props.selected_id && !np.selected_id) {
      $('.article-content-container').css({'height': '0px'})
      return false;

    }


    // 从其他页面跳转至 /news
    if (!this.props.location.pathname.match('news') && np.location.pathname == '/news') {
      this.selectFirstNews()
      return false;
    }

    // 更改排序方式
    if (JSON.stringify(this.props.activeOrder) !== JSON.stringify(np.activeOrder)) {
      this.props.history.push({
        pathname: '/' + this.getModeByLocation()
      })
      return false
    }


    // if (this.props.match.params.id !== np.match.params.id) {
    //   let cur_id = np.match.params.id;
    //   if (!cur_id) {
    //     cur_id = false;
    //   }

    //   this.selectArticleById( cur_id)
    // }

    // if (np.location.pathname == '/news' &&　this.props.location.pathname == '/news') {
    //   this.selectArticleById( false)
    //   return false;
    // }

 



  }

  selectArticleById(id) {
    this.props.onArticleSelect(id)
  }

  getListByMode() {

    const {projects, news, about, search} = this.props;

    // 当前是正常模式
    const mode = this.getModeByLocation();
    if (mode == 'projects') {
      return projects
    } else {
      return news
    }
  }

  getModeByLocation() {
    const pathname = this.props.location.pathname;
    if (pathname == '/' || pathname.match('projects')) {
      return 'projects'
    } else {
      return 'news'
    }
  }

  componentDidUpdate() {
    if (this.props.target) {
      $('.article-meta').removeClass('filtered')
      $('.' + this.props.target.name + '-label').addClass('filtered')
    } else {
      $('.article-meta').removeClass('filtered')

    }
  }

  render() {
    const list = this.filter();
    //const headerHeight = this.props.header == 'big' ? 200 : 110
    const styles = {
      root: {
        padding: 0,
        margin: 0
      }
    }


    console.log(this.props.feature)
    return (
      <PaddingContainer>

        <Article
          lang={this.props.lang}
          list={list}
          selected_id={this.props.selected_id}
          onArticleSelect={this.props.onArticleSelect}
          onTargetSelect={this.props.onTargetSelect}
          activeOrder={this.props.activeOrder}
          search={this.props.search}
          history={this.props.history}
          hover={this.props.hover}
          hoverName={this.props.hoverName}
          showFeatureImage={this.props.showFeatureImage}
          hideFeatureImage={this.props.hideFeatureImage}
        ></Article>

        {this.props.feature ? (<FloatImage img={this.props.feature}></FloatImage>) : ''}
      </PaddingContainer>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onArticleSelect: (id) => dispatch(selectArticle(id)),
    onOrderSelect: (order, lang) => {
      dispatch(selectOrder(order, lang))
    },

    onTargetSelect: (target, value, lang) => dispatch(selectTarget(target, value, lang)),
    showFeatureImage: (id) => dispatch(showFeatureImage(id)),
    hideFeatureImage: () => dispatch(hideFeatureImage()),
    hover: (key) => dispatch(hover(key))

  };
}

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjects(),
  news: makeSelectNews(),
  about: makeSelectAbout(),
  activeOrder: makeSelectOrder(),
  header: makeSelectHeader(),
  search: makeSelectSearch(),
  selected_id: makeSelectSelected(),
  target: makeSelectTarget(),
  feature: makeSelectFeature(),
  lang: makeSelectLang(),
  location: makeSelectLocation(),
  hoverName: makeSelectHover,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
//const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withConnect
)(ArticlePage);
