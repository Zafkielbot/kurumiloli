let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  conn.sendFile(m.chat, json.url, '', '® Kurumiloli', m, 0, { thumbnail: await (await fetch(json.url)).buffer() })
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^waifu$/i

module.exports = handler
