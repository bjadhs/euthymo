// Public identity and launch links live here. No secrets belong in this file.
export const site = {
  name: "Euthymo",
  url: "https://www.euthymo.com",
  description: "A little space for your whole self. Meet Euthymo, a private mood journal for everyday feelings, meaningful habits, and the moments in between.",
  developerName: "bijbrin",
  supportEmail: "bijbrin@gmail.com",
  appStoreUrl: "",
  policyUpdated: "5 October 2026",
  policyReviewed: true,
};

export const hasContact = Boolean(site.developerName && site.supportEmail);
export const launchHref = site.appStoreUrl || "/#coming-soon";
