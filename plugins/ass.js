let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/ass', {}, 'APIKEY'), 'ass.png', 'Nih ass-nya', m)
}
handler.help = ['ass']
handler.tags = ['random']
handler.command = /^ass$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 5
handler.limit = 1

module.exports = handler
