import express from "express";
import * as dotenv from "dotenv";

const app = express();

app.get("/", (_, res) => {
	res.send("Well done!");
});

app.listen(3000, () => {
	console.log("The application is listening on port 3000!");
});
