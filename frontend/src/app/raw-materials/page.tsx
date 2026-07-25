import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import StatsCards from "./components/StatsCards";
import MaterialsTable from "./components/MaterialsTable";

export default function RawMaterialsPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-7xl p-8">

        <Header />

        <SearchBar />

        <Filters />

        <StatsCards />

        <MaterialsTable />

      </div>
    </main>
  );
}