const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('checkin')
		.setDescription('Hackers can check-in using this command')
        .addStringOption(option => 
            option.setName('email')
                .setDescription('email address you used to register for MakeUC')
                .setRequired(true)),
	async execute(interaction) {
        const email = interaction.options.getString('email');
        console.log(email);
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`This is checkin command for ${email}`);
	},
};