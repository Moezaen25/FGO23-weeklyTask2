// Fungsi getDataFromServer mensimulasikan pengambilan data dari server dengan callback
export function getDataFromServer(status, callback) {
  setTimeout(function () {
    if (status) {
      callback(["product 1", "product 2", "product 3"], null);
    } else {
      const err = new Error("Failed to fetch data");
      err.name = "Error";
      callback(null, err);
    }
  }, 3000);
}

// Callback processData untuk menangani hasil dari getDataFromServer
export function processData(data, error) {
  try {
    if (error) {
      throw new error(); // Melempar error jika terjadi kesalahan
    }
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

// Memanggil getDataFromServer dengan callback processData
// getDataFromServer(true, processData);

export default getDataFromServer;

// true, processData
