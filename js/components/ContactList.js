/** @jsx React.Dom */

"use strict";

var React = require("react"),
    ContactItem = require("./ContactItem.js");

module.exports = React.createClass({

	getInitialState: function() {

		return {
			activeItem: 0
		};
	},
	render: function render() {

		return (
			<ul className = 'CA-list'>
                {
                    this.props.contacts.map( ( function ( contact ) {
                        return <ContactItem firstName ={ contact.firstName}
                                            secondName = { contact.secondName }
                                            id = { contact.id }
                                            selected = { this.props.currentContact === contact.id }
                        />;
                    } ).bind( this ) )
                }
            </ul>
		);
	}
});