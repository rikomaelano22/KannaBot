exports.run = {
   usage: ['claim'],
   async: async (m, {
      client
   }) => {
      let user = global.users[m.sender]
      let timeClaim = 3600000
      let claimed = new Date(user.lastclaim + timeClaim)
      let timeout = claimed - new Date()
      if (new Date - user.lastclaim > timeClaim) {
         client.sendMessageModify(m.chat, Func.texted('bold', `Selamat, kamu mendapat Uang 15JT dan 25 limit 🔮️`), m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/e4954937673ef75e467b2.jpg'),
            url: 'https://chat.whatsapp.com/KG9EraduWh2Bz3mdWbkHjl'
         })
         user.point += 15000000
         user.limit += 25
         user.lastclaim = new Date() * 1
      } else {
         client.sendMessageModify(m.chat, Func.texted('bold', `Kamu sudah melakukan claim silahkan klaim kembali di jam berikutnya*\n\n*⏱️ : ${Func.toTime(timeout)}️`), m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/2d7a56edbda6128633a06.jpg'),
            url: 'https://chat.whatsapp.com/KG9EraduWh2Bz3mdWbkHjl'
         })
      }
   },
   error: false,
   group: true
}