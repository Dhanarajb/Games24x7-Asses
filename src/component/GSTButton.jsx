// src/components/Button.js
import React from "react";
import "./Button.scss";

function GSTButton({ onClick }) {
    return (
        <button className="open-modal-button" onClick={onClick}>
            Open Modal
        </button>
    );
}

export default GSTButton;
