/** @jsx React.Dom */

'use strict';

var React = require( 'react' ),
    cx = require( 'classnames' ),
    AppActions = require( '../actions/actions.js' );

module.exports = React.createClass({

	propTypes: {

        id: React.PropTypes.number.isRequired,
		firstName: React.PropTypes.string.isRequired,
		secondName: React.PropTypes.string
	},

    _choseContact: function() {
        AppActions.chooseContact( this.props.id );
    },

	render: function () {

		return (
            <li className = { cx( {
                    'CA-list__item': true,
                    'CA-list__item_chosen': this.props.selected
                } ) }
                onClick = { this._choseContact } >
                <div> { this.props.firstName + " " + this.props.secondName } </div>
            </li>
		);
	}
});