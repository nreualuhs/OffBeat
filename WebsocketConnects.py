import asyncio
import websockets

connected = set()

#websocket handler takes websocket connection(between client/server)
async def echo(websocket, path):
    #register a new ebsocket
    connected.add(websocket)
    try:
        #implement logic
        async for message in websocket:
            for conn in connected:
                if conn != websocket:
                    await conn.send(f'New message for you: {message}')
    finally:
        #unregister
        connected.remove(websocket)

start_server = websockets.serve(echo, 'localhost',8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()