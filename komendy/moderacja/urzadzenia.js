module.exports = {
    name: 'urzadzenia',
    aliases: ['urzadzenia'],
    description: 'Wybierz urządzenia!',
    execute(message, args, Discord) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")

        const channel = message.guild.channels.cache.get('829683978440015895');

        const embed = new Discord.MessageEmbed()
 
        .setColor('#00FF00')
        .setTitle('Wybierz urządzenia!')
        .setDescription('**🎮 - XBOX\n🎰 - PS4\n🎲 - PS5\n💻 - PC**')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
 
        channel.send(embed);
    }
}