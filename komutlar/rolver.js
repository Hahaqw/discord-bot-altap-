module.exports = {
   kod: "rolver",
   async run (client, message, args){
   
    const args1= message.content.split(' ').slice(2)
    const args2 = message.content.split(' ').slice(3)
    const botmesajı = args1.join(" ")
    const user = args2.join(" ")
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunun için iznin yok.');
          if (!botmesajı) return message.reply(' `**Doğru Kullanım: \n <kullanıcı> <roleadı>**`')
          
        let role = message.mentions.roles.first();
        let member = message.mentions.members.first();
        member.roles.add(role)
          message.reply(`Rolun verildi ${member}`)
    }
   }
