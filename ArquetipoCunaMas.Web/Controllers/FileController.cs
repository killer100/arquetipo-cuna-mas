using ArquetipoCunaMas.Web.Controllers.Base;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace ArquetipoCunaMas.Web.Controllers
{
    public class FileController : BaseController
    {

        public FileController()
        {
        }

        // GET: File
        [HttpPost]
        public ActionResult Upload(List<HttpPostedFileBase> files)
        {


            string fileserver = this.GetFileServer();

            string path = String.Format("{0}/{1}", fileserver, "_temp");
            string newFilename = String.Empty;

            var errors = "";
            return this.TryCatch(() =>
            {
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);

                foreach (var file in files)
                {

                    var size = file.ContentLength;
                    var extension = Path.GetExtension(file.FileName);

                    var error = this.ValidateFile(size, extension);

                    if (!String.IsNullOrEmpty(errors))
                    {
                        errors += $"- {error}";
                    }
                };

                if (!String.IsNullOrEmpty(errors))
                {
                    Response.StatusCode = 400;
                    return this.JsonResponse(errors);
                }

                List<FileTempResponse> filesReponse = new List<FileTempResponse>();

                foreach (var file in files)
                {
                    var size = file.ContentLength;
                    var extension = Path.GetExtension(file.FileName);
                    var fileName = Path.GetFileNameWithoutExtension(file.FileName);
                    fileName = string.Concat(fileName.Split(' '));
                    fileName = Regex.Replace(fileName, "[^a-zA-Z0-9% ._]", string.Empty).ToLower();
                    newFilename = string.Format("{0}_{1}{2}", Path.GetRandomFileName(), fileName, extension);
                    file.SaveAs(Path.Combine(path, newFilename));
                    filesReponse.Add(new FileTempResponse
                    {
                        name = file.FileName,
                        tempName = newFilename
                    });
                }

                //new_filename = Path.ChangeExtension(new_filename, extension);        

                return this.JsonResponse("Archivo subido", new { files = filesReponse });
            });

        }
    }

    public class FileTempResponse
    {
        public string name { get; set; }
        public string tempName { get; set; }
    }
}