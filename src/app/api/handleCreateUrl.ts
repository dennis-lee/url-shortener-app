const handler = async (req: any, res: any) => {
  const url = req.body.url

  try {
    await fetch(`${process.env.NEXT_PUBLIC_URL_SHORTENER_API}/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
    })
  } catch (e) {
    return res.end(JSON.stringify(e))
  }
}

export default handler
