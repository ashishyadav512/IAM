
import { Server } from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';
import config from './config';
import cors from 'cors';

dotenv.config(); // ✅ Load environment variables

let server: Server;
app.use(cors());

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('✅ MongoDB connected successfully');

    // Convert port to a number
    const port = Number(config.port) || 5003;
    if (isNaN(port)) {
      throw new Error("Invalid port number in config");
    }
                            
    // Start the server
    server = app.listen(port, '0.0.0.0', () => {
      console.log(`🚀 Server running at http://${getLocalIp()}:${port}`);
    });
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err);
    process.exit(1);
  }
}

main();

// Handle unhandled errors
process.on('unhandledRejection', (err) => {
  console.error('😈 Unhandled Rejection detected, shutting down...', err);
  if (server) {
    server.close(() => process.exit(1));
  }
});

process.on('uncaughtException', (err) => {
  console.error('😈 Uncaught Exception detected, shutting down...', err);
  process.exit(1);
});

// Function to get local IP address
function getLocalIp() {
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}
