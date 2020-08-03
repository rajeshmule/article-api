function isValidUser(user) {
  return (
    user.name &&
    user.email &&
    user.password &&
    user.password.length > 5 &&
    user.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  );
}

module.exports = { isValidUser };
