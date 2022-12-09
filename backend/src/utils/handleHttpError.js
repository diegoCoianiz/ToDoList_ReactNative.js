export const handleHttpError = (res, mes, cod) => {
    res.status(cod)
    res.send({error: mes})
}