import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import type {
  ClinicPartnerLead,
  ContactLead,
  ConsultationLead,
  LeadType
} from "@/types";

type NewLeadPayload =
  | Omit<ConsultationLead, "id" | "timestamp" | "type"> & { type: "consultation" }
  | Omit<ClinicPartnerLead, "id" | "timestamp" | "type"> & { type: "clinic-partner" }
  | Omit<ContactLead, "id" | "timestamp" | "type"> & { type: "contact" };

const leadsFilePath = path.join(process.cwd(), "data", "leads.json");

export const isValidAustralianPhone = (value: string): boolean => {
  const normalized = value.replace(/\s/g, "");
  return /^(\+61|0)[2-478](\d){8}$/.test(normalized) || /^(\+61|0)4\d{8}$/.test(normalized);
};

const readLeads = async (): Promise<Array<Record<string, unknown>>> => {
  try {
    const file = await fs.readFile(leadsFilePath, "utf-8");
    const parsed = JSON.parse(file);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const appendLead = async (payload: NewLeadPayload) => {
  const leads = await readLeads();

  const { type, ...rest } = payload;

  const entry = {
    id: randomUUID(),
    timestamp: new Date().toISOString(),
    type: type as LeadType,
    ...rest
  };

  leads.push(entry);

  // Replace this local file storage with a production database (e.g. Supabase/PlanetScale).
  await fs.writeFile(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");

  return entry;
};
