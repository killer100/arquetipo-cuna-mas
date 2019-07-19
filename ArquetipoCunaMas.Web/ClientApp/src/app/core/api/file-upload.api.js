import axios from "axios";

/**
 *
 * @param {any[]} files
 */
export const UploadTempFile = files => {
  const formData = new FormData();
  files.forEach((file, i) => {
    formData.append(`files`, file);
  });

  const headers = { "Content-Type": "multipart/form-data" };

  return axios
    .post("/api/file/upload", formData, { headers })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });
};
