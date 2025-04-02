// función index devuelve el listado de usuarios

const index = (req, res) => {
    try {
        res.status(200).json({message: "Ingreso al controlador de index"})    
    } catch (error) {
        res.status(400).json({message: "Ruta no encontrada"})
    }
};

const create = (req, res) => {
    try {
        res.status(200).json({message: "Ingreso al controlador de create"})    
    } catch (error) {
        res.status(400).json({message: "Ruta no encontrada"})
    }
};

const update = (req, res) => {
    try {
        const id = req.params.id;
        res.status(200).json({message: `Ingreso al controlador de update con el id: ${id}`})    
    } catch (error) {
        res.status(400).json({message: "Ruta no encontrada"})
    }
};

const destroy = (req, res) => {
    try {
        res.status(200).json({message: "Ingreso al controlador de delete"})    
    } catch (error) {
        res.status(400).json({message: "Ruta no encontrada"})
    }
};

const show = (req, res) => {
    try {
        res.status(200).json({message: "Ingreso al controlador de show"})    
    } catch (error) {
        res.status(400).json({message: "Ruta no encontrada"})
    }
};

//Exportar el modulo
module.exports= {
    index,
    create,
    update,
    destroy,
    show
};