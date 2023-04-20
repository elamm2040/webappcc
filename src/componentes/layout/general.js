import React from "react";
import './layout.css';
import { CalendarOutlined, SendOutlined, MessageOutlined, FileTextOutlined } from  '@ant-design/icons';

export default function General(props) {
    const tableWidth = "100%";
    return (
        <>
            <header className="empAppHeader"></header>
            { props.children }
            <section className="fixedFooter">
                <button className="send_button"> Send for Approval </button>
                <div className="mobileSection">
                    <table width={ tableWidth }>
                        <tr>
                            <td style={{ paddingTop: '20px' }}>
                                <CalendarOutlined style={{ fontSize: '35px' }} />
                                <p>
                                    Shifts
                                </p>
                            </td>
                            <td style={{ paddingTop: '20px' }}>
                                <SendOutlined style={{ fontSize: '35px' }} />
                                <p>
                                    Opportunities
                                </p>
                            </td>
                            <td style={{ paddingTop: '20px' }}>
                                <MessageOutlined style={{ fontSize: '35px' }} />
                                <p>
                                    Messages
                                </p>
                            </td>
                            <td style={{ paddingTop: '20px' }}>
                                <FileTextOutlined style={{ fontSize: '35px' }} />
                                <p>
                                    Compliance
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </section>
        </>
    );
}