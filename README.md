# NHSBSA Assignment - Rajesh Kumar Yadav

Please follow the steps outlined below to get the server and client up and running.

## Introduction to the Project

A total of two projects, titled "Server" and "Client," are included in this solution. In this case, the client's project is a 'create-react-app,' which consists of a straightforward page with an input and a button. By clicking on the submit button, the user is able to make a request to the server on the network. The server verifies the request and responds to the client with the relevant response information.

## How to start server?

Select a terminal of your choosing and log in.

1. Before we can begin working on the server, we must first download all of the necessary dependencies for the server project. To begin the download, navigate to '/server' folder and type 'yarn'. this will download all dependencies.
2. To run all of the tests, use the 'yarn test' command in the same folder as the other tests.
3. Once all of the requirements have been downloaded, go to step 3. Execute the 'yarn dev' script on the server side.
4. Manually test the service by using the insomnia request collection to collect requests.

This will begin the server's operation, and you should see the message 'Listening on port 5000...'

## How to start client?

Open a second terminal window if necessary.

1: Navigate to the client folder, for example, '/client' folder, then type 'yarn' to download all of the required dependencies. 2. Launch the client by typing 'yarn start'. 3. The form may be found on the main page of the website 'http://localhost:8080/'.

### Requirements

1. Write a simple web application that uses the POST-redirect-GET pattern.
2. The web application should show a data entry page with a single text field and button for user interaction.
3. On receiving valid data the web application should show a simple success page.
4. The text field should be validated to a maximum of 10 characters.
5. The code handling POST-redirect-GET logic for valid and invalid data should be easily re-usable

### Acceptance Criteria

GIVEN a user has entered the text '0123456789'
WHEN the data is submitted
THEN the success page is shown

GIVEN a user has entered the text '0123456789A'
WHEN the data is submitted
THEN an error message is shown on the data entry page

GIVEN a user has submitted the text '0123456789A'
AND an error message has been displayed
WHEN the user refreshes the data entry page
THEN the same content is displayed without any error message
