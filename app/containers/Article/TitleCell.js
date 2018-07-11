import React from 'react'
export default class TitleCell extends React.PureComponent{


    handleClick(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation()
        let text = this.props.text;
        if ((text == 'now' || text == '今') && this.props.name == 'end') {
            text = 9999;
        }
        this.props.onTargetSelect(this.props.name, text, this.props.lang);
    
      }
    
    render() {
        return (
            <span
            data-name={this.props.name}
            data-key={this.props.name + '-' + this.props.lang}
            onMouseEnter={(evt) => {
              const name = $(evt.target).data('name');
              const zh = $(evt.target).parents('.ant-row').find(`span[data-key=${name + '-zh'}]`).text()
              const en = $(evt.target).parents('.ant-row').find(`span[data-key=${name + '-en'}]`).text()
              $('.article-meta').each(function() {
                if ($(this).text() == zh || $(this).text() == en) {
                    if($(this).data('name') == name) {
                        $(this).addClass('hovering')
                    }
                }
              })

            }}
            onMouseLeave={(evt) => {
              $('.article-meta').removeClass('hovering')
            }}
            onClick={this.handleClick.bind(this)}
            className={"article-meta " + (this.props.mr  ? 'nomargin' : '')}>
            {this.props.text}
          </span>
        )
    }
}