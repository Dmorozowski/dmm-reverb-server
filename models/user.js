module.exports = function(sequelize, DataTypes) {
  return sequelize.define("user", {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { is: /^(?=.[!@#\$%\^&])|(?=.{5,})*$/ }
    }
  });
};
