class pokemon extends Model {}

pokemon.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id',
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Nome',
    },
    Tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'Tipo',
    },
    Altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Altura',
    },
    Peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Peso',
    },
    Poder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Poder',
    }
})
