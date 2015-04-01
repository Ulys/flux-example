
var React = require( 'react' ),
    AppActions = require( '../actions/actions.js' );

module.exports = React.createClass( {

    render: function() {

        return (
            <div className = 'CA-newButton'
                onClick = { this._onClick }> Create </div>
        );
    },

    _onClick: function() {

        AppActions.addContact();
    }

} );