import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  console.log(files);

  return (
    <>
      <DropzoneArea
        onChange={_files => setFiles(_files)}
        showAlerts={false}
		  showPreviewsInDropzone={false}
		  showPreviews={true}
      />
    </>
  );
};

export default FileUploader;
