# National-Parks-and-Forecast-Finder

GOAL: 

For this group project, we were tasked with creating a webpage from scratch that incorporated two different server-side APIs. We were given creative freedom in relation to what the site did, but there were some stipulations put in place besides the use of the APIs: 

- Must use a CSS Framework other than Bootstrap;
- Must use client-side storage to store presistent data;
- Must have a polished, mobile-first UI;
- Must meet good quality coding standards;
- Does NOT use alerts, confirms, or prompts;
- Must be deployed to GitHub Pages;
- Must be interactive;

Here is an image of the final product: 

![](assets/screencapture-file-Users-Marina-Desktop-Coding-Group-Projects-National-Parks-and-Forecast-Finder-National-Parks-and-Forecast-Finder-index-html-2021-03-29-12_35_20.png)


PROCESS:

We started tackling this project by first looking through a long list of server-side APIs. Besides looking for APIs that interested us, we also had to find two that could be somehow useful when used together. After bouncing around a few ideas, we landed on using the National Park Service API and the OpenWeather API. The idea was to create a National Parks Finder webpage where you could search by US state abbreviations and get back a list of that state's national parks (using the National Park Service API), as well as the 5-day forecast for each individual park (using the OpenWeather API). This was meant to be useful to users who want to visit a national park and properly plan for weather conditions. 

Once our idea for the webpage was solidified, we created a Git repository that we all had access to, with our own individual branches. 

We then built the HTML skeleton of the webpage, and did some intial styling in CSS. This gave us a clearer visual of what the website could look like, with the idea that we could style it and edit it further as we went along. At this stage, we also added all relevant relative paths to our HTML and CSS. 

We then started tackling the code in JavaScript. We first wrote out some pseudo-code, giving us an idea of the steps we needed to take in order to make the app functional. 

Once we had our initial variables in place, we added an event listener to our search button. In the listener's function, we fetched the data from the National Park Service API. When we got it to work so a list of parks displayed when the user searched a particular state, we went back to styling the park list items, making it visually pleasing. 

The next step was to incorporate the OpenWeather API into this function and have it connect to the National Park Service API, which was the part of coding that took the longest. There was a lot of brainstorming and trial-and-error at this phase, involving the logic and scope and syntax of the code. We eventually got it work, and each park item ended up with a "local weather" button that, when clicked, displays a 5-day forecast. 

At this point, we went back to CSS and added media query in order to make the webpage responsive. We also made sure that, when the page is refreshed, the last state searched appears in the input field. For this, we used client-side storage. 

Once functionality was solidly in place, we were able to focus on the appearance of the webpage and the addition of extra features. We made it so each park item on the list displays a park image. We also added park-related quotes into our header, which change every time the webpage is refreshed. 

The last few steps involved making sure that all of the assignment requirements were incorporated, as well as cleaning out the code and testing the app for functionality and user-friendliness.  

CONCLUSION: 

This assignment was unique to all of us in that it was the first time we worked as a group, as opposed to individually, to create a webpage. Because of this, we had the opportunity to use Git as it was intended: with different branches that were continuously merged and edited. We found that there is a learning curve to using Git's style of work-flow, but nothing that more practice can't make perfect. 

Brainstorming in a group format also gave us a better idea of what it would be like to be a coder in the work force. With more people, there are more ideas, which enhances the product as a whole. It is also valuable in that each person can learn from other group members, as everyone has their own style of coding and ways of debugging. 

The biggest challenge we faced came from adjusting the logic in JavaScript so that both APIs were incorporated appropriately. Once these bugs were fixed, we were able to stretch our creativity and make it into a webpage we were proud of. 

As with any product, there is always room for improvement. Given more time, we would have been able to expand on existing features as well as add new ones. Examples of possible expansions include adding additional search history storage, as well as more data to the park information. That being said, the National Parks Finder is already a useful and functional user tool. 

Here is a live link to the National Parks Finder:



