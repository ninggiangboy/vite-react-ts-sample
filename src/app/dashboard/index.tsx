import BreadcrumbSetter from "@/components/breadcrumb-setter";
import { SectionCards } from "./_components/section-cards";
import { ChartAreaInteractive } from "./_components/chart-area-interactive";
import { DataTable } from "./_components/data-table";
import data from "./data.json";

export default function DashboardPage() {
  return (
    <>
      <BreadcrumbSetter items={[{ name: "Dashboard" }]} />
      <main className="mx-4 flex flex-col gap-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable data={data} />
      </main>
    </>
  );
}
