import React from "react";
import "./Modal.scss";

function GSTModalDesktop({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <div className="top-modal">
                    <h2>GST? No Worries!</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>

                <div className="Container">
                    <div className="notification">
                        <div className="info-icon">ⓘ</div>
                        <p>Starting 1st October 2023, 28% GST is being charged by Government on your deposits.</p>
                    </div>
                    <div className="gst-info">
                        <div className="thumbs-up">👍</div>
                        <p>100% Govt. GST paid by RummyCircle</p>
                    </div>
                </div>




                <div className="containers">
                    <div className="header">
                        <span className="header-text">GST benefits earned so far</span>
                        <span className="header-amount">₹1,10,000</span>
                    </div>
                    <div className="content">
                        <h2>How GST on deposit works?</h2>
                        <div className="middle-cost">
                            <p>You pay</p>
                            <p className="amount">₹1000</p>
                            <p className="inclussive">Inclusive of Govt. GST</p>
                        </div>

                        <div className="details">
                            <div className="detail">
                                <p className="detail-amount green">₹780</p>
                                <p className="detail-text">Goes to your wallet</p>
                            </div>
                            <div className="detail">
                                <p className="detail-amount red">₹220</p>
                                <p className="detail-text">Govt. GST on your deposit</p>
                            </div>
                        </div>
                        <div className="gst-paid">
                            {/* <FontAwesomeIcon icon={faThumbsUp} className="thumb-icon" /> */}
                            <div className="paid-left">
                                <p className="gst-amount">₹220</p>

                                <p className="gst-text">GST paid by <span className="bold">RummyCircle</span> on your behalf</p>
                            </div>
                            <div className="paid-right">
                                <p className="get-texts">You Get</p>
                                <p className="get-amounts">₹1000</p>
                                <p className="wallet-texts">in your wallet</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GSTModalDesktop;
