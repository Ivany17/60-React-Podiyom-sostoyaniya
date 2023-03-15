import React, { Component } from 'react';

class UserCard extends Component {
    btnHandler(){

    }
    render() {
        const {user:{id, firstName, isSelected}} = this.props;
        const styles = {border: isSelected ? 'solid 3px pink' : undefined}
        return (
            <article style={styles}>
                <h2><span>{id}: </span>{firstName}</h2>
                <button onClick={this.btnHandler}>Select this user</button>
            </article>
        );
    }
}

export default UserCard;
