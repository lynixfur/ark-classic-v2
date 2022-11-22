import { connectToDatabase } from '../../../lib/mongodb'


export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const page_list = await db.collection("pages").find({}).project({ str_id: 1, page_icon: 1, title: 1 }).toArray();
    res.status(200).json(page_list)
}
  