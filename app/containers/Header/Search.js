/**
 * Created by sunqi on 2018/6/11.
 */
import React from 'react'
import {Icon} from 'antd'
export default class Search extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      key: ''
    }
  }

  handleChange(evt) {
    const v = evt.target.value;
    this.props.changeSearchKey(v)
  }
  onSearchBtnClick() {
    this.props.doSearch()
  }

  render() {
    return (
      <div className="search-container">
        <input
          value={this.props.search.key}
          onChange={this.handleChange.bind(this)}
        >

        </input>
        <div className="search-btn"
        >
          <div className="vertical-center"
               onClick={this.onSearchBtnClick.bind(this)}
          >
            <Icon type="search"/>
          </div>
        </div>
      </div>
    )
  }
}
