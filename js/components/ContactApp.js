
var React = require( 'react' ),
    ContactCard = require( './ContactCard.js' ),
    ContactStore = require( '../stores/ContactListStore.js' );
    ContactList = require( './ContactList.js' );

function getAllContacts() {
    return {
        allContacts: ContactStore.getAllContacts(),
        currentContact: ContactStore.getCurrentContact()
    }
}


module.exports = React.createClass( {

    getInitialState: function() {
        return getAllContacts();
    },

    componentDidMount: function() {
        ContactStore.addChangeListener( this._onChange );
    },

    componentWillUnmount: function() {
        ContactStore.removeChangeListener( this._onChange );
    },

    _onChange: function() {
        this.setState( getAllContacts() );
    },

    render: function() {

        return (
            <div className = 'CA-wrapper' >
                <ContactCard
                    contact = { this.state.allContacts.filter( ( function( element ) {
                        return element.id === this.state.currentContact;
                    } ).bind( this ) )[ 0 ] }
                />
                <ContactList
                    contacts = { this.state.allContacts }
                    currentContact = { this.state.currentContact }
                />
            </div>
        );
    }
} );
