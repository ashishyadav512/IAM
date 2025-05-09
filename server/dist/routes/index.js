"use strict";
// import { Router } from 'express';
// import userRoutes from '../modules/user/user.routes';
// import productRoute from '../modules/product/product.routes';
// import saleRoutes from '../modules/sale/sale.routes';
// import categoryRoutes from '../modules/category/category.routes';
// import brandRoutes from '../modules/brand/brand.routes';
// import sellerRoutes from '../modules/seller/seller.routes';
// import purchaseRoutes from '../modules/purchase/purchase.routes';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const rootRouter = Router();
// rootRouter.get('/', (req, res) => {
//     res.json({ success: true, message: 'Welcome to the API!' });
//   });
// rootRouter.use('/users', userRoutes);
// rootRouter.use('/products', productRoute);
// rootRouter.use('/sales', saleRoutes);
// rootRouter.use('/categories', categoryRoutes);
// rootRouter.use('/brands', brandRoutes);
// rootRouter.use('/sellers', sellerRoutes);
// rootRouter.use('/purchases', purchaseRoutes);
// export default rootRouter;
// new
const express_1 = require("express");
const user_routes_1 = __importDefault(require("../modules/user/user.routes"));
const product_routes_1 = __importDefault(require("../modules/product/product.routes"));
const sale_routes_1 = __importDefault(require("../modules/sale/sale.routes"));
const category_routes_1 = __importDefault(require("../modules/category/category.routes"));
const brand_routes_1 = __importDefault(require("../modules/brand/brand.routes"));
const seller_routes_1 = __importDefault(require("../modules/seller/seller.routes"));
const purchase_routes_1 = __importDefault(require("../modules/purchase/purchase.routes"));
const rootRouter = (0, express_1.Router)();
// ✅ Test route for API
rootRouter.get('/', (req, res) => {
    res.json({ success: true, message: 'Welcome to the API!' });
});
// ✅ Ensure all routes are mounted correctly
rootRouter.use('/users', user_routes_1.default);
rootRouter.use('/products', product_routes_1.default);
rootRouter.use('/sales', sale_routes_1.default);
rootRouter.use('/categories', category_routes_1.default);
rootRouter.use('/brands', brand_routes_1.default);
rootRouter.use('/sellers', seller_routes_1.default);
rootRouter.use('/purchases', purchase_routes_1.default);
exports.default = rootRouter;
