//Reference: https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript

  const btn = document.querySelector("#submitFormBtn");

  //function collects/sends data
  function sendData(data) { //gets data
    console.log("Sending data");

    const XHR = new XMLHttpRequest();

    const urlEncodedDataPairs = [];

    // Turn the data object into an array of URL-encoded key/value pairs.
    for (const [name, value] of Object.entries(data)) {
      urlEncodedDataPairs.push(
        `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
      );
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to
    // the '+' character; matches the behavior of browser form submissions.
    const urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

    //successful data submission
    XHR.addEventListener("load", (event) => {
      alert("Data sent and response loaded!");
    });

    //error checking
    XHR.addEventListener("error", (event) => {
      alert("Oops! Something went wrong :(");
    });

    //request
    XHR.open("POST", "https://example.com/cors.php");

    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
    // end data.
    XHR.send(urlEncodedData);
  }
  //once button has been pressed
  btn.addEventListener("click", (event) => {
    event.preventDefault(); //get the values of each input
    const firstName = document.querySelector("#firstname").value;
    const lastName = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    sendData({ firstName, lastName, email, message }); //data = the values of firstname, last name, email and message
  });

