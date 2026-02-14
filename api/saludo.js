export default function handler(req, res) {
    //Esto es un comentario de test
    const nombre = req.query.nombre || "anónimo";

    res.status(200).json({
    mensaje: `Hola ${nombre}`,
    curso: "Ingeniería de Software II",
    timestamp: new Date().toISOString()
  });
}
