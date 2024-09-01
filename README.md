
# ReachInBox-Frontend

## Overview

This repository contains the code for Reachinbox frontend  App using React with javascript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Javascript
  - React
  - css
  

## Deployment

The application is deployed on netlify and can be accessed [here](https://reach-inbox-frontend.netlify.app/).

## Demo Video :- 

https://github.com/user-attachments/assets/2093a3bc-37c4-45f9-a168-42237a50f694

## Features 
   
- **User Authentication:** Secure login and logout functionality.

- **Get Emails:** Fetch and display a list of emails from the server.

- **Post (Send) Email:** Compose and send new emails.

- **Delete Email:** Remove unwanted emails from the inbox.


<h2>Endpoints</h2>
<h3>All Emails</h3>
<pre><code>GET {{baseurl}}/onebox/list </code></pre>

<h3>All Emails from Onebox</h3>
<pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

<h3>Add Onebox Mail</h3>
<pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

<h3>Delete Email</h3>
<pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

## Conclusion

The ReachInBox Frontend app offers core email management features in a simple React interface. It's a great starting point for further development. 
 

  