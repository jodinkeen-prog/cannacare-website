export type LeadType = "consultation" | "clinic-partner" | "contact";

export interface BaseLead {
  id: string;
  timestamp: string;
  type: LeadType;
}

export interface ConsultationLead extends BaseLead {
  type: "consultation";
  fullName: string;
  email: string;
  phone: string;
  state: string;
  ageConfirmed: boolean;
  reason: string;
  additionalContext?: string;
  preferredContactMethod: "Email" | "Phone";
  consent: boolean;
  disclaimerAccepted: boolean;
  australiaConfirmed: boolean;
}

export interface ClinicPartnerLead extends BaseLead {
  type: "clinic-partner";
  clinicName: string;
  contactName: string;
  email: string;
  phone: string;
  website?: string;
  state: string;
  partnershipInterest: string;
  message: string;
  consent: boolean;
}

export interface ContactLead extends BaseLead {
  type: "contact";
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
}

export interface EducationCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageDescription: string;
}
