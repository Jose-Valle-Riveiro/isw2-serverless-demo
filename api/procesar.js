export default function handler(req, res){
    const nombre = req.query.nombre || "anonimo";

    res.status(200).json({
        resultado: `Nombre procesado: ${nombre.toUpperCase()}`
    })
}