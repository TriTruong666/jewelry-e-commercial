import { useEffect, useState } from "react";
import "../../styles/input/input.css";
import Resizer from "react-image-file-resizer";

const InputImg = ({ name, handleGetImage, defaultInput }) => {
  const [preview, setPreview] = useState(defaultInput || null);

  useEffect(() => {
    setPreview(defaultInput);
  }, [defaultInput]);

  const resizeFile = (file) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "PNG",
      100,
      0,
      (uri) => {
        setPreview(uri);
        handleGetImage(uri); // resized new image uri
      },
      "base64",
      250,
      250
    );
  };
  return (
    <div className="input-img">
      <input
        name={name}
        type="file"
        id="img-input"
        onChange={(e) => resizeFile(e.target.files[0])}
      />
      {preview ? (
        <label htmlFor="img-input">
          <img src={preview} alt="" />
        </label>
      ) : (
        <label className="label" htmlFor="img-input">
          <span className="material-symbols-outlined">add_photo_alternate</span>
          <p>Choose 1 picture of product</p>
        </label>
      )}
    </div>
  );
};

export default InputImg;
