"use strict";
// import dotenv from 'dotenv';
// import path from 'path';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config({ path: path.join(process.cwd(), '.env') });
// console.log("Database connected"); // Debugging4
// export default {
//   nodeEnv: process.env.NODE_ENV,
//   port: process.env.PORT,
//   database_url: process.env.DATABASE_URL,
//   jwt_secret: process.env.JWT_SECRET
// };
/// new code 
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
// Load environment variables from .env file
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
// Ensure required environment variables exist
if (!process.env.DATABASE_URL) {
    console.error("❌ ERROR: DATABASE_URL is missing!");
    process.exit(1);
}
const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    database_url: process.env.DATABASE_URL,
    jwt_secret: process.env.JWT_SECRET || 'default_secret',
};
// Connect to MongoDB
mongoose_1.default
    .connect(config.database_url)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
});
exports.default = config;
