import * as B from "@bbit/swiss-qr-bill";
import * as T from "../lib/type";

/**
 * @param reportName https://stackoverflow.com/questions/35038884/download-file-from-bytes-in-javascript
 * @see fileName: filename of out
 * @param byte
 * @param type
 */
export const saveByteArray = (fileName: string, blob: Blob, type: string) => {
  //const blob = new Blob([byte], { type });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  link.download = fileName;
  link.click();
};

const print = (data: T.QR) => {
  const BB = new B.QRBillGenerator();

  if (data.UltmtDtr) {
    const qrBill: B.IQRBill = {
      account: data.CdtrInf.IBAN,
      amount: Number(data.CcyAmt.Amt),
      currency: B.QRBillCurrency.CHF, //data.CcyAmt.Ccy as B.QRBillCurrency,
      creditor: {
        type: B.QRBillAddressType.UNSTRUCTURED,
        //  data.CdtrInf.Cdtr.AdrTp === "S"
        //  ? B.QRBillAddressType.STRUCTURED
        //: B.QRBillAddressType.STRUCTURED,
        name: data.CdtrInf.Cdtr.Name,
        address:
          data.CdtrInf.Cdtr.StrNameOrAdrLine1 +
          " " +
          data.CdtrInf.Cdtr.StrNameOrAdrLine2,
        postalCode: data.CdtrInf.Cdtr.PstCd,
        locality: data.CdtrInf.Cdtr.TmwNm,
        country: data.CdtrInf.Cdtr.Ctry,
      },
      reference: data.RmtInf.Ref,
      debtor: {
        type: B.QRBillAddressType.UNSTRUCTURED,
        name: data.UltmtDtr.Name || "",
        address:
          data.UltmtDtr.StrNameOrAdrLine1 +
          " " +
          data.UltmtDtr.StrNameOrAdrLine2,
        postalCode: data.UltmtDtr.PstCd || "",
        locality: data.UltmtDtr.TmwNm || "",
        country: data.UltmtDtr.Ctry,
      },
      unstructeredMessage: data.RmtInf.AddInf.StrdBkgInf,
      billInformation: data.AltPmtInf ? data.AltPmtInf.AltPmt1 : undefined,
      language: B.QRBillLanguage.EN,
    };
    BB.generate(qrBill).then((x) =>
      saveByteArray("qr-bill.pdf", x as Blob, "application/json")
    );
  }
};

export default print;
