let handler = async m => m.reply(`
┌〔 Beli Apikey 〕
├ Nominal harganya di bawah ini dilihat-lihat dulu aja
├ [ FREE ] => Limit 100 Request per account
├ [ PREMIUM ] => Unlimited limit per bulan
├ Berminat membeli apikey? 
├ Harga cuma 20k Unlimited per bulan
├ Chat saya via Whatsapp. Klik disini
├  wa.me/6281946983575
├  link apinya 
├  https://api.xteam.xyz/
├  owner apikey yang dihubungi
└────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['beliapikey','isiapi']
handler.tags = ['info']
handler.command = /^beliapikey|isiapi$/i

module.exports = handler