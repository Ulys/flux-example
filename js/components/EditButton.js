
var React = require( 'react' );

module.exports = React.createClass( {

    propTypes: {

    },

    getInitialState: function() {
        return {
            editable: false
        }
    },

    componentWillMount: function() {

        this.setState( {
            editable: this.props.editable
        } );
    },

    _onClick: function() {

        this.setState( {
            editable: !this.state.editable
        } );

        this.props.callback();
    },

    render: function() {

        return (
            <div className = 'CA-editButton'
                onClick = { this._onClick }>
                { !this.state.editable ? 'Edit' : 'Save'}
            </div>
        );
    }

} );