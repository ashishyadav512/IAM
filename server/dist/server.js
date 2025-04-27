"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
dotenv_1.default.config(); // ✅ Load environment variables
let server;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.database_url);
            console.log('✅ MongoDB connected successfully');
            // Convert port to a number
            const port = Number(config_1.default.port) || 5004;
            if (isNaN(port)) {
                throw new Error("Invalid port number in config");
            }
            // Start the server
            server = app_1.default.listen(port, '0.0.0.0', () => {
                console.log(`🚀 Server running at http://${getLocalIp()}:${port}`);
            });
        }
        catch (err) {
            console.error('❌ Error connecting to MongoDB:', err);
            process.exit(1);
        }
    });
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
