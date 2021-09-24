let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://api.lolhuman.xyz/api/random2/ero?apikey=BandarBokep`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', '*', m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['ero2']
handler.tags = ['nsfw']
handler.command = /^(ero2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler