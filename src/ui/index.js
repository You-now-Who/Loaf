import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

// function download(filename, text) {
//   var element = document.createElement('a');
//   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//   element.setAttribute('download', filename);

//   element.style.display = 'none';
//   document.body.appendChild(element);

//   element.click();

//   document.body.removeChild(element);
// }

async function fetchHolidays(country, year = 2025) {
  // Get the window.CONFIG.API_KEY from https://calendarific.com/
  // const response = await fetch(window.CONFIG.API_ENDPOINT + "?"  + new URLSearchParams({
  //     api_key: window.CONFIG.API_KEY,
  //     country: country,
  //     year: year
  // }) );

  // const responseJson = await response.json();

  // Read responseJson from testData/response.json
  const response = await fetch("testData/response.json");
  const responseJson = await response.json();

  // const responseJson = {
  //   foo: "bar"
  // }

  console.log(responseJson);
  
}

addOnUISdk.ready.then(async () => {
  console.log("addOnUISdk is ready for use.");

  // Get the UI runtime.
  const { runtime } = addOnUISdk.instance;

  // Get the proxy object, which is required
  // to call the APIs defined in the Document Sandbox runtime
  // i.e., in the `code.js` file of this add-on.
  const sandboxProxy = await runtime.apiProxy("documentSandbox");

  const createRectangleButton = document.getElementById("createRectangle");
  createRectangleButton.addEventListener("click", async (event) => {
    await sandboxProxy.createRectangle();
    // console.log(apiKey)
    await fetchHolidays("IN");
    // download("hello.txt","This is the content of my file :)");
  });

  // Enable the button only when:
  // 1. `addOnUISdk` is ready,
  // 2. `sandboxProxy` is available, and
  // 3. `click` event listener is registered.
  createRectangleButton.disabled = false;
});
