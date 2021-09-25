let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://recoders-area.caliph.repl.co/api/loli`
  conn.sendFile(m.chat, res, 'loli.jpg', `jangan lupa dikarungin ya Oh iya hati-hati ntar ada FBI `, m, false)
}
handler.help = ['loli'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(loli)$/i

module.exports = handler