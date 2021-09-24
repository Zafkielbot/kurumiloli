fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
m.reply('「 ⏱️ 」Tunggu sebentar! ')
    let haruno = `┌ 「 Rules 」
│ 🛂 Pengawasan oleh owner
│ ✅ Harap dipatuhi >_<
│ 
│ Peraturan dapat sewaktu waktu
│ diubah demi kenyamanan 
└────
1. Harap tidak spam saat command bot
2. Dilarang mengirim virtex, bug, trojan, dll ke nomor bot
3. Menghina owner akan di jemput langsung di rumah masing masing
4. Bot/owner tidak bertanggung jawab atas apa yang user lakukan terhadap command bot
5. Di larang menelpon/vc ke nomor bot
6. Di larang cheat EXP/Limit/Level
7. Jika bot tidak merespon berarti sedang off/fix bug
8. Harap report jika ada bug melalui *!report*

「 Konsekuensi 」

- Jika melanggar peraturan nomor 5 (menelpon/vc) akan di blok

- Jika melanggar peraturan nomor satu,dua & tiga maka bisa di ban dari bot

-Jika melanggar peraturan nomor 3 (menghina) maka akan di jemput di rumah masing masing

`.trim()
    conn.sendFile(m.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQG7af4LdaaoHiqR9ZYbprG3U-reWnYfPsg&usqp=CAU', 'Chino Thumb.jpg', haruno, m, false, {thumbnail: Buffer.alloc(0) })
}
handler.tags = ['rules']
handler.help = ['rules']
handler.command = /^(rules)$/i
module.exports = handler