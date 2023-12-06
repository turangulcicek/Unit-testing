import React, { useState } from "react";

const Form = () => {
  const [isHover, setIsover] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="my-5 d-flex justify-content-center align-items-center gap-3 ">
      <input
        onClick={() => setIsChecked(!isChecked)}
        className="form-check-input mb-1"
        id="terms"
        type="checkbox"
      />
      <div className="terms-box ">
        <p style={{ visibility: !isHover && "hidden" }}>
          Size gerçekten bir şey teslim etmeyeceğiz
        </p>
        <label htmlFor="terms">Koşulları okudum, kabul ediyorum</label>
      </div>
      <button
        disabled={!isChecked}
        onMouseLeave={() => setIsover(false)}
        onMouseEnter={() => setIsover(true)}
        className={`btn btn-primary ${!isChecked && "disabled"}`}
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
