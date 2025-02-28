function divideAndSort(number) {
  return parseInt(
    number
      .toString() // Ubah angka menjadi string
      .split("0") // ubah string menjadi array dan pisahkan berdasarkan angka 0
      .map(
        (part) =>
          [...part] // Ubah string menjadi array karakter
            .sort() // Urutkan angka dalam array
            .join("") // Gabungkan kembali menjadi string
      )
      .join("") // Gabungkan semua bagian tanpa pemisah.
  );
}

console.log (divideAndSort(5956560159466056)); // Output: 55566914566956

export default divideAndSort;