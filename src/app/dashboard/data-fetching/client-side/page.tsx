"use client";

import { useEffect, useState } from "react";




export default function ClientSideDataFetchingPage() {

  const [data, setData] = useState<string>('');

  useEffect(() => {

    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(_data => setData(_data));

  }, [])


  return (
    <div>
      <h1>CSDF Page</h1>

      {
        JSON.stringify(data)
      }
    </div>
  );
}