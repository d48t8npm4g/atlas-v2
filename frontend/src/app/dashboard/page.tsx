import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import StatCard from "@/components/ui/StatCard";

import ProductionOverview from "@/components/dashboard/ProductionOverview";
import RecentActivities from "@/components/dashboard/RecentActivities";
import LowStockAlert from "@/components/dashboard/LowStockAlert";
import AIWidget from "@/components/dashboard/AIWidget";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <section className="flex-1 p-8 space-y-8">

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-6">

            <StatCard
              title="Raw Materials"
              value="132"
            />

            <StatCard
              title="Active Production"
              value="8"
            />

            <StatCard
              title="Waiting Analysis"
              value="15"
            />

            <StatCard
              title="Today's Shipments"
              value="21"
            />

          </div>

          {/* Main Content */}
          <div className="grid grid-cols-3 gap-6">

            <div className="col-span-2">
              <ProductionOverview />
            </div>

            <div>
              <AIWidget />
            </div>

          </div>

          {/* Bottom */}
          <div className="grid grid-cols-2 gap-6">

            <RecentActivities />

            <LowStockAlert />

          </div>

        </section>
      </div>
    </main>
  );
}