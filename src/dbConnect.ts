const Sequelize = require('sequelize');

const sequelize = new Sequelize('csv-parser', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql'
});

interface forObj{
  ID: string,
  Name: string,
  Surname: string,
  Mail: string,
  'Date of Registration': string,
  Phone: string
}
export const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING
  },
  Surname: {
    type: Sequelize.STRING
  },
  Mail: {
    type: Sequelize.STRING
  },
  Date: {
    type: Sequelize.STRING
  },
  Phone: {
    type: Sequelize.STRING 
  },
}, {
  // options
});
export function addUser(obj: forObj) {
User.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return User.create({
    id: obj.ID,
    Name: obj.Name,
    Surname: obj.Surname,
    Mail: obj.Mail,
    Date: obj['Date of Registration'],
    Phone: obj.Phone
  });
});
}
