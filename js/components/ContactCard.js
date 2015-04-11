
var React = require( 'react' ),
    ContactCardInfo = require( './ContactCardInfo' ),
    ContactCardPhones = require( './ContactCardPhones' ),
    ContactCardPhoto = require( './ContactCardPhoto' ),
    DeleteButton = require( './DeleteButton' ),
    AddContactButton = require( './AddContactButton' );

module.exports = React.createClass( {

    render: function() {
        return (
            <div className = 'CA-card'>
                <ContactCardPhoto/>
                <ContactCardInfo
                    id = { this.props.contact.id }
                    firstName = { this.props.contact.firstName }
                    secondName = { this.props.contact.secondName }
                    company = { this.props.contact.company }
                    isEditable = { this.props.isEditable }
                />
                <DeleteButton id = { this.props.contact.id }  />
                <AddContactButton/>
            </div>
        );
    }
} );