import React, { Component } from 'react';
export class SmaugControl extends Component {
    render() {
        return (
            <div style={{padding: '5px', width: '25%', float:'left', borderStyle:'solid', borderColor: 'black'}}>
                <p>Smaug</p>
                <button>Attack</button>
                <button>Heal</button>
            </div>
        );
    }
}