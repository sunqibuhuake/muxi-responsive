import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {makeSelectHeader,makeSelectLocation} from '../App/selectors'

import React from 'react'
export class PaddingContainer extends React.PureComponent {
    render() {
        const headerHeight = this.props.location.pathname == '/about' ? 214 : 254;
        const styles = {
            root: {
                paddingTop: headerHeight
            }
        }

        return (
            <div style={styles.root}>
                {this.props.children}
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    header: makeSelectHeader(),
    location: makeSelectLocation()
});

const withConnect = connect(mapStateToProps, null);

export default compose(
    withConnect
)(PaddingContainer);

