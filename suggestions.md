# QR-Bill Suggestions

Old Version: https://docs.google.com/document/d/1ZhQvGNiJeJgxwRqhabtzU9lBGNZ-HvuSIh92bhFvVwI/edit?usp=sharing

The QR-Bill is a tremendous change in the Swiss payment landscape and brings many benefits to both users and merchants.
We however believe that it could be much more than what it currently is by implementing a few marginal changes.

## Suggestion #1 - digital version

Today the specifications of the QR-Bill focus on a paper implementation. While necessary, we believe that an official digital version should also be documented and officialized. This makes sense for digital merchants: they would display the digital QR bill on their checkout page and users can pay directly. In this case, it makes little sense to show an A4-formatted invoice.

## Suggestion #2 - receivables webhook

Introduce the ability for banks to call an address that is in the QR-code informing the issuer of the QR-code that the invoice has been paid (with date, amount and IBAN). This information would typically be in AltPmtInf.AltPmt{1,2}
This allows merchants to get an instant notification when the payment went through and to do real-time debtor management.
An authority managing the different domains would need to be set up.

### QRBill as PIS

PSD2 describes payment initiation services (PIS). In Switzerland, this could be very easily handled via the QRBill if suggestion #2 (and #1) is implemented.

### Payload example

```
{date: '2021-02-25T12:55:54.526Z', amount: 102.45, iban: 'CH4431999123000889012', reference: '210000000003139471430009017'}
```

## Suggestion #3 - mobile version

If the invoice is received by email, the QR code can’t be scanned and so the PDF either needs to be uploaded or a second device is needed. Unpractical and cumbersome.
Suggestion: implement a mobile version that is a link that contains the content of the QR-code (maybe base 64 encoded) and with a protocol prefix, e.g. swissqr://[base64encodedqrbill]. So that, when clicked, the user is being redirected to the UBS/CS/Raiffeisen etc app where the payment can be finalized and then back to the merchant’s page. If “suggestion#2” is implemented, the merchant can wait for the callback and then move the user to the confirmation page.

### URL Example

`swissqr://U1BDCjAyMDAKMQpDSDQ0MzE5OTkxMjMwMDA4ODkwMTIKUwpSb2JlcnQgU2NobmVpZGVyIEFHClJ1ZSBkdSBMYWMKMTI2OAoyNTAxCkJpZWwKQ0gKCgoKCgoKCjE5NDkuNzUKQ0hGClMKUGlhLU1hcmlhIFJ1dHNjaG1hbm4tU2NobnlkZXIKR3Jvc3NlIE1hcmt0Z2Fzc2UKMjgKOTQwMApSb3JzY2hhY2gKQ0gKUVJSCjIxMDAwMDAwMDAwMzEzOTQ3MTQzMDAwOTAxNwpPcmRlciBvZiAxNSBKdW5lIDIwMjAKRVBECi8vUzEvMTAvMTAyMDE0MDkvMTEvMjAwNzAxLzIwLzE0MC4wMDAtNTMvMzAvMTAyNjczODMxLzMxLzIwMDYxNS8zMi83LjcvMzMvNy43OjEzOS40MC80MC8wOjMwCk5hbWUgQVYxOiBVVjtVbHRyYVBheTAwNTsxMjM0NQpOYW1lIEFWMjogWFk7WFlTZXJ2aWNlOzU0MzIx`

(this is the content of https://nexysweb.github.io/qrbill/convert converted to base64)

## Suggestion #4 - JSON structure
The QR-Code content can be a JSON/YML instead of a break-line formatted structure. This would allow for easier and less error-prone QR generation. See https://nexysweb.github.io/qrbill/convert for more details.

## Suggestion #5 - Digital Signature

Enable the issuer to digitally sign the invoice data (QR content) so that the ebanking can ping the issuer (see #2) to verify the integrity of the content. 


## What we already (really) like about the QR-Bill:

* Open and decentralized architecture
* Use of QR code
* Free usage
* Swiss Standard

## Supporters:
* Johan Boissard - johan@nexys.ch
* Raphael Ochsenbein - raphael@akehir.com
* Philipp Wiget 
* Julian Liniger
* Florian Barras
