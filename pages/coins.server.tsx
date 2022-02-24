import { Suspense } from "react";

const cache: any = {};
function fetchData(url: string) {
  if (!cache[url]) {
    throw fetch(url)
      .then((r) => r.json())
      .then((json) => (cache[url] = json.slice(0, 50)));
  }
  return cache[url];
}

function List() {
  const coins = fetchData("https://api.coinpaprika.com/v1/coins");
  console.log(coins);
  return (
    <ul>
      {coins.map((coin: any) => (
        <li key={coin.id}>
          {coin.name} / {coin.symbol}
        </li>
      ))}
    </ul>
  );
}

export default function Coins() {
  return (
    <div>
      <h1>Welcome to RSC</h1>
      <Suspense fallback="Rendering in the server...">
        <List />
      </Suspense>
    </div>
  );
}
