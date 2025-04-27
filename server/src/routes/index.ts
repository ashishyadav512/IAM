// import { Router } from 'express';
// import userRoutes from '../modules/user/user.routes';
// import productRoute from '../modules/product/product.routes';
// import saleRoutes from '../modules/sale/sale.routes';
// import categoryRoutes from '../modules/category/category.routes';
// import brandRoutes from '../modules/brand/brand.routes';
// import sellerRoutes from '../modules/seller/seller.routes';
// import purchaseRoutes from '../modules/purchase/purchase.routes';

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


import { Router } from 'express';
import userRoutes from '../modules/user/user.routes';
import productRoute from '../modules/product/product.routes';
import saleRoutes from '../modules/sale/sale.routes';
import categoryRoutes from '../modules/category/category.routes';
import brandRoutes from '../modules/brand/brand.routes';
import sellerRoutes from '../modules/seller/seller.routes';
import purchaseRoutes from '../modules/purchase/purchase.routes';

const rootRouter = Router();

// ✅ Test route for API
rootRouter.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to the API!' });
});

// ✅ Ensure all routes are mounted correctly
rootRouter.use('/users', userRoutes);
rootRouter.use('/products', productRoute);
rootRouter.use('/sales', saleRoutes);
rootRouter.use('/categories', categoryRoutes);
rootRouter.use('/brands', brandRoutes);
rootRouter.use('/sellers', sellerRoutes);
rootRouter.use('/purchases', purchaseRoutes);

export default rootRouter;
