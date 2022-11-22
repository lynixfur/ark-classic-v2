import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const servers = await db.collection("servers").find({visible: true}).project({ name: 1, visible: 1, connection_url: 1, geolocation: 1, server_bg: 1, server_icon: 1, is_online: 1, players: 1, is_server_epic_games: 1, is_server_hybrid: 1, alternative_connection_url: 1 }).toArray();
    res.status(200).json(servers)
}
  