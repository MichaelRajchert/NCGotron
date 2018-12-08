import discord
import asyncio

class Bot(discord.Client):
    async def on_ready(self):
        print('Logged in as')
        print(self.user.name)
        print(self.user.id)
        print('------')

    async def on_message(self, message):
        # don't respond to ourselves
        if message.author == self.user:
            return
        if message.content.startswith('!test'):
            counter = 0
            tmp = await message.channel.send('Calculating messages...')
            async for msg in message.channel.history(limit=100):
                if msg.author == message.author:
                    counter += 1
            await tmp.edit(content='You have {} messages.'.format(counter))
        
        elif message.content.startswith('!sleep'):
            with message.channel.typing():
                tmp = await message.channel.send("okay I slep lol.")
                await asyncio.sleep(5.0)
                await tmp.edit(content='Done sleeping.')

client = Bot()
client.run('')