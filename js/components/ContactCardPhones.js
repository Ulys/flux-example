

var React = require( 'react' );

module.exports = React.createClass( {

    propTypes: {

        phones: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            <ul className = 'CA-card__phones'>
                { this.props.phones.map( function( phone ) {
                    return <li> { phone } </li>
                } ) }
            </ul>
        )
    }
} );