module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255], // Panjang maksimal 255 karakter
        notEmpty: true, // Tidak boleh kosong
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true, // Tidak boleh kosong
      }
    },
    status: {
      type: DataTypes.ENUM(['created', 'in_progress', 'done']),
      allowNull: false,
      defaultValue: 'created', // Nilai default
    }
  });

  return Todo;
};
