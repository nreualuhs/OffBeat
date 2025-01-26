import asyncio

from websockets.asyncio.server import serve

connected = set()

async def echo(websocket):
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

async def main():
    print("running")
    async with serve(echo, "localhost", 5000):
        await asyncio.get_running_loop().create_future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())