"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const globalErrorhandler_1 = __importDefault(require("./middlewares/globalErrorhandler"));
const app = (0, express_1.default)();
// Allow frontend from any machine
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:5173', 'http://192.168.155.100:5173',
    ],
    credentials: true
}));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// ✅ Test route
app.get('/', (req, res) => {
    res.json({ success: true, message: 'API is running successfully!' });
});
// Application routes
app.use('/api/v1', routes_1.default);
// Global error handling middleware
app.use(globalErrorhandler_1.default);
// 404 Not Found Middleware
app.use(notFound_1.default);
exports.default = app;
