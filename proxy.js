export default async (req, res) => {
  const audioUrl = 'http://198.7.62.157:10088';
  
  try {
    const response = await fetch(audioUrl);
    
    // FORCE the correct MIME type (try one of these):
    res.setHeader('Content-Type', 'audio/mpeg'); // MP3
    // res.setHeader('Content-Type', 'audio/aac'); // AAC
    // res.setHeader('Content-Type', 'audio/ogg'); // OGG
    
    response.body.pipe(res);
  } catch (error) {
    res.status(500).send('Error streaming audio');
  }
};
