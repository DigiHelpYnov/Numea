var DataTypes = require("sequelize").DataTypes;
var _file_path = require("./file_path");
var _sessions = require("./sessions");
var _users = require("./users");

function initModels(sequelize) {
  var file_path = _file_path(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  file_path.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(file_path, { as: "file_paths", foreignKey: "user_id"});
  sessions.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(sessions, { as: "sessions", foreignKey: "user_id"});

  return {
    file_path,
    sessions,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
