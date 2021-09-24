//Zefkiel Bot, Haruno Bot
let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=BandarBokep`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', 'in :v', m, false, { thumbnail: Buffer.alloc(0) })
}
  
handler.help = ['hentai2']
handler.tags = ['random']
handler.command = /^hentai2$/i

handler.fail = null
handler.exp = 0
handler.limit = 1

module.exports = handler