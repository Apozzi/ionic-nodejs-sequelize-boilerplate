const db = require('../db/pgSequelize');

class AreasRepositoryPgSequelize {
    constructor(db) {
        this.db = db;
    }

    findAll = async () => {
        const result = await this.db.area.findAll();
        return result;
    }

    findById = async (id) => {
        const result = await this.db.area.findByPk(id);
        return result;
    }

    add = async (Area) => {
        const result = await this.db.area.create(Area);
        return result;
    }

    update = async (Area) => {
        const result = await this.db.area.update(Area, {
            where: { id: Area.id }
        });
        if (result > 0)
            return Area;
        else
            return null;
    }

    deleteById = async (id) => {
        const Area = await this.db.area.findByPk(id);
        if (!Area)
            return null;
        await this.db.area.destroy({ where: { id: id } });
        return Area;
    }
}

module.exports = new AreasRepositoryPgSequelize(db);