let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://recoders-area.caliph.repl.co/api/waifu?apikey=Zafkiel-Bot`
  conn.sendFile(m.chat, res, 'waifu.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['waifu'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(waifu2)$/i

module.exports = handler