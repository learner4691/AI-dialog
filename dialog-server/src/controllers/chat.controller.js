module.exports = (req, res) => {
    const { message } = req.body;
  
    res.json({
      reply: "Mock response: " + message
    });
  };