$(document).ready(function () {
    const apiKey = " ";


        var apiURL =
            " https://api.astrocats.space/" +
           
            "&appid=" +
            apiKey;

        fetch(apiURL) // Fetch the data from the API
            .then((response) => response.json()) // Convert the response to JSON
            .then((data) => {
                  console.log(data);

            }
