import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "variables.env" });

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
    define: {
      timestamps: false,
    },
  }
);

export default db;
