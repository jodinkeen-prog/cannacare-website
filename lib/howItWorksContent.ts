/** Shared copy for homepage section and /how-it-works — single source of truth. */

export const howItWorksSteps = [
  {
    title: "Submit an enquiry",
    description:
      "Complete Cannacare’s short enquiry form with general details and preferences. This step is for navigation only — no medical advice is provided here."
  },
  {
    title: "Cannacare reviews your enquiry",
    description:
      "Our team reviews your enquiry and, where appropriate, helps connect you with a licensed Australian clinic that fits your situation. We do not promise eligibility or any particular outcome."
  },
  {
    title: "Clinical consultation with your clinic",
    description:
      "A registered Australian doctor or clinic team conducts any consultation and makes all clinical decisions — including whether a consultation pathway is suitable — independently of Cannacare."
  }
] as const;
