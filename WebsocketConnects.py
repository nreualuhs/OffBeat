import asyncio
import json

from websockets.asyncio.server import serve

# connected = a set of all CLIENTS/think devices that are currently connected to our server
connected = set()
players = []
dict = {}
# websocket = a singular client = THIS IS HOW WE INTERACT WITH THIS CLIENT
async def echo(websocket):
    #register a new ebsocket
    connected.add(websocket)
    try:
        #implement logic
        # every single time we get a message from this specific web socket
        async for message in websocket:
            print(message)
            parsed_message = json.loads(message)
            print(parsed_message)
            if(parsed_message['type'] == "join"):
                newPlayer = parsed_message['message']
                dict[websocket] = newPlayer
                players.append(newPlayer)
                for player in players:
                    print(player)
                    f_string = f'{{"type":"join","message":"{player}"}}'
                    await websocket.send(f_string)

                print(parsed_message['message'], 'just joined the game')
            if(parsed_message['type'] == "start"):
                # generate two rankdom soing links
                print()
                # for conn in connected:
                #     if conn != websocket:
                #         await conn.send(message)
                # return
            # go through all the connected ppl
            for conn in connected:
                if conn != websocket:
                    await conn.send(message)
    finally:
        #unregister
        connected.remove(websocket)
        players.remove(dict[websocket])
        f_string = f'{{"type":"leave","message":"{player}"}}'
        for conn in connected:
            if conn != websocket:
                await conn.send(f_string)

async def main():
    print("running")
    async with serve(echo, "localhost", 5000):
        await asyncio.get_running_loop().create_future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())