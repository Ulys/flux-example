
var AppDispatcher = require( '../dispatcher/dispatcher.js' ),
    AppConstants = require( '../constants/constants.js' ),
    assign = require( 'object-assign' ),
    EventEmitter = require( 'events' ).EventEmitter,
    utils = require( '../utils/utils' ),
    currentContact = 0,
    contacts = [
        {
            id: utils.getId(),
            firstName: 'Anton',
            secondName: 'Razumovskyi',
            phones: ['phone1', 'phone2'],
            company: 'EPAM'
        },
        {
            id: utils.getId(),
            firstName: 'Julia',
            secondName: 'Pugaeva',
            phones: ['phone1', 'phone2'],
            company: 'EPAM'
        },
        {
            id: utils.getId(),
            firstName: 'Misha',
            secondName: 'Bortnikov',
            phones: ['phone1', 'phone2'],
            company: 'EPAM'
        },
        {
            id: utils.getId(),
            firstName: 'Leha',
            secondName: 'Leha',
            phones: ['phone1', 'phone2'],
            company: 'RKP'
        },
        {
            id: utils.getId(),
            firstName: 'Lejha',
            secondName: 'sdgf',
            phones: ['phone1', 'phone2'],
            company: 'KPUI'
        },
        {
            id: utils.getId(),
            firstName: 'Rita',
            secondName: 'Margarita',
            phones: ['phone1', 'phone2'],
            company: 'gmail'
        }
    ],
    CHANGE_EVENT = 'CHANGE_EVENT',
    ContacStore;

function changeCurrentContact( id ) {

    currentContact = id;
}

function removeContact( id ) {


    contacts = contacts.filter( function( contact ) {
        return contact.id !== id;
    } );

    currentContact = contacts[0].id;

}

function addContact() {

    contacts.push( {
        id: utils.getId(),
        firstName: 'Mina',
        secondName: 'Razumovskyi',
        phones: ['phone1', 'phone3'],
        company: 'EPAM'
    } );
}
ContactStore = assign( {}, EventEmitter.prototype, {

    getAllContacts: function() {
        return contacts;
    },

    getCurrentContact: function() {
        return currentContact;
    },

    addChangeListener: function( callback ) {
        this.on( CHANGE_EVENT, callback );
    },

    removeChangeListener: function( callback ) {
        this.removeListener( CHANGE_EVENT, callback );
    },

    emitChange: function() {
        this.emit( CHANGE_EVENT );
    }
} );

AppDispatcher.register( function( action ) {

    switch( action.actionType ) {

        case AppConstants.CHANGE_CURRENT_CONTACT:
            changeCurrentContact( action.id );
            ContactStore.emitChange();
            break;
        case AppConstants.DELETE_CONTACT:
            removeContact( action.id );
            ContactStore.emitChange();
            break;
        case AppConstants.ADD_CONTACT:
            addContact();
            ContactStore.emitChange();
            break;
        default:
            ContacStore.emitChange();
            break;
    }
} );

module.exports = ContactStore;
