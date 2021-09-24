let fetch = require('node-fetch')
const fs = require('fs')
let handler = async(m, { conn }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    let pic = await res.json()
    conn.sendFile(m.chat, pic.url, 'test', '*WAIFU!*', m, false, {thumbnail: Buffer.alloc(0) })
}
handler.command = /^(waifu2)$/i
handler.tags = ['random', 'image', 'internet']
handler.help = ['waifu2']
handler.limit = true
module.exports = handler