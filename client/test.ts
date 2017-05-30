// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
// Finally, start Karma to run the tests.
__karma__.start();

const router;
const currentUser;
const Users;
const Item;

router.get('/getData', (req,res) => {

  if(!currentUser){//User is not logged in
    return res.status(404).send("UserName");
  }

  Users.findOne({UserName: currentUser})
    .then( doc => {
      const items = doc.Items;
      const listOfItems = [];
      items.forEach( item => {
        listOfItems.push(item);
      })
      res.send({list: listOfItems});
    });
})

router.delete('/deleteItem', (req, res) => {

  if (!currentUser) {
    return res.status(404).send('UserName');
  }
  const itemToDelete = req.body;

  Users.findOneAndUpdate(
    {UserName: currentUser},
    {$pull:{Items: {Name: itemToDelete.Name}}},
    (err, data) => {
      if(err) {
        console.log("error");
        return res.status(500).json({'error' : 'error in deleting address'});
      }else{
        console.log("Deleted "+req.body.Name+" from list.");
        res.end('{"success" : "Delete item Successfully", "status" : 200}');
      }
    }
  );
})
router.post('/addItem', (req, res) => {

  const item = req.body;

  if (!currentUser) {

    Users.findById(currentUser, (err, result) =>{
      if (result) {
        const newItem = new Item(item);
        const newitem = {
          _id: newItem._id,
          name: item.Name
        }

        result.Items.push(newitem);
        result.save();
        res.end('{"success" : "Added Item Successfully", "status" : 200}');
      }

    });
  }

});
