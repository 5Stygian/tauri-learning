import * as c from './components/index';

import { ELEMENTS } from './data/elements';

export default function Index() {
  console.log(ELEMENTS);

  return (
    <main className="min-h-screen w-full bg-zinc-950 text-white">
      <c.MainPage>
        <c.PeriodicTable />
        <c.ElementCard />
      </c.MainPage>
      <c.SourceCode />
      <c.License />
    </main>
  );
}
