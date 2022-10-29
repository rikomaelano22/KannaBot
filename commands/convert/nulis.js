const BigBossGenerator = require('system/BigBoss')
exports.run = {
   usage: ['nulis'],
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'sipaling tt gede'), m)
         client.reply(m.chat, global.status.getdata, m)
         let old = new Date()
         let Generator = new BigBossGenerator({
            font: 'arch',
            color: 'black',
            size: 19
         })
         Generator.image = 'book'
         await Generator.loadImage()
         await Generator.write(text)
         const image = await Generator.buffers[0]
         client.sendImage(m.chat, image, `*Mengambil* : ${((new Date - old) * 1)} ms`, m)
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   quota: true,
   error: false
}