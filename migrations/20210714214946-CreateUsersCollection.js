module.exports = {
  async up(db, client) {
    db.createCollection(`users`)
  },

  async down(db, client) {
    db.dropCollection(`users`)
  }
}
