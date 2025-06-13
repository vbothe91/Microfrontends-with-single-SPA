# Microfrontends-with-single-SPA

In this repository, we are working on single spa microfrontends implementation (React, Vue and Angular).

## Youtube Videos
1. https://youtu.be/pp7feFgUn9U?feature=shared (Microfrontends Basics, Single SPA basics, created first app with root config and react microfrontends)
2. (Vue js integration using Single SPA)
3. (Angular integration using Single SPA)

## Steps to create root config application
1. Install create-single-spa package globally from official website.
2. Create your root config file
    - Use create-signle-spa command and select "create root config" option.
3. Go to your root config project and run application (npm install)
    - It will run your application on specified port. Mostly you will see Welcome page. 

## Steps to create first microfrontends (React)
1. Use "create-single-spa" command and select app type as "application/parcel".
2. Go to created folder and do npm install. 
3. Start your application with "start:standalone" command (Check package.json)
4. It will run your application.

## Steps to create second microfrontends (Vue)
1. Use "create-single-spa" command and select app type as "application/parcel".
2. We might face issue of security node js patches (Please see my youtube video for same)
3. It will install vue cli and presets
4. Go to created folder and do npm install. 
5. Start your application with "npm start" command (Check package.json)
6. It will run your application.
7. To run application in standalone mode, we need webpack configraution changes.

## How to do integration
1. Look for special js file in child MFE (Go to network tab and see file with name "organisation-name-project-name.js)
2. Copy path of that file and add in import-map in root application (src/index.ejs) as key value pair.
    - Example - "@frontenddevs/react-mfe": "http://localhost:8081/frontenddevs-react-mfe.js"
3. You will get above key from child app package.json file (name) or its simple @organisation-name/project-name.
4. Finally add this key in "*-layout.html" file in same folder under "application" element with name attribute.
    - Example - &lt;application name="@frontenddevs/react-mfe"&gt;&lt;/application&gt;
