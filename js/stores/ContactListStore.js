
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
    editable = false,
    ContactStore;

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

    currentContact = utils.getId();
    toggleEdit( true );

    contacts.push( {
        id: currentContact,
        firstName: '',
        secondName: '',
        phones: [ 'phone1' ],
        company: ''
    } );
}

function updateContact( options ) {

    contacts = contacts.map( function( contact ) {

        if ( contact.id === options.id ) {
            contact[ options.property ] = options.value
        }
        return contact;
    } );
}

function toggleEdit( newStatus ) {
    editable = newStatus || !editable;
}

ContactStore = assign( {}, EventEmitter.prototype, {

    getAllContacts: function() {
        return contacts;
    },

    getCurrentContact: function() {
        return currentContact;
    },

    isEditable: function() {
        return editable;
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
            break;

        case AppConstants.DELETE_CONTACT:
            removeContact( action.id );
            break;

        case AppConstants.ADD_CONTACT:
            addContact();
            break;

        case AppConstants.UPDATE_CONTACT:
            updateContact( action.options );
            break;

        case AppConstants.TOGGLE_EDIT:
            toggleEdit();

        default:
            break;
    }
    ContactStore.emitChange();
} );

module.exports = ContactStore;
