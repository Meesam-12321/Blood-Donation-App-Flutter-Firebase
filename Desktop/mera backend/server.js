require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models');
const authenticateToken = require('./src/middleware/authenticateToken');
const errorHandler = require('./src/middleware/errorHandler');
const logger = require('./src/middleware/logger');
const cors = require('./src/middleware/cors');
const limiter = require('./src/middleware/limiter');
const rbac = require('./src/middleware/rbacMiddleware');

const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./src/config/swaggerConfig'); // Import Swagger configuration

const app = express();
const port = process.env.PORT || 3000;

// Apply global middlewares
app.use(logger);
app.use(express.json());
app.use(cors);
app.use(limiter);

// Swagger API documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Importing and using the routes
const authRoutes = require('./src/routes/authRoutes');
const passwordRoutes = require('./src/routes/passwordRoutes.js');
const coordinatorRoutes = require('./src/routes/coordinatorRoutes');
const insuranceRoutes = require('./src/routes/insuranceRoutes');
const customerRoutes = require('./src/routes/customerRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const vendorRoutes = require('./src/routes/vendorRoutes');
const dishesRoutes = require('./src/routes/dishesRoutes');
const ordersRoutes = require('./src/routes/ordersRoutes');
const repeatOrderRoutes = require('./src/routes/repeatOrderRoutes');
const complaintsRoutes = require('./src/routes/complaintsRoutes');
const cartRoutes = require('./src/routes/cartRoutes');
const favDishRoutes = require('./src/routes/favDishRoutes');
const claimsRoutes = require('./src/routes/claimsRoutes');
const disputesRoutes = require('./src/routes/disputesRoutes');
const ridersRoutes = require('./src/routes/ridersRoutes');
const deliveryRoutes = require('./src/routes/deliveryRoutes');
const searchRoutes = require('./src/routes/searchRoutes');
const naviNetRoutes = require('./src/routes/naviNetRoutes');
const formintakeRoutes = require('./src/routes/formintakeRoutes.js');
const createcustomerRoutes = require('./src/routes/createcustomerRoutes');

// Hook to prevent Sequelize from recreating unique indexes
sequelize.addHook('beforeSync', async (options) => {
    if (options.alter) {
        const queryInterface = sequelize.getQueryInterface();
        const tables = await queryInterface.showAllTables();
        for (const table of tables) {
            const indexes = await queryInterface.showIndex(table);
            for (const index of indexes) {
                if (!index.primary && index.unique) {
                    await queryInterface.removeIndex(table, index.name);
                }
            }
        }
    }
});

// Authentication routes for Super Admin and Admin
app.use('/auth', authRoutes);

// Protect all routes under /admin with authentication middleware and RBAC
app.use('/admin', authenticateToken);

// Register admin routes with the protected prefix
app.use('/admin/api/coordinators', rbac('Super Admin'), coordinatorRoutes);
app.use('/admin/api/insurance', rbac('Admin'), insuranceRoutes);
app.use('/admin/api/customers', rbac('Admin'), customerRoutes);
app.use('/admin/api/admins', rbac('Super Admin'), adminRoutes);
app.use('/admin/api/vendors', rbac('Admin'), vendorRoutes);
app.use('/admin/api/dishes', rbac('Admin'), dishesRoutes);
app.use('/admin/api/orders', rbac('Admin'), ordersRoutes);
app.use('/admin/api/repeatorders', rbac('Admin'), repeatOrderRoutes);
app.use('/admin/api/complaints', rbac('Admin'), complaintsRoutes);
app.use('/admin/api/cart', rbac('Admin'), cartRoutes);
app.use('/admin/api/favdishes', rbac('Admin'), favDishRoutes);
app.use('/admin/api/claims', rbac('Admin'), claimsRoutes);
app.use('/admin/api/disputes', rbac('Admin'), disputesRoutes);
app.use('/admin/api/riders', rbac('Admin'), ridersRoutes);
app.use('/admin/api/delivery', rbac('Admin'), deliveryRoutes);
app.use('/navinet',naviNetRoutes);
app.use('/admin/api/search',searchRoutes);
app.use('/api/password',passwordRoutes);
app.use('/admin/api/formintake',formintakeRoutes);
app.use('/admin/api/creaetcustomer',createcustomerRoutes);

// Test route to check if server is working
app.get('/test', (req, res) => {
    res.send('Test route working!');
});

// Syncing models with the database and starting the server
sequelize.sync({ force : true })
    .then(() => {
        console.log('Database synchronized successfully.');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Error synchronizing the database:', err);
    });

// Error handling middleware should be the last in the stack
app.use(errorHandler);

module.exports = app;
