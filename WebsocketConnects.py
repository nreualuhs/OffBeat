import asyncio
import json

from websockets.asyncio.server import serve

connected = set()

def send_all(message):
    for conn in connected:
        conn.send(message)

def event_handler(websocket, message):
    data = json.loads(message)

    if (data["event"] == "join"):
        send_all(message)
    if (data["event"] == "start"):
        send_all(message)
    if (data["event"] == "create"):
        host = websocket
    else:
        connected.add(websocket)

async def echo(websocket):
    #register a new ebsocket
    connected.add(websocket)
    try:
        #implement logic
        async for message in websocket:
            event_handler(websocket, message)
            print(json.loads(message))
    finally:
        #unregister
        connected.remove(websocket)

async def main():
    print("running")
    async with serve(echo, "localhost", 5000):
        await asyncio.get_running_loop().create_future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())