import { useEffect, useState } from "react";


type Data ={
  symbol:string,
  price:number,
  timestamp:string
}
export default function WebSockets() {

  const [data,setData]=useState<Data|null>(null)
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => console.log("✅ Connected");
    socket.onmessage = (event) => setData(JSON.parse(event.data));
    socket.onclose = () => console.log("❌ Disconnected");

    return () => socket.close();
  }, []);

  return <h1>Real-Time Stock Dashboard <p>{data && data.price}</p></h1>;
}
