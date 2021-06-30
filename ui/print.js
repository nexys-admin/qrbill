import * as B from "../_snowpack/pkg/@bbit/swiss-qr-bill.js";
export const saveByteArray = (fileName, blob, type) => {
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};
const print = (data) => {
  const BB = new B.QRBillGenerator();
  if (data.UltmtDtr) {
    const qrBill = {
      account: data.CdtrInf.IBAN,
      amount: Number(data.CcyAmt.Amt),
      currency: B.QRBillCurrency.CHF,
      creditor: {
        type: B.QRBillAddressType.UNSTRUCTURED,
        name: data.CdtrInf.Cdtr.Name,
        address: data.CdtrInf.Cdtr.StrNameOrAdrLine1 + " " + data.CdtrInf.Cdtr.StrNameOrAdrLine2,
        postalCode: data.CdtrInf.Cdtr.PstCd || "",
        locality: data.CdtrInf.Cdtr.TmwNm || "",
        country: data.CdtrInf.Cdtr.Ctry
      },
      reference: data.RmtInf.Ref,
      debtor: {
        type: B.QRBillAddressType.UNSTRUCTURED,
        name: data.UltmtDtr.Name || "",
        address: data.UltmtDtr.StrNameOrAdrLine1 + " " + data.UltmtDtr.StrNameOrAdrLine2,
        postalCode: data.UltmtDtr.PstCd || "",
        locality: data.UltmtDtr.TmwNm || "",
        country: data.UltmtDtr.Ctry
      },
      unstructeredMessage: data.RmtInf.AddInf.StrdBkgInf,
      billInformation: data.AltPmtInf ? data.AltPmtInf.AltPmt1 : void 0,
      language: B.QRBillLanguage.EN
    };
    BB.generate(qrBill).then((x) => saveByteArray("qr-bill.pdf", x, "application/json"));
  }
};
export default print;
