const db = require('../db/pgSequelize');

class UsuariosRepositoryPgSequelize {
    constructor(db) {
        this.db = db;
    }

    findAll = async () => {
        const result = await this.db.usuario.findAll();
        return result;
    }

    findById = async (id) => {
        const result = await this.db.usuario.findByPk(id);
        return result;
    }

    add = async (Usuario) => {
        const result = await this.db.usuario.create(Usuario);
        return result;
    }

    update = async (Usuario) => {
        const result = await this.db.usuario.update(Usuario, {
            where: { id: Usuario.id }
        });
        if (result > 0)
            return Usuario;
        else
            return null;
    }

    deleteById = async (id) => {
        const Usuario = await this.db.usuario.findByPk(id);
        if (!Usuario)
            return null;
        await this.db.usuario.destroy({ where: { id: id } });
        return Usuario;
    }
}

module.exports = new UsuariosRepositoryPgSequelize(db);