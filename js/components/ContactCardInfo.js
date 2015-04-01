

var React = require( 'react' ),
    AppActions = require( '../actions/actions' )
    EditButton = require( './EditButton' );

module.exports = React.createClass( {

    getInitialState: function() {

        return {
            editable: false
        }
    },

    propTypes: {

        firstName: React.PropTypes.string.isRequired
    },

    _onChange: function() {

        AppActions.editContact( this.prop.id );
    },

    _edit: function() {

        this.setState(
            {
                editable: !this.state.editable
            }
        );
    },

    render: function() {
        return (
            <div className = 'CA-card__info'>
                <div className="CA-card__info__row">
                    <label className = 'CA-card__info__first' >First Name:&nbsp;</label>
                    <input type='text' className = 'content'
                        value = { this.props.firstName }
                        disabled = { !this.state.editable }
                    />
                </div>
                <div className="CA-card__info__row">
                    <label className = 'CA-card__info__second'>Second Name:&nbsp;</label>
                    <input type='text' className = 'content'
                        value = { this.props.secondName }
                        disabled = { !this.state.editable }
                    />
                </div>
                <div className="CA-card__info__row">
                    <label className = 'CA-card__info__company'>Company:&nbsp;</label>
                    <input type='text' className = 'content'
                        value = { this.props.company }
                        disabled = { !this.state.editable }
                    />
                </div>
                <div className="CA-card-info__row">
                    <EditButton editable = { this.state.editable }
                                callback = { this._edit }/>
                </div>
            </div>
        );
    }
} );