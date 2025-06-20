document.addEventListener('DOMContentLoaded', function() {
    // Photo data
    const photos = [
        {
            url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            caption: "Nosso primeiro encontro"
        },
        {
            url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            caption: "Nossa primeira viagem"
        },
        {
            url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            caption: "Pôr do sol juntos"
        },
        {
            url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            caption: "Rindo juntos"
        },
        {
            url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            caption: "De mãos dadas"
        },
        {
            url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            caption: "Nosso abraço"
        }
    ];

    // Love counter - substitua a data pelo início do relacionamento
    function updateLoveCounter() {
        const startDate = new Date('2020-01-15'); // SUA DATA AQUI (ANO-MÊS-DIA)
        const now = new Date();
        
        const diff = now - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const years = Math.floor(days / 365);
        const months = Math.floor((days % 365) / 30);
        const remainingDays = days % 30;
        
        document.getElementById('loveCounter').innerHTML = `
            ${years} anos, ${months} meses e ${remainingDays} dias
        `;
    }
    
    function updateLoveCounter() {
    const startDate = new Date('2020-01-15T00:00:00'); // SUA DATA E HORA AQUI
    
    function calculateTime() {
        const now = new Date();
        const diff = now - startDate;
        
        // Cálculos precisos
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
    
    // Atualiza imediatamente e depois a cada segundo
    updateDisplay();
    setInterval(updateDisplay, 1000);
}

// Inicia o contador quando a página carrega
updateLoveCounter();


    // DOM Elements
    const galleryContainer = document.querySelector('.photo-gallery');
    const timelineContainer = document.querySelector('.memory-timeline');
    const specialButton = document.getElementById('specialButton');
    const proposalContainer = document.getElementById('proposalContainer');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const floatingHearts = document.querySelector('.floating-hearts');

    // Initialize photo gallery
    function initGallery() {
        photos.forEach(photo => {
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

    // Initialize timeline
    function initTimeline() {
        memories.forEach((memory, index) => {
            const memoryItem = document.createElement('div');
            memoryItem.className = 'memory-item';
            
            const memoryDate = document.createElement('div');
            memoryDate.className = 'memory-date';
            memoryDate.textContent = memory.date;
            
            const memoryContent = document.createElement('div');
            memoryContent.className = 'memory-content';
            
            const memoryTitle = document.createElement('h3');
            memoryTitle.className = 'font-bold mb-2';
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

    // Create floating hearts
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

    // Create confetti effect
    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            document.body.appendChild(confetti);
            
            // Animate confetti
            setTimeout(() => {
                confetti.style.opacity = '1';
                confetti.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
                confetti.style.transition = `all ${Math.random() * 3 + 2}s linear`;
                
                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, 0);
        }
    }

    // Event Listeners
    specialButton.addEventListener('click', function() {
        proposalContainer.style.opacity = '1';
        proposalContainer.style.pointerEvents = 'auto';
    });

    yesBtn.addEventListener('click', function() {
        proposalContainer.style.opacity = '0';
        proposalContainer.style.pointerEvents = 'none';
        createConfetti();
        
        // Play romantic sound
        const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        audio.play();
        
        // Change button text
        specialButton.textContent = 'Eu sabia que você diria sim! ❤️';
        specialButton.style.backgroundColor = '#4CAF50';
    });

    // Brincadeira com o botão "Ainda não"
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
            "Tem certeza?",
            "Tenta de novo!",
            "Olha direito!",
            "Você não quer isso",
            "Errou feio!",
            "Não é não!",
            "Cuidado com o que escolhe!",
            "Eu avisei!",
            "O SIM tá ali →",
            "Tá difícil hein?"
        ];
        this.textContent = messages[Math.floor(Math.random() * messages.length)];
    });

    noBtn.addEventListener('click', function() {
        this.textContent = "Não adianta, é SIM!";
        setTimeout(() => {
            this.textContent = "Ainda não";
        }, 1000);
    });

    // Inicializa todos os componentes
    initGallery();  // Garante que as fotos apareçam
    initTimeline();
    createFloatingHearts();
});

// Criação dos corações flutuantes
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartCount = 15; // Quantidade de corações
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        
        // Posição e animação aleatórias
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(heart);
    }
}

// Chame esta função no final do seu DOMContentLoaded
createFloatingHearts();
