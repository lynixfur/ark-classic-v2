import { connectToDatabase } from '../../lib/mongodb'


export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const servers = await db.collection("servers").find({}).project({ is_online: 1, players: 1, arkservers_api_key: 1 }).toArray();
    
    var global_count = 0;

    servers.forEach(async (server) => {
        global_count += parseInt(server.players);
        console.log(`Players : ${server.players}`);
    })

    res.status(200).json({players: parseInt(global_count)})
}
  