const hiddenData = {
  "schedule": {
    "senin": ["Penjas", "Fisika", "Bahasa Sunda", "PAIBP"],
    "selasa": ["Informatika", "Bahasa Indonesia", "Projek"],
    "rabu": ["Matematika", "Bahasa Inggris", "Seni Musik", "Informatika"],
    "kamis": ["Biologi", "BK", "Kimia", "PKN", "PKWU", "Fisika"],
    "jumat": ["Biologi", "Sejarah", "Kimia"]
  },
  "guru": {
    "Penjas": "Pak Riki Ardianto, S.Pd.",
    "Fisika": "Bu Yanti Cahyanti, S.Pd.",
    "Bahasa Sunda": "Bu Imas Rima, S.Hum.",
    "Sunda": "Bu Imas Rima, S.Hum.",
    "PAIBP": "Pak Dadan Deni, S.Pd.",
    "Informatika": "Pak Ogi Irmawan, S.E.",
    "Bahasa Indonesia": "Bu Lina Nurlena, S.Pd.",
    "Indonesia": "Bu Lina Nurlena, S.Pd.",
    "Matematika": "Pak Riza Rizmanuar, S.Pd.",
    "Bahasa Inggris": "Pak Mulky M Rizal, S.Pd./ Kibutsuji Mulky",
    "inggris": "Pak Mulky M Rizal, S.Pd./ Kibutsuji Mulky",
    "Seni Musik": "Bu Nindiastuti Nurfitria D, S.Pd.",
    "Biologi": "Bu Aliya Suci Rahmadini, S.Pd.",
    "BK": "Pak Adimas Ahmad Siswandi, S.Pd.",
    "Kimia": "Bu Rohaeti, S.Si.",
    "PKN": "Bu Aisyah Nurjanah, S.Pd.",
    "PKWU": "Bu Suhastami Suci Yulaniar, S.Pd.",
    "Sejarah": "Bu Sumiyati, S.Pd."
  },
  "piket": {
    "senin": ["Rijal", "Akmal", "Asep", "Anisa", "Fikri", "Naya"],
    "selasa": ["Dika", "Rofi", "Galih", "Siti Salwa", "Desi"],
    "rabu": ["Zelita", "Restu Paujan", "Angga", "Rizki", "Tia", "Ubay"],
    "kamis": ["Nurani", "M Restu", "Bagja", "Sahira", "Vinza", "Teten"],
    "jumat": ["Rama", "Akbar", "Anugrah", "Zanzan", "Tarmini"]
  }
};

// Function to append messages to the chat
function appendMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.innerHTML = `<div class="message-content">${message}</div>`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}

// Handle user input
document.getElementById('send-button').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value.toLowerCase();
  appendMessage('user', userInput);
  document.getElementById('user-input').value = '';  // Clear input

  // Simple logic to check for specific queries
  if (userInput.includes('student') || userInput.includes('siswa')) {
    appendMessage('bot', "Daftar siswa tidak tersedia."); // Pastikan untuk mendefinisikan daftar siswa jika ingin menampilkannya
  } else if (userInput.includes('schedule') || userInput.includes('jadwal')) {
    const day = Object.keys(hiddenData.schedule).find(d => userInput.includes(d.toLowerCase()));
    if (day) {
      appendMessage('bot', `Jadwal ${day}: ${hiddenData.schedule[day].join(', ')}`);
    } else {
      appendMessage('bot', 'Tidak ada jadwal untuk hari tersebut.');
    }
  } else if (userInput.includes('guru') || userInput.includes('pengajar')) {
    const mapel = Object.keys(hiddenData.guru).find(m => userInput.includes(m.toLowerCase()));
    if (mapel) {
      appendMessage('bot', `Guru mata pelajaran ${mapel}: ${hiddenData.guru[mapel]}`);
    } else {
      appendMessage('bot', 'Mata pelajaran tidak ditemukan.');
    }
  } else if (userInput.includes('piket') || userInput.includes('jadwal piket')) {
    const day = Object.keys(hiddenData.piket).find(d => userInput.includes(d.toLowerCase()));
    if (day) {
      appendMessage('bot', `Jadwal piket ${day}: ${hiddenData.piket[day].join(', ')}`);
    } else {
      appendMessage('bot', 'Tidak ada jadwal piket untuk hari tersebut.');
    }
  } else {
    appendMessage('bot', "Tidak ada informasi yang tersedia.");
  }
});

// Allow pressing Enter to send the message
document.getElementById('user-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('send-button').click();
  }
});
