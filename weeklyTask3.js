// Fungsi untuk mengambil data user dari API dan mengurutkannya berdasarkan domisili
async function fetchAndSortUsers() {
  try {
    // Ambil data dari API
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Periksa jika respons tidak OK
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari server");
    }

    // Ubah response menjadi JSON
    let users = await response.json();

    // Ambil hanya nama dan domisili (kota)
    let userData = users.map((user) => ({
      name: user.name,
      domicile: user.address.city,
    }));

    // Urutkan berdasarkan domisili secara ascending (A-Z)
    userData.sort((a, b) => a.domicile.localeCompare(b.domicile));

    // Cetak hasil ke console
    console.log("Data pengguna yang sudah diurutkan:", userData);
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
  }
}

// Panggil fungsi untuk mengambil dan mengurutkan data
// fetchAndSortUsers();

export default fetchAndSortUsers;
