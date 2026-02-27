document.addEventListener('DOMContentLoaded', () => {
    
    // Sayfadaki tüm "card" sınıfına sahip section'ları seçiyoruz
    const cards = document.querySelectorAll('.card');

    // --- 1. KART: Yazı Değiştirme ---
    if (cards.length > 0) {
        const card1 = cards[0];
        const btn1 = card1.querySelector('button'); // Butonu bul
        
        if (btn1) {
            btn1.addEventListener('click', () => { // Tıklamayı butona ata
                const paragraph = card1.querySelector('.card__text'); 
                if (paragraph) {
                    paragraph.innerHTML = "<strong>Harika!</strong> Eren Civil.";
                }
            });
        }
    }

    // --- 2. KART: Tabloyu İsme Göre Sıralama ---
    if (cards.length > 1) {
        const card2 = cards[1];
        const btn2 = card2.querySelector('button'); // Butonu bul
        
        if (btn2) {
            btn2.addEventListener('click', () => { // Tıklamayı butona ata
                const tbody = card2.querySelector('tbody');
                if (!tbody) return;

                const rows = Array.from(tbody.querySelectorAll('tr'));

                rows.sort((a, b) => {
                    const nameA = a.cells[1].textContent.trim();
                    const nameB = b.cells[1].textContent.trim();
                    return nameA.localeCompare(nameB, 'tr'); 
                });

                rows.forEach(row => tbody.appendChild(row));
            });
        }
    }

    // --- 3. KART: Resmi Değiştirme ---
    if (cards.length > 2) {
        const card3 = cards[2];
        const btn3 = card3.querySelector('button'); // Butonu bul
        
        if (btn3) {
            btn3.addEventListener('click', () => { // Tıklamayı butona ata
                const image = card3.querySelector('img');
                if (image) {
                    // "yeni-resim.jpg" kısmını kendi resminin adıyla değiştir
                    image.src = "resim2.jpg"; 
                    image.alt = "Messi"; 
                }
            });
        }
    }

});