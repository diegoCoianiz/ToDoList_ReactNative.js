console.clear()
import express from "express";
import taskRoutes from "./routes/task"
import cors from "cors"
import morgan from "morgan"
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
import {options} from "./swaggerOptions"
const app = express();

/*          MIDLEWARE           */
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(taskRoutes)
app.use("/mongo", require("./routes/taskMongo"))

/*          SWAGGER UI ROUTE           */
const specs = swaggerJSDoc(options)
app.use("/docs", SwaggerUi.serve, SwaggerUi.setup(specs))

export default app