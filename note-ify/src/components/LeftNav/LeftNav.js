import React, { Component } from 'react';
import './index.css'
class LeftNav extends Component {
    render() {
        return (
            <div className='nav_container'>
                <div>
                    <h1 className='nav_header'>Lambda Notes</h1>
                </div>
                <div classNames='nav_buttons_container'>
                    <div className='nav_button'>Veiw Your Notes</div>
                    <div className='nav_button'>+ Create Your Notes</div>
                </div>
            </div>
        );
    }
}

export default LeftNav;