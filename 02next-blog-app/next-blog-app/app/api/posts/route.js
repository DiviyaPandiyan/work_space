import connectMongo from "../../../util/connetMongo";
import postModel from "../../../model/postModel";

export async function GET(){
    try {
        await connectMongo();
    const postData = await postModel.find({});
    return Response.json(postData);    
    } catch (error) {
        return Response.json({message:error.message});
    }
    

}