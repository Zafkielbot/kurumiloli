let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/manga', {}, 'APIKEY'), 'manga.png', 'Nih manga-nya', m)
}
handler.help = ['manga']
handler.tags = ['random']
handler.command = /^manga$/i
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
