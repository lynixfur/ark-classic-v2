import { connectToDatabase } from '../../../lib/mongodb'

export default async function handler(req, res) {
    const { id } = req.query;
    const { db } = await connectToDatabase();
    
    const page_data = await db.collection("pages").findOne({str_id: id});

    if(!page_data) {
        res.status(200).json({error: 'Page not Found'})
    }
    res.status(200).json(page_data)
}
  