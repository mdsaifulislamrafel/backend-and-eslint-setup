import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    databaseURL: process.env.DATABASE_URL,
}