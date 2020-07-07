const repository = require('../persistence/ItemRepositoryPgSequelize');
class ItemsService {
    constructor(repository) {
        this.repository = repository;
    }

    findAll = async () => {
        return await this.repository.findAll();
    }

    findById = async (id) => {
        return await this.repository.findById(id);
    }

    add = async (Item) => {
        return await this.repository.add(Item);
    }

    update = async (Item) => {
        return await this.repository.update(Item);
    }

    deleteById = async (id) => {
        return await this.repository.deleteById(id);
    }
}
module.exports = new ItemsService(repository);