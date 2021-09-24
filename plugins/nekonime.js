let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/nekonime', {}, 'APIKEY'), 'nekonime.png', 'Nih Foto hentai-nya mau coli ya hati-hati Entar ketahuan', m, false, {thumbnail: Buffer.alloc(0) })
}
handler.help = ['nekonime']
handler.tags = ['nsfw']
handler.command = /^nekonime$/i
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