let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/glasses', {}, 'APIKEY'), 'glasses.png', 'Nih glasses-nya', m)
}
handler.help = ['ero']
handler.tags = ['random']
handler.command = /^ero$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
