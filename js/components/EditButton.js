
var React = require( 'react' ),
    AppActions = require( '../actions/actions' );

module.exports = React.createClass( {

    propTypes: {

        isEditable: React.PropTypes.bool
    },

    _onClick: function() {

        AppActions.toggleEdit();
    },

    render: function() {

        return (
            <div className = 'CA-editButton'
                onClick = { this._onClick }>
                { this.props.isEditable ? 'Save' : 'Edit'}
            </div>
        );
    }

} );