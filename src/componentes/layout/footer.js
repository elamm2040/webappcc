import React from "react";
import { CalendarOutlined, SendOutlined, MessageOutlined, FileTextOutlined } from  '@ant-design/icons';
import './layout.css';
import Button from './main-button';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return (
        <div id="footer">
            <Button type="button" className="footerButton" text={props.button_text} color='green' function={props.function}></Button>
            <div className={`footMenu ${props.show == '0' ? "not_show" : ""}`}>
                <table className="iconsTable">
                    <tr>
                    <td style={{ paddingTop: '20px' }}>
                        <CalendarOutlined className="footerIcon" />
                        <p> Shifts </p>
                    </td>
                    <td style={{ paddingTop: '20px' }}>
                        <SendOutlined className="footerIcon" />
                        <p> Opportunities </p>
                    </td>
                    <td style={{ paddingTop: '20px' }}>
                        <MessageOutlined className="footerIcon" />
                        <p> Messages </p>
                    </td>
                    <td style={{ paddingTop: '20px' }}>
                        <FileTextOutlined className="footerIcon" />
                        <p> Compliance </p>
                    </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}