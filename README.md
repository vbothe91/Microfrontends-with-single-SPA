# Microfrontends-with-single-SPA

In this repository, we are working on single spa microfrontends implementation.

With initial changes we created our first microfrontend with root config and React. 

## Steps to create root config application
1. Install create-single-spa package globally from official website.
2. Create your root config file
    - Use create-signle-spa command and select "create root config" option.
3. Go to your root config project and run application (npm install)
    - It will run your application on specified port. Mostly you will see Welcome page. 

## Steps to create first microfrontends
1. Use "create-single-spa" command and select app type as "application/parcel".
2. Go to created folder and do npm install. 
3. Start your application with "start:standalone" command (Check package.json)
4. It will run your application.

## How to do integration
1. Look for special js file in child MFE (Go to network tab and see file with name "organisation-name-project-name.js)
2. Copy path of that file and add in import-map in root application (src/index.ejs) as key value pair.
    - Example - "@frontenddevs/react-mfe": "http://localhost:8081/frontenddevs-react-mfe.js"
3. You will get above key from child app package.json file (name) or its simple @organisation-name/project-name.
4. Finally add this key in "*-layout.html" file in same folder under "application" element with name attribute.
    - Example - &lt;application name="@frontenddevs/react-mfe"&gt;&lt;/application&gt;
