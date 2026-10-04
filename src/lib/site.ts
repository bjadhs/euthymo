// Public identity and launch links live here. No secrets belong in this file.
export const site = {
  name: "Moodimo",
  url: "https://www.euthymo.com",
  description: "A little space for your whole self. Meet Moodimo, a private mood journal for everyday feelings, meaningful habits, and the moments in between.",
  developerName: "",
  supportEmail: "",
  appStoreUrl: "",
  policyUpdated: "4 October 2026",
  policyReviewed: false,
};

export const hasContact = Boolean(site.developerName && site.supportEmail);
export const launchHref = site.appStoreUrl || "/#coming-soon";
