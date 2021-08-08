import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const PORT: number = parseInt(process.env["PORT"] as string);
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => {
	res.send("Well done!");
});

app.listen(() => {
	console.log(`Listening on port ${PORT}`);
});

// development error handler
// will print stacktrace
if (process.env["NODE_ENV"] === "development") {
	app.use(function (
		err: Error,
		req: Request,
		res: Response,
		next: NextFunction
	) {
		console.log(err);

		res.status(500).send("Internal Server Error");
	});
} else {
	// production error handler
	// no stacktraces leaked to user
	app.use(function (
		err: Error,
		req: Request,
		res: Response,
		next: NextFunction
	) {
		res.status(500).send("Internal Server Error");
	});
}
