// Fungsi fetchData mengembalikan sebuah Promise yang akan resolve setelah 3 detik jika status true,
// atau reject jika status false
function fetchData(status) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (status === true) {
        resolve("Data berhasil diambil");
      } else {
        reject("Gagal mengambil data");
      }
    }, 3000);
  });
}

// Implementasi menggunakan then-catch
fetchData(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// Implementasi menggunakan async/await dengan try-catch
async function fetchDataAsync() {
  try {
    let response = await fetchData(false);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// Panggil fungsi async
// fetchDataAsync();

export default fetchDataAsync;
