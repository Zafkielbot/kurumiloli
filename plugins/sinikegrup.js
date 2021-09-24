let handler = async m => m.reply(`
╭─「 Mau masukin ke grup apa 」
│ 
│ > Lihat dulu :
│• Kalau mau masukin bot ke grup
│• Gampang aja tinggal
│• bilang semua owner
│ 
│ > Biar lebih gampang cat owner :
│• ketik : !owner
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sini']
handler.tags = ['sini']
handler.command = /^(sini)$/i

module.exports = handler