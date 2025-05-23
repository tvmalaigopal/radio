// This will proxy your HTTP audio stream securely over HTTPS
export default async (req, res) => {
  const audioUrl = 'http://198.7.62.157:10088'; // Your stream URL
  
  try {
    const response = await fetch(audioUrl);
    
    // Forward headers for proper streaming
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    
    // Pipe the stream to the client
    response.body.pipe(res);
  } catch (error) {
    res.status(500).send('Error streaming audio');
  }
};