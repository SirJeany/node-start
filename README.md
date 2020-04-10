# node-start
Nate's introduction to Node

# Setup:
* Fork. (If you want a different name then clone first, create your own repo and copy my files in there)
* Clone repo to local.
* Open bash in newly cloned file.
* run: npm install

## To start the app and its database componenet:
* DB> json-server --watch db.json --port 8000
* APP> nodemon -start

## View the app:
Browser: localhost::3000

# Notes/Issues:
* Add a pokemon: Will need to refresh the homepage after adding it
* Deleting a pokemon:
    * We remove the pokemon from the Pokemon database, but we fail to update the rest of the pokemon id's. This will become a problem when we try add another pokemon: The amount of objects in Pokemon and 'id' wont match up.
    * What we would like to see is that if we delete evie (number 9), then number 10 should become the new number 9, and so on. 
    * All pokes from that point should move one id down essentially.

