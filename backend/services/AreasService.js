const repository = require('../persistence/AreaRepositoryPgSequelize');
class AreasService {
    constructor(repository) {
        this.repository = repository;
    }

    findAll = async () => {
        return await this.repository.findAll();
    }

    findById = async (id) => {
        return await this.repository.findById(id);
    }

    add = async (Area) => {
        return await this.repository.add(Area);
    }

    update = async (Area) => {
        return await this.repository.update(Area);
    }

    deleteById = async (id) => {
        return await this.repository.deleteById(id);
    }
}
module.exports = new AreasService(repository);