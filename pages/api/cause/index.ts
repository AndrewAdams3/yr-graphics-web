import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    const cause = req.query.cause
    const data = await (await fetch("https://7o58c12lu4.execute-api.us-west-2.amazonaws.com/dev/products/cause/"+cause)).json()
    console.log("data", data)
    res.status(200).json(data)
  }
}

export default handler