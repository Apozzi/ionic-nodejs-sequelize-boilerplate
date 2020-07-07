const db = require('../db/pgSequelize');

class ItemsRepositoryPgSequelize {
    constructor(db) {
        this.db = db;
    }

    findAll = async () => {
        const result = await this.db.item.findAll();
        return result;
    }

    findById = async (id) => {
        const result = await this.db.item.findByPk(id);
        return result;
    }

    add = async (Item) => {
        const result = await this.db.item.create(Item);
        return result;
    }

    update = async (Item) => {
        const result = await this.db.item.update(Item, {
            where: { id: Item.id }
        });
        if (result > 0)
            return Item;
        else
            return null;
    }

    deleteById = async (id) => {
        const Item = await this.db.item.findByPk(id);
        if (!Item)
            return null;
        await this.db.item.destroy({ where: { id: id } });
        return Item;
    }
}

module.exports = new ItemsRepositoryPgSequelize(db);