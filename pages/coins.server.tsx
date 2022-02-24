import { Suspense } from "react";

let finished = false;
function List() {
  if (!finished) {
    throw Promise.all([
      new Promise((resolve) => setTimeout(resolve, 15000)),
      new Promise((resolve) => {
        finished = true;
        resolve("");
      }),
    ]);
  }
  return <ul>xxxxx</ul>;
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
