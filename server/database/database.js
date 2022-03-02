import Sequelize from 'sequelize'

const env = process.env.NODE_ENV;
const db = {}

async function Database() {
  const databaseConfig = await getDatabaseConfig(env)
  db.dbBaseUnica = await new Sequelize(databaseConfig.dbBaseUnica)


  await db.dbBaseUnica.authenticate();
  return db;
}

export default Database