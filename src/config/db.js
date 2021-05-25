import Sequelize from "sequelize";

const db = new Sequelize("travelagency", "andres", "Cesarandres12716", {
  host: "localhost",
  port: "",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorAliases: false,
});

export default db;
