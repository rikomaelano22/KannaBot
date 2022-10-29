exports.run = {
   usage: ['tqto', 'thanksto'],
   async: async (m, {
      client
   }) => {
      client.sendMessageModify(m.chat, info(), m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/9ba9f9702df4b33f6a2f2.jpg'),
            url: global.db.setting.link
            })         
   },
   error: false,
   cache: true,
   location: __filename
}

let info = () => {
   return `*BIG THANKS TO*

➠ wildan Izzuddin  

➠ Fardan Dep

➠ acuy

➠ mel       

➠ adara cantik

➠ aprildv 

➠ DiaryNikiiAll

➠ Revan

*ALL CREATOR BOT*`
}
