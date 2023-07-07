import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import cors from "cors"
import user from "./routes.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.get("/", (req, res) => {
  res.json({ Hi: "Hello World" });
});

app.use("/api", user);
const client = new DynamoDBClient({
  region: "ap-south-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
// const docClient = DynamoDBDocumentClient.from(client);
// const command = new CreateTableCommand({
//   TableName: "EspressoDrinks",
//   AttributeDefinitions: [
//     {
//       AttributeName: "DrinkName",
//       AttributeType: "S",
//     },
//   ],
//   KeySchema: [
//     {
//       AttributeName: "DrinkName",
//       KeyType: "HASH",
//     },
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 1,
//     WriteCapacityUnits: 1,
//   },
// });

// const table = await client.send(command)

// const command = new CreateTableCommand(input);
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Port listening on ${PORT}`);
});
