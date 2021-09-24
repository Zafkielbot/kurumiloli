let handler = function (m) {
  this.sendContact(m.chat, '6281943265086', 'Haruno', m)
  m.reply('ini temen aku, Haruno')
}
handler.help = ['temen', 'bot']
handler.tags = ['info']

handler.command = /^(temen|bot)$/i

module.exports = handler