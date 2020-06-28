using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace ProjectTest_FEv2.Models
{
    public class ProjectTestWrapper
    {
        private static string _token = null;
        private static string _baseUrl = null;
        //private static LogManager Logger
        //{
        //    get
        //    {
        //        return LogManager.Instance;
        //    }
        //}

        public static void SetToken(string token)
        {
            _token = token;
        }

        public static void SetBaseUrl(string baseUrl)
        {
            _baseUrl = baseUrl;
        }

        private static JsonSerializerSettings JsonSettings()
        {

            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.Converters.Add(new StringEnumConverter());
            settings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            return settings;
        }

        /// <summary>
        /// Delete
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="url"></param>
        /// <returns></returns>
        public static T Delete<T>(string url)
        {

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(_baseUrl+url);
            client.DefaultRequestHeaders.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _token);
            //client.DefaultRequestHeaders.Add("Language", HttpContext..Session["SelectedLanguage"]?.ToString() ?? "en");
           // client.DefaultRequestHeaders.Referrer = HttpContext.Request.UrlReferrer;

            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Delete, url);

            client.Timeout = TimeSpan.FromHours(2);
            var result = client.SendAsync(request).Result;

            string resultStr = string.Empty;
            using (HttpContent content = result.Content)
                resultStr = content.ReadAsStringAsync().Result;

            if (result.IsSuccessStatusCode)
                return JsonConvert.DeserializeObject<T>(resultStr, JsonSettings());
            else
            {
                if (!string.IsNullOrEmpty(resultStr))
                {
                    throw new Exception(JsonConvert.SerializeObject(resultStr));
                }
                return default(T);
            }
        }

        /// <summary>
        /// Put
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="url"></param>
        /// <param name="parameter"></param>
        /// <param name="contentType"></param>
        /// <returns></returns>
        public static T Put<T>(string url, object parameter, string contentType = "application/json")
        {
            string schema = "Bearer";

            string p = contentType == "application/json" ? JsonConvert.SerializeObject(parameter, JsonSettings()) : parameter.ToString();

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(_baseUrl + url);
            client.DefaultRequestHeaders.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(contentType));
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(schema, _token);
            //client.DefaultRequestHeaders.Add("Language", HttpContext.Current.Session["SelectedLanguage"]?.ToString() ?? "en");
            //client.DefaultRequestHeaders.Referrer = HttpContext.Current.Request.UrlReferrer;

            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Put, url);
            request.Content = new StringContent(p, Encoding.UTF8, contentType);

            client.Timeout = TimeSpan.FromHours(2);
            var result = client.SendAsync(request).Result;

            string resultStr = string.Empty;
            using (HttpContent content = result.Content)
                resultStr = content.ReadAsStringAsync().Result;

            if (result.IsSuccessStatusCode)
                return JsonConvert.DeserializeObject<T>(resultStr, JsonSettings());
            else
            {
                if (!string.IsNullOrEmpty(resultStr))
                {
                    throw new Exception(JsonConvert.SerializeObject(resultStr));
                }

                if (result.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                {
                    throw new UnauthorizedAccessException();
                }
                return default(T);
            }
        }

        /// <summary>
        /// Post
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="url"></param>
        /// <param name="parameter"></param>
        /// <param name="contentType"></param>
        /// <param name="isToken"></param>
        /// <returns></returns>
        public static T Post<T>(string url, object parameter, string contentType = "application/json", bool isToken = false)
        {

            string p = contentType == "application/json" ? JsonConvert.SerializeObject(parameter, JsonSettings()) : parameter.ToString();
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(_baseUrl + url);
            client.DefaultRequestHeaders.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(contentType));
            if(!isToken)
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _token);
            //client.DefaultRequestHeaders.Add("Language", HttpContext.Current.Session["SelectedLanguage"]?.ToString() ?? "en");
            //client.DefaultRequestHeaders.Referrer = HttpContext.Current.Request.UrlReferrer;

            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, url);
            request.Content = new StringContent(p, Encoding.UTF8, contentType);

            client.Timeout = TimeSpan.FromHours(2);
            var result = client.SendAsync(request).Result;

            string resultStr = string.Empty;
            using (HttpContent content = result.Content)
                resultStr = content.ReadAsStringAsync().Result;


            if (!result.IsSuccessStatusCode)
            {
                if (!string.IsNullOrEmpty(resultStr))
                {
                    throw new Exception(JsonConvert.SerializeObject(resultStr));
                }
                if(result.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                {
                    throw new UnauthorizedAccessException();
                }

                return default(T);
            }
            else
            {
                if (isToken)
                {
                    resultStr = Regex.Replace(resultStr, @"\\", "");
                    resultStr = Regex.Replace(resultStr, @"""{", "{");
                    resultStr = Regex.Replace(resultStr, @"}""", "}");
                }
                return JsonConvert.DeserializeObject<T>(resultStr, JsonSettings());
            }
        }

        /// <summary>
        /// Get
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="url"></param>
        /// <returns></returns>
        public static T Get<T>(string url, object parameter = null)
        {
          
            string schema = "Bearer";


            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(_baseUrl + url);
            client.DefaultRequestHeaders.Clear();
            //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(schema, _token);
            //client.DefaultRequestHeaders.Add("Language", HttpContext.Current.Session["SelectedLanguage"]?.ToString() ?? "en");
            //client.DefaultRequestHeaders.Referrer = HttpContext.Current.Request.UrlReferrer;

            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, url);
            if (parameter != null)
            {
                string p = JsonConvert.SerializeObject(parameter, JsonSettings());
                request.Content = new StringContent(p, Encoding.UTF8, "application/json");
            }

            client.Timeout = TimeSpan.FromHours(2);
            var result = client.SendAsync(request).Result;

            string resultStr = string.Empty;
            using (HttpContent content = result.Content)
                resultStr = content.ReadAsStringAsync().Result;

            if (result.IsSuccessStatusCode)
                return JsonConvert.DeserializeObject<T>(resultStr, JsonSettings());
            else
            {
                if (!string.IsNullOrEmpty(resultStr))
                {
                    throw new Exception(JsonConvert.SerializeObject(resultStr));
                }

                if (result.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                {
                    throw new UnauthorizedAccessException();
                }
                return default(T);
            }
        }
    }
}
