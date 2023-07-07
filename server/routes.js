import express from "express";
import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient, GetCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

// import { createOrUpdate, deleteUserById, getUserById, readAllUsers } from './db.js'

const router = express.Router();
const client = new DynamoDBClient({
  region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const docClient = DynamoDBDocumentClient.from(client);

//creates a normal user profile
router.post("/createuser", async (req, res) => {
  try {
    const type = req.body.usertype
    const comm = new PutCommand({
      TableName: "innerserenity_users",Item:req.body
    });

    const response = await docClient.send(comm);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

//creates a professional user
router.post("/createprofessional", async (req,res) => {
    try {
        const type = req.body.usertype
        const comm = new PutCommand({
          TableName: "innerserenity_professionals",Item:req.body
        });
    
        const response = await docClient.send(comm);
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(500).json({ msg: error });
      }
})


//to get all the users

router.get("/getusers", async (req,res) => {
    try {
        const command = new ScanCommand({
            Select: "ALL_ATTRIBUTES",
            TableName: "innerserenity_users"
          });
        
          const response = await docClient.send(command);
  res.status(200).json(response.Items)
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

//to get all professionals

router.get("/getprofessionals", async (req,res) => {
    try {
        const command = new ScanCommand({
            Select: "ALL_ATTRIBUTES",
            TableName: "innerserenity_professionals"
          });
        
          const response = await docClient.send(command);
  res.status(200).json(response.Items)
    } catch (error) {
        res.status(500).json({msg:error})
    }
})


//to get normal user by address
router.get("/getuser/:address", async (req,res) => {
    const {address:useraddress} = req.params
    try {
        const command = new GetCommand({
            TableName: "innerserenity_users",
            Key: {
              useraddress:useraddress
            }
          });
        
          const response = await docClient.send(command);
          res.status(200).json({response})
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

//to get professinal user by address
router.get("/getprofessional/:address", async (req,res) => {
    try {
        const {address:useraddress} = req.params;
        const command = new GetCommand({
            TableName: "innerserenity_professionals",
            Key: {
              useraddress:useraddress
            }
          });
        
          const response = await docClient.send(command);
          res.status(200).json({response})
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

//to initiate chat

// router.post("/updateuser", async (req, res) => {
//   try {
//     const command = new UpdateCommand({
//       TableName: "innerserenity_chat",
//       Key: {
//         useraddress: "12345",
//       },
//       UpdateExpression: "SET #oldchat = list_append(#oldchat, :new)",
//       ExpressionAttributeNames: {
//         "#oldchat" : "chat"
//       },
//       ExpressionAttributeValues: {
//         ":new": ["hello"]
//       },
//       ReturnValues: "UPDATED_NEW",
//     });
  
//     const response = await docClient.send(command);
//     // console.log(response);
//     res.status(201).json(response);
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// });


router.post("/updaterating/:address", async (req,res) => {
  try {
    const {address:useraddress} = req.params;
    const comm = new UpdateCommand({
      TableName: "innerserenity_professionals",
      Key: {
        useraddress: useraddress,
      },
      UpdateExpression: "set #oldrating = :newrating",
      ExpressionAttributeNames:{
          "#oldrating" : "totalRatings"
      },
      ExpressionAttributeValues: {
        ":newrating": req.body.totalRatings,
      },
      ReturnValues: "ALL_NEW",
    });
  
    const resp = await docClient.send(comm);


    const command = new UpdateCommand({
      TableName: "innerserenity_professionals",
      Key: {
        useraddress: useraddress,
      },
      UpdateExpression: "set #oldrating = :newrating",
      ExpressionAttributeNames:{
          "#oldrating" : "totalScore"
      },
      ExpressionAttributeValues: {
        ":newrating": req.body.totalScore,
      },
      ReturnValues: "ALL_NEW",
    });
    const response = await docClient.send(command);
    res.status(201).json(response);

  } catch(error) {
    res.status(500).json({ msg: error });
  }
})

export default router;
