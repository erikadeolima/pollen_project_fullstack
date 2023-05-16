module.exports = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
    {
      timestamps: false,
      tableName: 'orders_products',
      underscored: true,
    });

  OrdersProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      through: OrdersProducts,
      foreignKey: 'productId',
      otherKey: 'orderId',
      as: 'orders',
    });
    models.Sale.belongsToMany(models.Product, {
      through: OrdersProducts,
      foreignKey: 'orderId',
      otherKey: 'productId',
      as: 'products',
    });
  };

  return OrdersProducts;

};