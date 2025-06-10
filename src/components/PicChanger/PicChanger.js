import React from "react";
import "./style.scss";
import { PicService } from "../../services/PicService.js";
import { LogService } from "../../services/LogService.js";
import { useShowCommonPopup } from "../../providers/ShowCommonPopupProvider.js";

const PicChanger = ({ pic, alt, onChange, blockPicker = false }) => {
  const showError = useShowCommonPopup();
  const picOnChoose = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file.type.includes("image")) throw new Error("it is not an image");
      onChange({
        base64: await PicService.getBase64(file),
        file,
      });
    } catch (e) {
      LogService.log("pic saving error", e, showError);
    }
  };

  return (
    <div className="PicChanger">
      {!blockPicker && (
        <input
          accept="png, jpeg, jpg, webp, svg"
          id="contained-button-file"
          onChange={picOnChoose}
          type="file"
        />
      )}

      <label htmlFor="contained-button-file" className="clickable">
        <img className="PicChanger__pic" src={pic} alt={alt} />
      </label>
    </div>
  );
};

export default PicChanger;
