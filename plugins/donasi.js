let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ Pulsa:-08998512588
├ OVO:-08998512588
├ Dana:-08998512588
├Transfer uangnya pakai DANA aja. 
├Lebih praktis, transfer di sini ya
├ https://link.dana.id/qr/fkno783
└────
`.trim(), watermark, 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
