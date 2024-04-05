
export default async function ServerSideDataFetchingPage() {

  const res = await fetch('https://pokeapi.co/api/v2/pokemon');

  const data = await res.json();

  console.log(data)

  return (
    <div>
      <h1>SS DF</h1>

      { JSON.stringify(data) }

    </div>
  );
}
