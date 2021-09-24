let handler = async function(m, { conn }) {
   let users = m.isGroup
 conn.reply(m.chat, `*Sayonaraa....*`, m)
await conn.groupLeave(m.chat, [users])
}
handler.command = /^(leave|keluar|left)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
