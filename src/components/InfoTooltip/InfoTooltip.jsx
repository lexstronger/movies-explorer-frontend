import React from "react";
import success from "../../images/success.svg";
import fail from "../../images/fail.svg";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, onOverlayClose, isStatus, alt}) {
  return (
    <div
      className={`window ${isOpen ? "window_opened" : ""}`}
      onMouseDown={onOverlayClose}
    >
      <div className="window__container window__response">
        <button
          className="window__cross"
          type="button"
          aria-label="Закрыть попап"
          onClick={onClose}
        />
        <img className="window__icon" src={isStatus.status ? success : fail} alt={alt}/>
        <h3 className="window__heading window__heading-info">
          {isStatus.message}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;