module.exports = {
    kod: "sil",
    async run (client, message, args){
        if (isNaN(args)) return message.reply('Lütfen bir sayı girin.');
        if (args < 2 || args > 100) return message.reply('Lüften 2-100 arası sayı girin.');
        message.channel.bulkDelete(Number(args))
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Başarıyla mesajlar silindi.')
        .setDescription('Silien mesaj sayısı ' + args)
        message.channel.send(embed).then(mesaj => {
            message.delete()
            setTimeout(function() {

             
            }, 10);
        })
    }
}
