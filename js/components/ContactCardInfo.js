

var React = require( 'react' );

module.exports = React.createClass( {

    propTypes: {

        firstName: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className = 'CA-card__info'>
                <div className = 'CA-card__info__first' >
                    First Name:&nbsp;
                    <span className = 'content' >{ this.props.firstName }</span>
                </div>
                <div className = 'CA-card__info__second'>
                    Second Name:&nbsp;
                    <span className = 'content' >{ this.props.secondName }</span>
                </div>
                <div className = 'CA-card__info__company'>
                    Company:&nbsp;
                    <span className = 'content' >{ this.props.company }</span>
                </div>
            </div>
        );
    }
} );