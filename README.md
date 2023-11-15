TODO admin users creation via invites
TODO users page check
TODO forgot password check
TODO delete user
TODO check deploy on Digital ocean

What is inside
React 18, material ui, firebase auth, firebase firestore with NO SERVER CODE AT ALL.

## What you will get:

1. Admin panel
2. Mini Entity framework with ability to save to firebase
3. Ability to create an admin
4. Ability to create a user as an admin
5. 'Settings' and 'Home' page for users
6. User management for admins
7. Users can login via email ONLY in this version
8. Reset password functionality
9. Landing page template
10. Now it uses Firebase as a db, but there could be any requests to any DB via HTTP etc...


##  Steps to launch the project:

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
11. Log in as an admin and create a user
    1. admin creates a user with email 
    2. the system gives a link and gives it to user
    3. user can set a pass using this temporary link
12. Setup your landing page
13. Deploy to Digital Ocean or a similar service
14. Change DataBaseService according to your needs. It could be HTTP request to your server etc...

## Note
This project is just a start point, you can add yourself:
1. Typescript
2. Login with Google provider
3. Google recaptcha but it requires a server or cloud functions. Maybe Firebase reCAPTCHA?
4. Pagination in data queries
5. An email service for users creation
6. Better accessibility