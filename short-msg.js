function getShortMessages(messages) {
  return messages
  .map(function (msg) {
    return msg.message;
  })
  .filter(function(message) {
    return message.length < 50
  });
};

module.exports = getShortMessages