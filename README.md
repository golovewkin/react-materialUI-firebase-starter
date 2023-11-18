## When You need it
When you want to create a small project really quick

## What is inside
React 18, material ui, firebase auth, firebase firestore with NO SERVER CODE AT ALL.
View Updates are BEFORE the request. For users it looks like our app is really fast 😉

## What you will get:
1. Admin panel
2. Mini Entity framework with ability to save to firebase
3. Ability to create an admin
4. Ability to create a user as an admin
5. Admin can manage users (create, remove)
6. 'Settings' and 'Home' page for users
7. Users can send a request to get the access
8. Users can login via email ONLY in this version
9. Reset password functionality out of the box
10. Landing page template
11. Now it uses Firebase as a db, but there could be any requests to any DB via HTTP etc...


##  Steps to launch the project (Yes, it's a little complicated 🥺:

1. Clone the project
2. Create a firebase project
3. Create Auth project inside your firebase project and set providers (email and Google)
4. Create web app in your firebase project and get credentials
    1. Put your credentials in .env.example and rename it to .env
    2. Create firestore database storage
5. Change title in index.html and favicons
6. Change name in package.json
7. Get a server config from firebase (Project settings -> server config)
8. Put your credential to /config/config.json considering config.example.json as an example
9. run script to create an admin:
   1. node admin-create-script.js your-email 
   2. Get your admin data id
   3. Setup firestore rules (see firebase.rules.example)
10. npm start
11. How to create a user (3 ways)
    1. Admin creates a user via script (node user-create-script.js user-email)
    2. Via a user request
       1. User sends a request
       2. Admin approves it
       3. Admin creates a user via script (node user-create-script.js user-email)
       4. Admin send credentials to a user (any way)
    3. Via an admin invite (the most dangerous, doesn't work right now because of Firebase restrictions)
       1. Admin creates an invite
       2. It gives you a link
       3. Admin should give it to the user
       4. User can create an account with this link
12. Setup your landing page
13. Deploy to Digital Ocean or a similar service
14. Change DataBaseService according to your needs. It could be HTTP request to your server etc...

## Note
This project is just a starting point, you can add yourself:
1. Typescript
2. Login with Google provider
3. Google recaptcha but it requires a server or cloud functions. Maybe Firebase reCAPTCHA?
4. Pagination in data queries
5. An email service for users creation
6. Better accessibility