import discord
from random import randint
from random import random
from discord.ext import commands

description = 'The NCG bot built for NCG kthxbye'

bot = commands.Bot(command_prefix = '!', description=description)

@bot.event
async def on_ready():
    print('Bot started as')
    print(bot.user.name)
    print(bot.user.id)

@bot.command(description="Adds 2 numbers together, duh.")
async def add(ctx, left: int, right: int):
    """Adds two numbers together."""
    await ctx.send(left+right)

@bot.command(description="Rolls a random number, when given a max value")
async def roll(ctx, limit: int):
    """Rolls a random number, when given a max value"""
    await ctx.send(randint(0, limit))
    
@bot.command(description="Selects a random item based on given items")
async def choose(ctx, *choices: str):
    await ctx.send(random.choice(choices))

bot.run('')
