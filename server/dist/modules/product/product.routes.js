"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validator_1 = __importDefault(require("./product.validator"));
const product_controllers_1 = __importDefault(require("./product.controllers"));
const verifyAuth_1 = __importDefault(require("../../middlewares/verifyAuth"));
const productRoute = (0, express_1.Router)();
productRoute.use(verifyAuth_1.default);
productRoute.get('/total', product_controllers_1.default.getTotalProduct);
productRoute.post('/bulk-delete', product_controllers_1.default.bulkDelete);
productRoute.post('/', (0, validateRequest_1.default)(product_validator_1.default.createSchema), product_controllers_1.default.create);
productRoute.get('/', product_controllers_1.default.readAll);
productRoute.patch('/:id/add', (0, validateRequest_1.default)(product_validator_1.default.addStockSchema), product_controllers_1.default.addStock);
productRoute.patch('/:id', (0, validateRequest_1.default)(product_validator_1.default.updateSchema), product_controllers_1.default.update);
productRoute.get('/:id', product_controllers_1.default.readSingle);
productRoute.delete('/:id', product_controllers_1.default.delete);
exports.default = productRoute;
