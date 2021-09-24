let handler = function (m) {
	this.sendContact(m.chat, '628998512588', 'Rafli', m)
}
handler.tags = ['info']

handler.command = /^(rafli)$/i

module.exports = handler