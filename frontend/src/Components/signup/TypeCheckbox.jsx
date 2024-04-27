import React from "react";
import "./Checkbox.css";

const TypeCheckbox = ({ onCheckBoxChange, selectedType }) => {
    return (
        <div className="checkbox-container">
            <label className={`inline-flex items-center cursor-pointer ${selectedType === "individual" ? "text-blue-500" : "text-gray-700"}`}>
                <input
                    type="radio"
                    className="checkbox"
                    checked={selectedType === "individual"}
                    onChange={() => onCheckBoxChange("individual")}
                />
                <span className="label-text">Individual</span>
            </label>

            <label className={`inline-flex items-center cursor-pointer ${selectedType === "organization" ? "text-blue-500" : "text-gray-700"} organization-label`}>
                <input
                    type="radio"
                    className="checkbox"
                    checked={selectedType === "organization"}
                    onChange={() => onCheckBoxChange("organization")}
                />
                <span className="label-text">Organization</span>
            </label>
        </div>
    );
};

export default TypeCheckbox;
