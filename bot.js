const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    if(message.content == '~володар') {
        // message.reply('sharfik, ДЖОН ПАДРУГААААА#8092 або ж просто Вова');
        message.channel.sendMessage('@sharfik#8092');
    }

});

bot.on('message', (message) => {

    if(message.content == '~Хто Лєруся?') {
        let embed = new Discord.RichEmbed()
        .setTitle('Лєруся- наша найкраща подруга. Хоч вона й грає у майнкрафт, вона не бомбить та не матюкається. Лєруся хороша та добра. Беріть приклад з Лєрусі :)')
        .setDescription('ПОДРУЖКААААА')
        .setColor('#FF8C00')
        .setFooter('Офіційний бот українською')
        .setThumbnail(`https://gifer.com/i/BJYW.gif`);
        message.channel.send(embed);
    
    }

});

bot.on('message', (message) => {

    if(message.content == 'Хто Вовуся?') {
        // message.reply('НАЙКРАЩА ПОДРУГА')
        message.channel.sendMessage('НАЙКРАЩА ПОДРУГА')
    }

});

bot.on('message', message => {
 
    if (message.content === '~аватарка') {
      message.reply(message.author.avatarURL);
    }
  });

bot.on('guildMemberAdd', (member) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Новий користувач серверу!`)
    .setDescription(`До серверу приєднався ${member.user.tag}`)
    .setColor('#FF8C00')
    .setFooter(`Вітаємо!`)
    .setThumbnail(`https://media1.tenor.com/images/a51dd05bc954fa11100bb0cc8627c4af/tenor.gif?itemid=5320723`)
    bot.channels.get('434079063489904650').send({embed});

})

bot.on('message', (message) => {

    if(message.content == '~хочу бан') {
        let embed = new Discord.RichEmbed()
        .setTitle('Вже йду, мій маленький')
        .setDescription('Відповідь')
        .setColor('#FF8C00')
        .setFooter('Офіційний бот українською')
        .setThumbnail(`https://media.discordapp.net/attachments/349845204611629056/478881212275097631/cab49feb075ff72d.PNG`);
        message.channel.send(embed);
    
    }

});

bot.on('message', (message) => {

    if(message.content == '~хто такий IPG?') {
        let embed = new Discord.RichEmbed()
        .setTitle('IPG- на перший вигляд маленька мила свинка, але він- дуже токсична та зла людина. Як він взяв Мастер у ранкед, він став білше пітніти та кричати. Але до сих пір він є найкращим другом володара цього серверу.')
        .setDescription('Хто б сподівався?')
        .setColor('#FF8C00')
        .setFooter('Офіційний бот українською')
        .setThumbnail(`https://media.discordapp.net/attachments/366267257019432961/478887067125022720/ipg.PNG`)
        message.channel.send(embed);
    
    }

});

bot.on('message', (message) => {

    if(message.content == '~команди') {
        let embed = new Discord.RichEmbed()
        .setTitle('~володар серверу\n ~Хто Лєруся?\n ~аватарка\n  ~хочу бан\n ~хто такий IPG?\n ~володар')
        .setDescription('Відповідь')
        .setColor('#FF8C00')
        .setFooter('Офіційний бот українською')
        .setThumbnail(`http://24.media.tumblr.com/c79624816e5d0d16d5243bcff88322d7/tumblr_mn9ceoc1Zp1s9g1qmo1_500.gif`)
        message.channel.send(embed);
    }

});

bot.on('ready', () => { bot.user.setGame('~команди | Офіційний бот українською') })

bot.login('process.env.NDU1OTY5NzEwNDcxOTA1Mjkw.DgDubw.Ig4jmTfGJTOeXE5RMxL6qMHSToE');
