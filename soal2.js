const prompt = require('prompt-sync')({sigint: true});
let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
function getTotalQuantity(productCode) {
     let totalQuantity = 0;
     // Mengulangi setiap item dalam data
     for (let item of productBin.data) {
         // Memeriksa apakah productCode sesuai
         if (item.productCode === productCode) {
             totalQuantity += item.quantity; // Menjumlahkan quantity
          }
      }      
    return totalQuantity; //Mengembalikan nilai totalQuantity setelah semua elemen dalam array telah diproses
  }
// Menghitung total quantity untuk productCode "FBR00040101"
let total = getTotalQuantity("FBR00040101");
console.log("Total quantity untuk produk FBR00040101 = ", total); //Mencetak total quantity berdasarkan nilai var total
  