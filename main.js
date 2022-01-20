const Discord = require('discord.js')
const client = new Discord.Client()
const play = require('discordjs-ytdl')
const { readdirSync } = require('fs');
const db = require('db');
const fs = require('fs');
const { join } = require('path');

/////////////YENİLENMİŞTİR/////////


const prefix = "PREFİX"//////PREFİXİNİZ/////

client.commands= new Discord.Collection();


const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command, command.name);
}

client.on("error", console.error);

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if (!client.commands.has(command))  return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);

          try{
              client.commands.get(command).run(client, message, args);

          }catch (error) {
               console.error(error);
          }

    }
});
 ///////////////////////CONSOLE MESAJ///////
client.on('ready', () => {
   console.log('bot aktif!', `${client.user.tag}`)
    const durumlar = [
        "uwu",
        "SAHİBİM ROBİNmto#8566", ////////BUNLARI AYARLARSINIZ/////
        `${client.guilds.cache.size} Sunucudayım!!!`
    ]
    setInterval(function () {
        let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
        client.user.setActivity(durum)
       }, 2500);
        client.user.setStatus('online')
    });



///////////////////////SA AS////////////////
client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.reply('Aleyküm Selam');
    }
  });
  
  client.login(process.env.token); //////burdan sonra env girin token kısmının sağına botunuzun tokenini koyun Yoksa çalışmaz//////////////////
  
  ////////////////////KÜFÜR ENGEL/////////////
/////////////////KÜFÜR ENGEL///////////
  client.on("message", message => {
    if (message.author.id !== "SAHIP ID"){ ////////////SAHIP ID KOYARSINIZ ONU BU ŞEY İŞLEMEZ O KÜFÜR EDEBİLİR//////////
        const member = message.mentions.members.first();
    const kufur = ["ananı sikim","fuck","fk","piç","babasız","anneni sikim","ananı avradını","göt","sikiş","sikuş","sokucam","oros","kahpe","kahpe","orosp","orospu evladı","yarramı ye","yarrak","taşşak","tassak","tasak","yarraq","amk","amq","amına koyim"]
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("Küfürlü & Argolu kelimeler kullanma! :face_with_symbols_over_mouth:")
        message.delete()
      
          
        }
    }
});

////////////////////////////OTO ROL///////////////
 client.on("guildMemberAdd", member => {
      const role = member.guild.roles.cache.find(role => role.name === 'üye') //////////Üye kısmına rol neyse verilcek rol o yazılcak/////////
      member.roles.add(role)
  });
///////////////////////PACKAGE JSON TEST KISMINDA KODU UNUTMAYINN////////////
