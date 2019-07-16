using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System.IO;
using System.Web;
using System.Web.Mvc;

namespace ArquetipoCunaMas.Web.Helpers
{
    public static class HtmlExtensions
    {
        public static IHtmlString LoadSpaScripts(this HtmlHelper helper)
        {
            var html =
                File.ReadAllText(System.IO.Path.Combine(HttpContext.Current.Server.MapPath(@"~/"), "ClientApp/build", "index.html"));

            return helper.Raw(html);

        }
        public static string ToJson<T>(this T obj, bool includeNull = true)
        {
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                Converters = new JsonConverter[] { new StringEnumConverter() },
                NullValueHandling = includeNull ? NullValueHandling.Include : NullValueHandling.Ignore
            };
            return JsonConvert.SerializeObject(obj, settings);
        }
        public static IHtmlString JsonFor<T>(this HtmlHelper helper, T obj)
        {
            return helper.Raw(obj.ToJson()); 
        }
    }
}