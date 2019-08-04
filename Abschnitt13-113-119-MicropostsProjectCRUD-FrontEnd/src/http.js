
/**
* EasyHTTP Library: Using Fetch, promises and arrow functions
* Library for making HTTP requests
*
* @version 2.0.0
* @author XXXX YYYY
* @license MIT
*
*/

class EasyHTTP {
  //  MAKE an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // MAKE an HTTP POST Request
  async post(url, data) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const resData = await response.json();
      return resData;
  }

 // Make an HTTP Put Request
 async put(url, data) {
    const response = await fetch(url,{
       method: "PUT",
       headers: {
         "Content-type": "application/json"
       },
       body: JSON.stringify(data)
   })
   const resData = await response.json();
   return resData;
 }

 // Make an HTTP Delete Request
 async delete(url) {
   const response = await fetch(url, {
     method: "DELETE",
     headers: {
       "Content-type": "application/json"
     }
   })
   const resData = await "resource delted";
   return resData;

 }
}

export const http = new EasyHTTP();
