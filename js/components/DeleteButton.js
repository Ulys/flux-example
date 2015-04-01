
var React = require( 'react' ),
    AppActions = require( '../actions/actions.js' );

module.exports = React.createClass( {

    propTypes: {

        id: React.PropTypes.number.isRequired
    },

    render: function() {

        return (
            <div className = 'CA-deleteButton'
                onClick = { this._onClick }> Delete </div>
        );
    },

    _onClick: function() {

        AppActions.deleteContact( this.props.id );
    }

} );