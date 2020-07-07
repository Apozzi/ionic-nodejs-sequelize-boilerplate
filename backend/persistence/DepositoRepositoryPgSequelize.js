const db = require('../db/pgSequelize');

class DepositosRepositoryPgSequelize {
    constructor(db) {
        this.db = db;
    }

    findAll = async () => {
        const result = await this.db.deposito.findAll();
        return result;
    }

    findById = async (id) => {
        const result = await this.db.deposito.findByPk(id);
        return result;
    }

    add = async (Deposito) => {
        const result = await this.db.deposito.create(Deposito);
        return result;
    }

    update = async (Deposito) => {
        const result = await this.db.deposito.update(Deposito, {
            where: { id: Deposito.id }
        });
        if (result > 0)
            return Deposito;
        else
            return null;
    }

    deleteById = async (id) => {
        const Deposito = await this.db.deposito.findByPk(id);
        if (!Deposito)
            return null;
        await this.db.deposito.destroy({ where: { id: id } });
        return Deposito;
    }
}

module.exports = new DepositosRepositoryPgSequelize(db);