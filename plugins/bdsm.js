let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/bdsm', {}, 'APIKEY'), 'bdsm.png', 'Nih bdsm-nya', m)
}
handler.help = ['bdsm']
handler.tags = ['random']
handler.command = /^bdsm$/i
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
