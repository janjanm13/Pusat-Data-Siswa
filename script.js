const hiddenData = {
    "schedule": {
      "senin": ["Penjas", "Fisika", "Bahasa Sunda", "PAIBP"],
      "selasa": ["Informatika", "Bahasa Indonesia", "Projek"],
      "rabu": ["Matematika", "Bahasa Inggris", "Seni Musik", "Informatika"],
      "kamis": ["Biologi", "BK", "Kimia", "PKN", "PKWU", "Fisika"],
      "jumat": ["Biologi", "Sejarah", "Kimia"]
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
      appendMessage('bot', hiddenData.students.join(', '));
    } else if (userInput.includes('schedule') || userInput.includes('jadwal')) {
      const day = Object.keys(hiddenData.schedule).find(d => userInput.includes(d.toLowerCase()));
      if (day) {
        appendMessage('bot', `jadwal  ${day}: ${hiddenData.schedule[day].join(', ')}`);
      } else {
        appendMessage('bot', 'gaada euy');
      }
    } else {
      appendMessage('bot', "gaada etamah can update, didie ma ngan aya jadwal pelajaran");
    }
  });

  // Allow pressing Enter to send the message
  document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('send-button').click();
    }
  });