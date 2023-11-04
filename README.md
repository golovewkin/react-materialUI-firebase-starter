What is inside
React 18, material ui, firebase auth, firebase firestore.

What do you get:
1. Admin panel
2. Mini Entity framework with ability to save to firebase
3. Ability to create a an admin
4. Ability to create a user as an admin
5. 'Settings' and 'Home' page for users
6. User management for admins
7. Users can login via email or with a Google account
8. Reset password functionality
9. Landing page

Steps to launch the project:
1. Clone the project
2. Create a firebase project
3. Create Auth project inside your firebase project and set providers (email and Google)
4. Create web app in your firebase project and get credentials
   1. Put your credentials in .env.production and put this file on the root
      REACT_APP_FIREBASE_API_KEY=-----
      REACT_APP_FIREBASE_AUTH_DOMAIN=----
      REACT_APP_PROJECT_ID=----
      REACT_APP_FIREBASE_STORAGE_BUCKET=----
      REACT_APP_FIREBASE_API_ID=----
      REACT_APP_FIREBASE_SENDER_ID=------
   2. Create firestore database storage and 'users' collection
   3. Setup firestore rules --current
5. Change title in index.html and favicons
6. Change name in package.json
7. Get a captcha token form Google and put it to the env
8. npm i
9. run script to create an admin
10. npm start:prod
11. Log in as an admin and create a user


TODO login via google and admin show users that are not in DB
TODO my contacts on the landing page
user sends request to create a user to admin, admin mail to env