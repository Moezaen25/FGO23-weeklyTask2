// Deteksi Palindrom
export function cekPalindrom(text) {
  // Ubah teks menjadi huruf kecil agar case-insensitive
  text = text.toLowerCase();

  // Bandingkan dengan teks yang dibalik
  return text ===
    text
      .split("") // ubah string menjadi array dan pisahkan array menggunakan string kosong
      .reverse() // Reverse array yang telah dipisahkan string kosong
      .join("") // ubah array reverse menjadi bentuk string dan pisahkan menggunakan string kosong
    ? "Palindrom"
    : "Bukan Palindrom";
}

// Contoh penggunaan
console.log(cekPalindrom("malam")); // Output: Palindrom
console.log(cekPalindrom("hello")); // Output: Bukan Palindrom

cekPalindrom;

// Reverse Word
export function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

// Contoh penggunaan
console.log(reverseWords("Saya Belajar Javascript")); // Output: Javascript Belajar Saya


reverseWords;