module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    pollenBalance: DataTypes.INTEGER,
    // I will be implement in another time
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // role: DataTypes.STRING,
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users',
    });

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return User;
};