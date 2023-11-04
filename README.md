TODOs
1. how enviroment directory should look like

1. update dependecies
2. save entity page for admin
3. if user logged in without account show a dumb page
3. install material UI
3. base user model
4. base entity model
5. services for firebase
6. split them by level
7. deploy install with firebase console
8. user can log in after admin approves
9. captcha
10. landing page
7. admin panel
8. base user
6. how to create a user?
7. user sends request to create a user to admin, admin mail to env
8. tests?



What is inside
React, material ui, firebase auth, firebase firestore

  TODO add validation on Entity
TODO login via google and admin show users that are not in DB
TODO my contacts on the landing page
create a model and extend this from EntityModel
Use firestore
setup rules

Steps to launch the project:
1. Create a firebase project
2. Create Auth project inside your firebase project and set providers (email and Google)
3. Create web app in your firebase project and get credentials
   1. Put your credentials in .env.production and puut this file on the root
      REACT_APP_FIREBASE_API_KEY=-----
      REACT_APP_FIREBASE_AUTH_DOMAIN=----
      REACT_APP_PROJECT_ID=----
      REACT_APP_FIREBASE_STORAGE_BUCKET=----
      REACT_APP_FIREBASE_API_ID=----
      REACT_APP_FIREBASE_SENDER_ID=------
   2. Create firestore database storage

 --current
4. Change title in index.html and favicons
5. change name in package.json
6. run script to create an admin
7. login and create a user
8. get a captcha token form Google and put it to the env