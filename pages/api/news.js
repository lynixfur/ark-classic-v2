import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    /* News API */
    const news = await db.collection("news").find({}).limit(2).project({ username: 1, avatar_url: 1, content: 1}).toArray();
    res.status(200).json(news)
}