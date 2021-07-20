const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as mine bot`);
});

client.on("message" , msg => {
    if (msg.content === 'RuLeS'){
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#3498DB')
    .setTitle('SEVER RULES')
    .setDescription('@everyone This is our discord sever rules !')
    .addFields({ name: "Rules number 1",
    value: "Do not spam massages emoji image or sticker !"})
    .addFields({ name: "Rules number 2",
    value: "Do not annoy other people !"})
    .addFields({ name: "Rules number 3",
    value: "Not thing about Sex !"})
    .addFields({ name: "Rules number 4",
    value: "Not thing about political !"})
    .addFields({ name: "Rules number 5",
    value: "When you come in tell us, Who you are !"})
    .addFields({ name: "Rules number 6",
    value: "You must use your real name only !"})
    .addFields({ name: "Rules number 7",
    value: "Do not racist. I don't care if you are god but in this sever everyone are same!"})
    .setTimestamp()
    .setFooter('Last edit');
    
    msg.channel.send(exampleEmbed);
    }
    })
    

client.login('token');