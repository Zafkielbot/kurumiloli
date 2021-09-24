let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.owner.includes(who.split`@`[0])) throw 'Sudah premium!'
    global.owner.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `Hai, @${who.split`@`[0]}. Kamu sudah jadi owner!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addowner *@user*']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i
handler.rowner = true
module.exports = handler