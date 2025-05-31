export interface Template {
    url: string;
    description: string;
    title: string;
    type: string;
  };
  const dashlit: Template = {
    url: "https://dashlit.byarclabs.com/",
    description: "An open source productivity extension for your browser. Imagine a browsing experience where seamless organization meets enhanced productivity.",
    type: "Productivity Tool",
    title: "Dashlit",
  };
  const sifu: Template = {
    url: "https://sifusecurity.com/",
    description: "Real-time fraud prevention for Solana smart contracts secure every transaction, on-chain and beyond",
    type: "Blockchain Security",
    title: "SIFU - Safe Interactions for Users",
  };
  const solpass: Template = {
    url: "https://solpass.byarclabs.com/",
    description: "Manage your passwords with unmatched security and privacy on the Solana blockchain. Experience the future of password management today.",
    type: "Blockchain Application",
    title: "Solpass",
  };
  export const byName = {
    dashlit,
    sifu,
    solpass,
  };
  export const work = Object.values(byName);
