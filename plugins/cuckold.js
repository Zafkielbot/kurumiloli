let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/cuckold', {}, 'APIKEY'), 'cuckold.png', 'Nih cuckold-nya', m)
}
handler.help = ['cuckold']
handler.tags = ['random']
handler.command = /^cuckold$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
