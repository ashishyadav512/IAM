

// import dotenv from 'dotenv';
// import path from 'path';

// dotenv.config({ path: path.join(process.cwd(), '.env') });

// console.log("Database connected"); // Debugging4


// export default {
//   nodeEnv: process.env.NODE_ENV,
//   port: process.env.PORT,
//   database_url: process.env.DATABASE_URL,
//   jwt_secret: process.env.JWT_SECRET
// };






/// new code 

import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config({ path: path.join(process.cwd(), '.env') });

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
mongoose
  .connect(config.database_url)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

export default config;

