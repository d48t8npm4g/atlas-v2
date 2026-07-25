export type CoaStatus =
  | "APPROVED"
  | "PENDING"
  | "REJECTED";

export type AnalysisStatus =
  | "WAITING"
  | "IN_PROGRESS"
  | "COMPLETED";

export interface RawMaterial {
  id: number;

  lotNo: string;

  name: string;

  supplier: string;

  warehouse: string;

  quantity: number;

  remaining: number;

  unit: string;

  coaStatus: CoaStatus;

  analysisStatus: AnalysisStatus;
}