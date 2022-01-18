import CryptoJS from "crypto-js";
export const getEncryptedRequestBody = (requestBody) => {
  console.log("request body before :", requestBody);
  //const mainKey = "mZABZ7itIZjMG81reBgrywId90r0cBuO";
  let requestBodyString;
  if (typeof requestBody !== "string")
    requestBodyString = JSON.stringify(requestBody);
  else requestBodyString = requestBody;

  console.log("request body after converting toString :", requestBodyString);

  const cipher = CryptoJS.AES.encrypt(
    requestBodyString,
    CryptoJS.enc.Utf8.parse(process.env.REACT_APP_KEY),
    {
      iv: CryptoJS.enc.Utf8.parse("BSonK88FyMYQGSAi"),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    }
  );
  console.log("request body after encryption :", cipher.toString());
  return cipher.toString();
};
export const getRequestId = () => {
  const fiveDigitRandomNumber = Math.floor(Math.random() * 90000) + 10000;
  const timeInMilliseconds = Date.now();
  const commonId = "kUL7MxSu2S";

  return getEncryptedRequestBody(
    `${fiveDigitRandomNumber}.${timeInMilliseconds}.${commonId}`
  );
};
