"use client"
import MetricCardGrid from "./metric-card-grid";
import TextCardGrid from "./text-card-grid";
import MediaCardGrid from "./media-card-grid";
import BackButton from "@/components/back-button";
import PendingButton from "./pending-button";
import ResolveButton from "./resolve-button";
import EditableNotes from "./editable-notes";
import { useReports } from "@/utils/report-context";

export default function ReportsPage({ id }) {
  const { data: reports } = useReports();
  const report = reports.find(r => r.id === id);
  return (
    <>
      <BackButton />
      <div className="w-2/3 mx-auto">
        <MetricCardGrid report={report} />
        <TextCardGrid report={report} />
        <MediaCardGrid report={report} />
        <EditableNotes reportId={report.id} initialNotes={report.adminNotes} />
        <div className="flex justify-end gap-5 my-10">
          {(report.status === 'unreviewed') && (<PendingButton reportId={report.id} />)}
          {(report.status !== 'resolved') && (<ResolveButton reportId={report.id} />)}
        </div>
      </div>
    </>
  )
}
