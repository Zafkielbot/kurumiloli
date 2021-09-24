let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/nsfwneko', {}, 'APIKEY'), 'nsfw.png', 'Buat Coli Ya?', m)
}
handler.help = ['nsfwneko']
handler.tags = ['random']
handler.command = /^nsfwneko$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = 1

module.exports = handler