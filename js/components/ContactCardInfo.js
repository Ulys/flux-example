

var React = require( 'react' ),
    AppActions = require( '../actions/actions' )
    EditButton = require( './EditButton' );

module.exports = React.createClass( {

    getInitialState: function() {

        return {
            editable: false
        }
    },

    componentDidMount: function () {
        this.setState( {
            editable: !!this.props.firstName
        } );
    },

    _onChange: function( property, event ) {

        AppActions.updateContact( this.props.id, property, event.target.value );
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
                        onChange = { this._onChange.bind( this, 'firstName' ) }
                        value = { this.props.firstName }
                        disabled = { !this.state.editable }
                    />
                </div>
                <div className="CA-card__info__row">
                    <label className = 'CA-card__info__second'>Second Name:&nbsp;</label>
                    <input type='text' className = 'content'
                        onChange = { this._onChange.bind( this, 'secondName' ) }
                        value = { this.props.secondName }
                        disabled = { !this.state.editable }
                    />
                </div>
                <div className="CA-card__info__row">
                    <label className = 'CA-card__info__company'>Company:&nbsp;</label>
                    <input type='text' className = 'content'
                        onChange = { this._onChange.bind( this, 'company' ) }
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