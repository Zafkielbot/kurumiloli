fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
m.reply('「 ⏱️ 」Tunggu sebentar! ')
    let haruno = `┌ 「 Premium 」
│ ✅Dapatkan fitur khusus premium.
│ ✅Masukkan bot ke group anda.
│ 
│ 7 Hari / Rp 5.000
│ 30 Hari / Rp 10.000
└────\n
┌
├Pembayaran:
├Pulsa (Tri): 628998512588 (+5.000)
├GoPay: 628998512588
├Dana: 628998512588
├OVO: 628998512588
├Transfer uangnya pakai DANA aja. 
├Lebih praktis, transfer di sini ya
├ https://link.dana.id/qr/fkno783
└────
Kelebihan User Premium:
1. Bisa masukkan bot ke group sampai 5 kali.
2. Tambahan pada fitur fitur seperti daily.
3. File fitur play up to 90mb.
4. Buka fitur fitur premium.
5. Membantu bot agar on lebih lama.
DLL

Konfirmasi ke owner untuk informasi lebih lanjut
https://wa.me/628998512588
`.trim()
    conn.sendFile(m.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQG7af4LdaaoHiqR9ZYbprG3U-reWnYfPsg&usqp=CAU', 'Chino Thumb.jpg', haruno, m, false, {thumbnail: Buffer.alloc(0) })
}
handler.tags = ['premium']
handler.help = ['premium']
handler.command = /^(premium)$/i
module.exports = handler