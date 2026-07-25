import { RawMaterial } from "./types";

export const rawMaterials: RawMaterial[] = [
  {
    id: 1,
    lotNo: "HP-2026-001",
    name: "Raw Propolis",
    supplier: "Muğla Beekeepers Union",
    warehouse: "B-02",
    quantity: 250,
    remaining: 180,
    unit: "kg",
    coaStatus: "APPROVED",
    analysisStatus: "WAITING",
  },

  {
    id: 2,
    lotNo: "ET-2026-014",
    name: "Ethanol 96%",
    supplier: "Tekkim",
    warehouse: "C-01",
    quantity: 500,
    remaining: 42,
    unit: "L",
    coaStatus: "APPROVED",
    analysisStatus: "COMPLETED",
  },

  {
    id: 3,
    lotNo: "PP-2026-008",
    name: "Bee Pollen",
    supplier: "Aegean Apiary",
    warehouse: "A-04",
    quantity: 100,
    remaining: 8,
    unit: "kg",
    coaStatus: "PENDING",
    analysisStatus: "IN_PROGRESS",
  },
];