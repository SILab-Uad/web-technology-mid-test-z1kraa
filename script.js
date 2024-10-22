// Fungsi untuk generate password
const generatePassword = (length, options) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  // Mengecek checkbox
  let charset = "";
  if (options.includeUppercase) charset += uppercase;
  if (options.includeLowercase) charset += lowercase;
  if (options.includeNumbers) charset += numbers;
  if (options.includeSpecialChars) charset += specialChars;

  if (charset.length === 0) {
    throw new Error("At least one character type must be selected.");
  }

  // Generate password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};


// Eksplor fungsi agar bisa di akses dalam tes
module.exports = { generatePassword };

// Fungsi untuk salin teks ke clipboard
//const copyToClipboard = (text) => {
//  const tempTextarea = document.createElement("textarea");
//  tempTextarea.value = text;
//  document.body.appendChild(tempTextarea);
//  tempTextarea.select();
//  try {
//    document.execCommand("copy");
//    document.body.removeChild(tempTextarea);
//    return true;
//  } catch (err) {
//    document.body.removeChild(tempTextarea);
//    return false;
//  }
//};

// Event listener untuk generate password
//document.getElementById("generateBtn").addEventListener("click", () => {
//  const length = parseInt(document.getElementById("length").value);
//  const options = {
//   includeUppercase: document.getElementById("includeUppercase").checked,
//    includeLowercase: document.getElementById("includeLowercase").checked,
//   includeNumbers: document.getElementById("includeNumbers").checked,
//    includeSpecialChars: document.getElementById("includeSpecialChars").checked,
//  };

//  const password = generatePassword(length, options);
// document.getElementById("password").textContent = password;
//  document.getElementById("copyMessage").textContent = ""; // Reset pesan
//});

// Event listener untuk salin password
//document.getElementById("copyBtn").addEventListener("click", () => {
//  const password = document.getElementById("password").textContent;
//  if (password && password !== "Pilih setidaknya satu kriteria!") {
//    const success = copyToClipboard(password);
//    document.getElementById("copyMessage").textContent = success
//      ? "Password berhasil disalin!"
//      : "Gagal menyalin password!";
//  } else {
//    document.getElementById("copyMessage").textContent =
//      "Tidak ada password untuk disalin!";
//  }
//});
