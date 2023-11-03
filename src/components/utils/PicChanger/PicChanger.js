import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { LogService } from "../../../services/LogService";
import { PicService } from "../../../services/PicService";

const PicChanger = ({ pic, alt, onChange }) => {
  const picOnChoose = async (e) => {
    try {
      const file = e.target.files[0];
      onChange({
        base64: await PicService.getBase64(file),
        file,
      });
    } catch (e) {
      LogService.showAndLogError("pic saving error", e);
    }
  };

  return (
    <div className="PicChanger">
      <input
        accept="image/*"
        id="contained-button-file"
        onChange={picOnChoose}
        type="file"
      />
      <label htmlFor="contained-button-file" className="clickable">
        <img className="PicChanger__pic" src={pic} alt={alt} />
      </label>
    </div>
  );
};

PicChanger.propTypes = {
  pic: PropTypes.string,
  alt: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PicChanger;
