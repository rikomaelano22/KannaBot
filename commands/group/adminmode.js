exports.run = {
   usage: ['adminmode'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      let setting = global.db.groups[m.chat]
      let rows = [{
         title: Func.ucword(command),
         rowId: `${isPrefix + command} on`,
         description: `[ Status : ON ]`
      }, {
         title: Func.ucword(command),
         rowId: `${isPrefix + command} off`,
         description: `[ Status : OFF ]`
      }]
      let type = command.toLowerCase()
      if (!args || !args[0]) return client.sendList(m.chat, '', `Status saat ini : [ ${setting[type] ? 'ON' : 'OFF'} ]`, '', 'Tap!', rows, m)
      let option = args[0].toLowerCase()
      let optionList = ['on', 'off']
      if (!optionList.includes(option)) return client.sendList(m.chat, '', `Status saat ini : [ ${setting[type] ? 'ON' : 'OFF'} ]`, '', 'Tap!', rows, m)
      let status = option != 'on' ? false : true
      if (setting[type] == status) return client.reply(m.chat, Func.texted('bold', `${Func.ucword(command)} sebelumnya sudah ${option == 'on' ? 'diaktifkan' : 'dimatikan'}.`), m)
      setting[type] = status
      client.reply(m.chat, Func.texted('bold', `${Func.ucword(command)} ${option == 'on' ? 'Bot berhasil di ubah menjadi Admin Mode*\n\n*Hanya admin yang dapat menggunakan bot di grup ini' : 'Berhasil dimatikan*\n\n*Semua anggota grup bisa menggunakan bot di grup ini'}.`), m)
   },
   admin: true,
   group: true,
   cache: true,
   location: __filename
}