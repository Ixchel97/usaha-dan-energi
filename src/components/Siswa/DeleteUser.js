import React from 'react';
import { BsTrash3 } from "react-icons/bs";

const DeleteUser = () => {

    const admin = require("react-admin");
    const serviceAccount = require("../../usaha-dan-energi-firebase-adminsdk.json"); 
    const databaseURL = "usaha-dan-energi.firebaseapp.com";

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: databaseURL
      });

      const deleteAllUsers = (nextPageToken) => {
        let uids = []
        admin
          .auth()
          .listUsers(100, nextPageToken)
          .then((listUsersResult) => {
            uids = uids.concat(listUsersResult.users.map((userRecord) => userRecord.uid))
            console.log(uids)
            if (listUsersResult.pageToken) {
              deleteAllUsers(listUsersResult.pageToken);
            }
          })
          .catch((error) => {
            console.log('Error listing users:', error);
          }).finally(() => {
            admin.auth().deleteUsers(uids)
          })
          return deleteAllUsers();
      };

      


  return (
    <div>
        <button onClick={deleteAllUsers}>
            <span><BsTrash3 size={20}/></span>
        </button>
    </div>
  )
}

export default DeleteUser