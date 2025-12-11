import * as c from './components/index';

export default function Main() {
  return (
    <main className="min-h-screen w-full">
      <c.MainPage>
        <c.PeriodicTable />
      </c.MainPage>
    </main>
  );
}
