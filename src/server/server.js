const express = require('express');
import cors from 'cors';
import { connectDB } from './connect-db';
import './initialize-db';
import { authenticationRoute } from './authenticate';

let app = express();
let port = 3000;


app.listen(port, () => console.log(`App listening at http://localhost:${port}\``));

/*
app.get('/', (req, res) => {
    res.send("Hello world");
})*/

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended: true})
);

authenticationRoute(app);

export const addNewTask = async (task)=>{
    let db = await connectDB();
    let collection = db.collection('tasks');
    await collection.insertOne(task);
};

export const updateTask = async (task)=>{
    let {id, group, isComplete, name} = task;
    let db = await connectDB();
    let collection = db.collection('tasks');
    if (group) {
        await collection.updateOne({id}, {$set: {group}})
    }
    if (isComplete !== undefined) {
        await collection.updateOne({id}, {$set: {isComplete}})
    }
    if (name) {
        await collection.updateOne({id}, {$set: {name}})
    }
};

app.post('/task/new', async (req, res) =>{
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send();
});

app.post('/task/update', async (req, res) =>{
    let task = req.body.task;
    await updateTask(task);
    res.status(200).send();
});

//Put handling for errors like not being able to find id with catch block