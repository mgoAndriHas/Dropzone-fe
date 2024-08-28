import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import axios from "axios";

export default function UploadFile() {
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  const handleSubmit = (files, allFiles) => {
    // console.log(
    //   "handleSubmit",
    //   files.map((f) => f.meta)
    // );
    allFiles.forEach((file) => {
      console.log("handleSubmit", file);
      const formData = new FormData();
      formData.append("file", file.file);
      axios
        .post("http://54.179.131.211/profile", formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      file.remove();
    });
  };
  return (
    <>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*"
      />
    </>
  );
}
