module.exports = (sequelize, DataTypes) => {
  const Concert = sequelize.define("concerts", {
    owner: {
      type: DataTypes.INTEGER
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Concert;
};
