let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/gangbang', {}, 'APIKEY'), 'gangbang.png', 'Nih gangbang-nya', m)
}
handler.help = ['gangbang']
handler.tags = ['random']
handler.command = /^gangbang$/i
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
