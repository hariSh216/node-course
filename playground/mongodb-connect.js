const {MongoClient,ObjectID} = require('mongodb');
/*var obj=new ObjectID();
console.log(obj);*/
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");
   const db=client.db('TodoApp');
  /*  
    db.collection('Todos').insertOne({
        text: "hello world",
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log("unable to insert todo",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });*/

   /* db.collection('Users').insertOne({
        name:'harish',
        age:24
    }, (err, result) => {
        if (err) {
            return console.log("unable to insert user",err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    })*/

  /*  db.collection('Todos').find({_id: new ObjectID('5b057c70ce0cfafd1176808f')}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    }, (err, result) => {
        if (err) {
            return console.log("unable to insert user",err);
        }
    });*/

    /*db.collection('Todos').find().count().then((count)=>{
        console.log(`count is ${count}`);
    }, (err, result) => {
        if (err) {
            return console.log("unable to insert user",err);
        }
    });*/




    client.close();
});