document.addEventListener('DOMContentLoaded', function() {
    
    fetch('dados.json')
        .then(response => response.json()) 
        .then(data => {
            initGallery(data.photos);
            initTimeline(data.memories);
            initLetters(data.letters);
        })
        .catch(error => console.error('Erro ao buscar o JSON:', error));
    
    const galleryContainer = document.querySelector('.photo-gallery');
    const timelineContainer = document.querySelector('.memory-timeline');
    const lettersContainer = document.querySelector('.letters-section'); 
    
    const specialButton = document.getElementById('specialButton');
    const proposalContainer = document.getElementById('proposalContainer');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const floatingHearts = document.querySelector('.floating-hearts');

    const playMusicButton = document.getElementById('playMusicButton');
    const loveSong = document.getElementById('loveSong');
    let isPlaying = false; 

    function updateLoveCounter() {
        const startDate = new Date('2020-01-15T00:00:00'); 
        
        function calculateTime() {
            const now = new Date();
            const diff = now - startDate;
            
            const seconds = Math.floor(diff / 1000) % 60;
            const minutes = Math.floor(diff / (1000 * 60)) % 60;
            const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
            const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
            
            return { years, months, days, hours, minutes, seconds };
        }
        
        function updateDisplay() {
            const time = calculateTime();
            document.getElementById('years').textContent = time.years;
            document.getElementById('months').textContent = time.months;
            document.getElementById('days').textContent = time.days;
            document.getElementById('hours').textContent = time.hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = time.minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = time.seconds.toString().padStart(2, '0');
        }
        
        updateDisplay();
        setInterval(updateDisplay, 1000);
    }

    function initGallery(photosData) {
        galleryContainer.innerHTML = ''; 
        photosData.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            
            const img = document.createElement('img');
            img.src = photo.url;
            img.alt = photo.caption;
            
            const caption = document.createElement('div');
            caption.className = 'photo-caption';
            caption.textContent = photo.caption;
            
            photoItem.appendChild(img);
            photoItem.appendChild(caption);
            galleryContainer.appendChild(photoItem);
        });
    }

    function initTimeline(memoriesData) {
        timelineContainer.innerHTML = ''; 
        memoriesData.forEach(memory => {
            const memoryItem = document.createElement('div');
            memoryItem.className = 'memory-item';
            
            const memoryDate = document.createElement('div');
            memoryDate.className = 'memory-date';
            memoryDate.textContent = memory.date;
            
            const memoryContent = document.createElement('div');
            memoryContent.className = 'memory-content';
            
            const memoryTitle = document.createElement('h3');
            memoryTitle.textContent = memory.title;
            
            const memoryDesc = document.createElement('p');
            memoryDesc.textContent = memory.description;
            
            memoryContent.appendChild(memoryTitle);
            memoryContent.appendChild(memoryDesc);
            
            memoryItem.appendChild(memoryDate);
            memoryItem.appendChild(memoryContent);
            timelineContainer.appendChild(memoryItem);
        });
    }

    function initLetters(lettersData) {
        lettersData.forEach(letter => {
            const letterDiv = document.createElement('div');
            letterDiv.className = 'love-letter'; 

            const titleH3 = document.createElement('h3');
            titleH3.textContent = letter.title;

            const textP = document.createElement('p');
            textP.textContent = letter.text;

            const signatureP = document.createElement('p');
            signatureP.className = 'signature';
            signatureP.textContent = '— Com amor, eu';

            letterDiv.appendChild(titleH3);
            letterDiv.appendChild(textP);
            letterDiv.appendChild(signatureP);
            
            lettersContainer.appendChild(letterDiv);
        });
    }

    function createFloatingHearts() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            floatingHearts.appendChild(heart);
        }
    }

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.style.opacity = '1';
                confetti.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
                confetti.style.transition = `all ${Math.random() * 3 + 2}s linear`;
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, 0);
        }
    }

    specialButton.addEventListener('click', function() {
        proposalContainer.style.opacity = '1';
        proposalContainer.style.pointerEvents = 'auto';
    });

    yesBtn.addEventListener('click', function() {
        proposalContainer.style.opacity = '0';
        proposalContainer.style.pointerEvents = 'none';
        createConfetti();
        
        const audio = new Audio('musica.mp3');
        audio.play();
        
        specialButton.textContent = 'Eu sabia que você diria sim! ❤️';
    });

    noBtn.addEventListener('mouseover', function() {
        const safeArea = {
            x: window.innerWidth * 0.1,
            y: window.innerHeight * 0.1,
            width: window.innerWidth * 0.8 - this.offsetWidth,
            height: window.innerHeight * 0.8 - this.offsetHeight
        };
        
        const x = Math.random() * safeArea.width + safeArea.x;
        const y = Math.random() * safeArea.height + safeArea.y;
        
        this.style.transition = 'all 0.4s ease-out';
        this.style.position = 'fixed';
        this.style.left = x + 'px';
        this.style.top = y + 'px';
        
        const messages = [
            "Tem certeza?", "Tenta de novo!", "Olha direito!", "Você não quer isso",
            "Errou feio!", "Não é não!", "Cuidado com o que escolhe!",
            "Eu avisei!", "O SIM tá ali →", "Tá difícil hein?"
        ];
        this.textContent = messages[Math.floor(Math.random() * messages.length)];
    });

    noBtn.addEventListener('click', function() {
        this.textContent = "Não adianta, é SIM!";
        setTimeout(() => {
            this.textContent = "Ainda não";
        }, 1000);
    });

    playMusicButton.addEventListener('click', function() {
        if (isPlaying) {
            loveSong.pause();
            isPlaying = false;
            playMusicButton.innerHTML = 'Tocar Nossa Música <i class="fas fa-play"></i>';
        } else {
            loveSong.play();
            isPlaying = true;
            playMusicButton.innerHTML = 'Pausar <i class="fas fa-pause"></i>';
        }
    });
    
    updateLoveCounter();
    createFloatingHearts();
});