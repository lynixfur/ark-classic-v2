// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(
  req,
  res
) {
    res.status(200).json(
    {
       pagename: 'ARKClassic',
       headertext: "Return to the old days of Ark and enjoy your adventure with the best Qol Features that Ark Classic offers" 
    }
    )
}
