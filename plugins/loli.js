let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://recoders-area.caliph.repl.co/api/loli`

  conn.sendFile(m.chat, res, 'loli.jpg', `*ini lolinya* `, m, false, { thumbnail: Buffer.alloc(0) })
}

handler.help = ['loli'].map(v => v + ' ')
handler.tags = ['anime']

handler.fail = null
handler.exp = 0
handler.limit = 1

handler.command = /^(loli)$/i

module.exports = handler
