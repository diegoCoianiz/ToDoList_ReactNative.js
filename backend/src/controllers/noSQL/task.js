import dbConnect from "../../config/noSQL/mongo";
import { handleHttpError } from "../../utils/handleHttpError";

export const getItems = async (req, res) => {
    dbConnect()
    try {
        /*  trackModels.find({}).then((res) => {console.log(res)})  */ 
        const data = await tracksModel.find({})
        res.send({data})   
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS', 403)
        res.send({e})
    }
    
}