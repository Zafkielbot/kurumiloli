let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/blowjob', {}, 'APIKEY'), 'nsfw.png', 'Buat Coli Ya?', m)
}
handler.help = ['blowjob']
handler.tags = ['random']
handler.command = /^blowjob$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
