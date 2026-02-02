// Local rule-based tutor (no AI, no API, fully offline)

type HistoryItem = { role: string; text: string };

const responses: Record<string, string> = {
  stock:
    "Stocks represent ownership in a company. When you buy a stock, you become a small part-owner. In India, stocks are mainly traded on NSE and BSE. Examples include Reliance, TCS, and Infosys.",

  mutual:
    "Mutual funds pool money from many investors and invest it in stocks, bonds, or both. They are managed by professionals and are good for beginners who don’t want to pick individual stocks.",

  sip:
    "SIP (Systematic Investment Plan) lets you invest a fixed amount regularly (monthly/weekly). It builds discipline and benefits from rupee-cost averaging.",

  nifty:
    "NIFTY 50 is an index of the top 50 companies listed on NSE. It represents the overall Indian stock market performance.",

  sensex:
    "Sensex tracks 30 large Indian companies on BSE. If Sensex rises, it usually means the market is doing well.",

  tax:
    "In India, equity investments held over 1 year attract LTCG tax of 10% above ₹1 lakh. Short-term gains are taxed at 15%.",

  default:
    "Finance is about managing money wisely — saving, investing, and protecting it. You can ask me about stocks, mutual funds, SIP, NIFTY, Sensex, or taxes."
};

function getReply(message: string): string {
  const msg = message.toLowerCase();

  if (msg.includes("stock")) return responses.stock;
  if (msg.includes("mutual")) return responses.mutual;
  if (msg.includes("sip")) return responses.sip;
  if (msg.includes("nifty")) return responses.nifty;
  if (msg.includes("sensex")) return responses.sensex;
  if (msg.includes("tax")) return responses.tax;

  return responses.default;
}

export const generateTutorResponse = async (
  userMessage: string,
  history: HistoryItem[]
): Promise<string> => {
  await new Promise((r) => setTimeout(r, 400)); // fake thinking delay

  return getReply(userMessage);
};
