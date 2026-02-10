export default function handler(req, res){
    const nombre = req.query.nombre || "anonimo";

    if(nombre == "error"){
        res.status(400).json({
            resultado: "Error: no se puede usar 'error' como nombre",
            timestamp: new Date().toISOString()
        });
    }else{
        res.status(200).json({
            resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
            timestamp: new Date().toISOString()
        })
    }
}