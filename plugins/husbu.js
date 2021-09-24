let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
let res = await fetch(global.API('xteam', '/randomimage/husbu', {}, 'APIKEY'))
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let { image, teks } = json.result
  conn.sendFile(m.chat, image, 'Husbu.jpg', `
❐ *Husbu*
 ︳${teks}
 ︳ini Husbu nya
└─

Haruno-Bot
Zefkiel-Bot
  `.trim(), m)
}
handler.help = ['husbu']
handler.tags = ['random']

handler.command = /^(husbu)$/i

handler.limit = true

module.exports = handler