let handler = async function(m, { conn ,args}) {

  let users = m.isGroup
  conn.reply(m.chat, `sayonaraaaaaa.......*`, m)
await conn.groupLeave(m.chat, [users])
}
 
handler.help = ['leave','oleave']
handler.tags = ['owner']
handler.command = /^leave/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
