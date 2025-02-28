import fetchDataAsync from "./weeklyTask1.js";
import getDataFromServer from "./weeklyTask2.js";
import { processData } from "./weeklyTask2.js";
import fetchAndSortUsers from "./weeklyTask3.js";
import { cekPalindrom, reverseWords } from "./weeklyTask4.js";
import divideAndSort from "./weeklyTask5.js";

function taskMamad() {
  fetchDataAsync();

  getDataFromServer(true, processData);

  fetchAndSortUsers();

  cekPalindrom("malam");
  cekPalindrom("hello");

  reverseWords("Saya Belajar Javascript");

  divideAndSort(5956560159466056);
}

taskMamad();
