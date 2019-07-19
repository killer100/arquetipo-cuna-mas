using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ArquetipoCunaMas.Web.Controllers.Base
{
    public class BaseController : Controller
    {
        // GET: Base
        public ActionResult JsonResponse(string msg = null, Object data = null, string internalMsg = "", Object errors = null)
        {
            var response = new
            {
                msg,
                data,
                internalMsg,
                errors
            };

            return Json(response, JsonRequestBehavior.AllowGet);

        }
        // GET: Base
        public ActionResult TryCatch(Func<ActionResult> action)
        {
            try
            {
                return action();
            }
            catch (HttpException e)
            {
                Response.StatusCode = 400;
                return this.JsonResponse("", null, e.Message, "Ocurrió un error interno");
            }
            catch (Exception e)
            {
                Response.StatusCode = 500;
                return this.JsonResponse(e.Message, null, e.Message);
            }
        }

        protected string ValidateFile(int size, string extension)
        {
            string msg = String.Empty;
            string[] extensiones = { ".pdf" };

            if (size >= (20 * 1024 * 1024))
            {
                msg = "El archivo debe tener como máximo 20MB en tamaño.";
            }
            else if (!extensiones.Contains(extension))
            {
                //msg = "Sólo es permitido archivos del tipo .doc, .docx, .pdf, .jpg";
                msg = "Sólo se permiten archivos del tipo .pdf";
            }

            return msg;
        }
        protected string GetFileServer()
        {
            string fileserver = String.Empty;
            bool useFileserver = Convert.ToBoolean(System.Configuration.ConfigurationManager.AppSettings["useFileServer"].ToString());
            if (useFileserver)
                fileserver = System.Configuration.ConfigurationManager.AppSettings["fileServer"].ToString();
            else
                fileserver = Server.MapPath("~/Uploads");

            return fileserver;
        }

    }
}