let handler = async m => m.reply(`
Are you ready

`.trim()) // Tambah sendiri kalo mau
handler.help = ['jadiin']
handler.tags = ['jadiin']
handler.command = /^(jadiin)$/i

handler.owner = true

module.exports = handler