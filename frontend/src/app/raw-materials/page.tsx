import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import MaterialsTable from "./components/MaterialsTable";

export default function RawMaterialsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl p-8">

        <Header />

        <StatsCards />

        <div className="mt-8">
          <SearchBar />
        </div>

        <div className="mt-4">
          <Filters />
        </div>

        <div className="mt-8">
          <MaterialsTable />
        </div>

      </div>
    </main>
  );
}