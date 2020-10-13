[![Build Status](https://travis-ci.org/chishanw/cs3219-taskB.svg?branch=master)](https://travis-ci.org/chishanw/cs3219-taskB)

# CS3219 Task B

## Task B1:
1. Ensure MongoDB is installed on your machine (environment variables set up as well).
2. Open a terminal and run `mongod`
3. The DB has been successfully set up if you see a message along the lines of “Listening for connections”/ “[initandlisten]”
4. Open another terminal and navigate to the project directory.
5. Run `npm install` to install dependencies.
6. Run `nodemon index` to start the app.

## Task B2:
* Tests have been written in test.js, using Mocha and Chai.
* To manually run tests, run `npm test`.
* The tests make API calls for POST, PUT, GET and DELETE requests
* I set up TravisCI for the project, where tests are automatically run.
* The build log for the master branch can be viewed here, where you can see the tests running and passing: https://travis-ci.org/github/chishanw/cs3219-taskB/builds/724990230.

## Task B3:
* Code for this is contained in branch task_b3.
* I deployed to AWS Lambda, with a MongoDB Atlas cluster. Deployed app can be found here: https://t0ytqu2r81.execute-api.us-east-2.amazonaws.com/production/contacts/.
* The latest build for the task_b3 branch can be viewed here, where you can see the automatic deployment occur: https://travis-ci.org/github/chishanw/cs3219-taskB/builds/728896313.

## Task B4:
1. Switch to branch task_b4.
2. Change directory by running `cd frontend`.
3. Run `npm install`.
4. Run `npm run serve`.
5. Visit http://localhost:8080/ to see the Vue app.

Note: Components and containers are all styled using Bootstrap Vue.

**Viewing Contacts (GET):**
1. A list of all contacts should be immediately visible when you visit localhost:8080.
2. All details of each contact will be visible in a card.

**Creating A Contact (POST):**
1. Click on the link “Create Contact” in the navigation bar.
2. Fill in all the fields and click the Submit button.
3. After the spinner loads for a while, the form will submit and clear the fields.
4. To view the new contact, navigate back to the viewing contacts page by clicking “View Contacts” in the navigation bar.

**Editing A Contact (PUT):**
1. In the View Contacts page, you can see all the individual contacts displayed on the same page.
2. In the card containing the contact you wish to edit, click the Edit button.
3. You will be redirected to a new edit page, with the text fields pre-filled out with the current information of the contact.
4. After editing the contact information, press Submit and wait for the loading to be complete.
5. You can view the updated contact information by navigating back to the View Contacts page.

**Deleting A Contact (DELETE):**
1. In the View Contacts page, you can see all the individual contacts displayed on the same page.
2. In the card containing the contact you wish to edit, click the Delete button.
3. Wait for a few seconds as the request is being processed.
4. Once the contact has been successfully deleted, the contact will disappear from the View Contacts page.
