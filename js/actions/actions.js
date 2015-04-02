
var AppDispatcher = require( '../dispatcher/dispatcher.js' ),
    AppConstants = require( '../constants/constants' );

module.exports = {

    chooseContact: function( id ) {

        AppDispatcher.dispatch( {
            actionType: AppConstants.CHANGE_CURRENT_CONTACT,
            id: id
        } );
    },

    deleteContact: function( id ) {

        AppDispatcher.dispatch( {
            actionType: AppConstants.DELETE_CONTACT,
            id: id
        } );
    },

    addContact: function() {

        AppDispatcher.dispatch( {
            actionType: AppConstants.ADD_CONTACT
        } );
    },

    updateContact: function( id, property, newValue ) {
        AppDispatcher.dispatch( {
            actionType: AppConstants.UPDATE_CONTACT,
            id: id,
            options: {
                id: id,
                property: property,
                value: newValue
            }
        } );
    }
};