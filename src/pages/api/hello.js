/**
 * @function
 *  
 * @param req - instancia de http.IncomingMessage, además de algunos middlewares prediseñados
 * @param res - instancia de http.ServerResponse, además de algunas funciones auxiliares
 * @return
 *
 * documentación de la API Next.js: https://nextjs.org/docs/api-routes/introduction
 */
export default function handler(req, res) {
  res.status(200).json({ banner: 'Happy coding!' })
}
