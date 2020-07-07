const repository = require('../persistence/UsuarioRepositoryPgSequelize');
class UsuariosService {
    constructor(repository) {
        this.repository = repository;
    }

    findAll = async () => {
        return await this.repository.findAll();
    }

    findById = async (id) => {
        return await this.repository.findById(id);
    }

    add = async (Usuario) => {
        return await this.repository.add(Usuario);
    }

    update = async (Usuario) => {
        return await this.repository.update(Usuario);
    }

    deleteById = async (id) => {
        return await this.repository.deleteById(id);
    }
}
module.exports = new UsuariosService(repository);