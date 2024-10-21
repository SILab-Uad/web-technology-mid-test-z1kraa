// Fungsi untuk generate password
const generatePassword = (length, options) => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+";
  
    // Mengecek checkbox
    let charset = "";
    if (options.lowercase) charset += lowercase;
    if (options.uppercase) charset += uppercase;
    if (options.numbers) charset += numbers;
    if (options.special) charset += specialChars;
  
    if (charset.length === 0) {
      return "Pilih setidaknya satu kriteria!";
    }
  
    // Generate password
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  };
  
  // Fungsi untuk salin teks ke clipboard
  const copyToClipboard = (text) => {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    try {
      document.execCommand("copy");
      document.body.removeChild(tempTextarea);
      return true;
    } catch (err) {
      document.body.removeChild(tempTextarea);
      return false;
    }
  };
  
  // Event listener untuk generate password
  document.getElementById("generate").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const options = {
      lowercase: document.getElementById("lowercase").checked,
      uppercase: document.getElementById("uppercase").checked,
      numbers: document.getElementById("numbers").checked,
      special: document.getElementById("special").checked,
    };
  
    const password = generatePassword(length, options);
    document.getElementById("password").textContent = password;
    document.getElementById("copyMessage").textContent = ""; // Reset pesan
  });
  
  // Event listener untuk salin password
  document.getElementById("copyBtn").addEventListener("click", () => {
    const password = document.getElementById("password").textContent;
    if (password && password !== "Pilih setidaknya satu kriteria!") {
      const success = copyToClipboard(password);
      document.getElementById("copyMessage").textContent = success
        ? "Password berhasil disalin!"
        : "Gagal menyalin password!";
    } else {
      document.getElementById("copyMessage").textContent =
        "Tidak ada password untuk disalin!";
    }
  });
  