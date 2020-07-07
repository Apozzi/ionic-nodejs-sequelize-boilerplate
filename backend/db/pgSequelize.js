const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
	dialect: 'postgres',
	dialectOptions: {}
});

const item = sequelize.define("items", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
	codigodebarras: {
        type: Sequelize.STRING,
        allowNull: false
    },
	deposito: {
        type: Sequelize.STRING,
        allowNull: false
    },
	categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade: Sequelize.INTEGER,
    obs: {
        type: Sequelize.STRING,
        allowNull: false
    },
	cadastro: Sequelize.DATE
}, {
    timestamps: false // desabilita campos `createdAt` and `updatedAt`
});

const deposito = sequelize.define("depositos", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
	usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idusuario: Sequelize.INTEGER
}, {
    timestamps: false // desabilita campos `createdAt` and `updatedAt`
});

const area = sequelize.define("areas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
	deposito: {
        type: Sequelize.STRING,
        allowNull: false
    },
    iddeposito: Sequelize.INTEGER
}, {
    timestamps: false // desabilita campos `createdAt` and `updatedAt`
});

const usuario = sequelize.define("usuarios", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false // desabilita campos `createdAt` and `updatedAt`
});

const db = {
    item,
	deposito,
	area,
	usuario
}

module.exports = db;