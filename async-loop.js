function loadUsers(userIds, load, done) {
  var users = [];
  var current = 0;
  userIds.forEach((userId, index) => {
    load(userId, function(user) {
      users[userId] = user;
      if (++completed === userIds.length) return done(users)
    });
  });
};

module.exports = loadUsers