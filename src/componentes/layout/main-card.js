import React from "react";
import './layout.css';

export default function MainCard(props) {
    return(
        <div className={`shift_card ${props.approved ? 'approved' : ''} ${props.offline ? 'offline' : ''}`}>
            { props.children }
        </div>
    );
}