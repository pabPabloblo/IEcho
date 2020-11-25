# IEcho 

Is a test app that tells you the reverse of the text that gets entered and that text is validated as a palindrome.  

** NOTES: The input can include English and Spanish characters; other language characters or numbers are not accepted ** 

  

## Development 

### Prerequisites 

* NodeJS Must be installed 

* NPM must be installed 

### QuickStart 

1. Go to directory: ./server 

2. Execute: 

`npm install` 

3. To Run the Server: 

  * Without Reloading Execute: `npm run start` or 

  * With Reloading After Changes `npm run start-dev` 

4. Go to The Directory: ./client 

5. Execute: 

`npm install` 

6. To Run the Client Execute: 

  `npm run start` 

## Server 

The Server Is Built Leveraging Express.js framework 

### Testing & Linting 

testing frameworks used are mocha, chai and supertest for integration testing 

* To Run the Tests Located Under: ./server Run:  

  `npm run test`  

* To Lint Using Standard JS run: 

  `npm run lint` 

* To Fix Linting Errors Using Standard JS run: 

  `npm run fix` 

  

### Endpoints 

* GET 'iecho/'   

### HTTP Status 

#### OK Status 

* 200: Is the Expected Ok Response, The Body Will Include the Requested Resource 

#### Error Status 

* 400: Will Be Prompted When A Wrong Input Is Provided, The Body Will Include the Error 

* 500: Will Be Prompted When an Unhandled Error Happens, The Body Will Include the Error 

### Configuration 

* To Change A Setting Just Add or Update A File ".env" In The src Folder If You Are Doing Development or The Build or Deployment Folder If You Are About to Deploy. 

* Available Setting are: 

  * PORT<br/> 

contents of a .env file could be:<br/> 

`PORT=5059` 

### Deployment 

1. Go To the folder: ./server  

2. Execute:</br> 

`npm run build` 

3. Copy the Contents Generated In: ./server/build 

4. Deploy the Generated Artifacts into A Server with NodeJS installed to run Or Copy into A Container with NodeJS Installed 

  

  

## CLIENT 

### Testing 

Testing Is Done Trough Jest 

* To Run the Tests Located Under: ./client Run:  

  `npm run test`  

  

### Configuration 

* To Change A Setting Just Add or Update A File ".env" In The src Folder, Remember to Restart the Application If the Setting Was Changed During Development or Rebuild and Redeploy on Production 

* Available Setting are: 

  * REACT_APP_SERVER_URL 

  * REACT_APP_PAGE_SIZE<br/> 

contents of a .env file could be:<br/> 

`REACT_APP_SERVER_URL=http://localhost:5059`<br/> 

`REACT_APP_PAGE_SIZE=5` 

  

### Deployment 

1. Go To the folder: ./client  

2. Execute:</br> 

`npm run build` 

3. Copy the Contents Generated In: ./client/build 

4. Deploy the Generated Artifacts into A Static File Server or Copy into A Container with A Static File Server 