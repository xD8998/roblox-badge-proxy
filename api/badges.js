export default async function handler(req, res) {
  const universeId = req.query.universeId;

  if (!universeId) {
    return res.status(400).json({
      error: "Missing universeId parameter"
    });
  }

  const url =
    `https://badges.roblox.com/v1/universes/${universeId}/badges?limit=100`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch badges",
      details: err.message
    });
  }
}
