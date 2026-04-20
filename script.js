document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATION SYSTEM ---
    const translations = {
        tr: {
            nav_home: "Ana Sayfa",
            nav_references: "Referanslar",
            nav_services: "Hizmetler",
            nav_pricing: "Paketler",
            nav_about: "Hakkımızda",
            nav_contact: "İletişim",
            hero_title: "Sınırları <br><span class='gradient-text'>Zorlayan</span> Dijital Vizyon.",
            hero_subtitle: "Mis Social Agency, markanızı dijital dünyanın zirvesine taşıyan prodüksiyon ve sosyal medya mimarisini birleştirir.",
            hero_btn_pricing: "Paketleri İncele",
            hero_btn_work: "Referanslarımız",
            stats_followers: "AKTİF TAKİPÇİ ARTIŞI",
            stats_views: "AYLIK GÖRÜNTÜLENME",
            stats_viral: "VİRAL İÇERİK TAKİBİ",
            stats_satisfaction: "MÜŞTERİ MEMNUNİYETİ (%)",
            work_title: "Referans İşlerimiz",
            work_1_cat: "MODA PRODÜKSİYONU",
            work_1_desc: "Kreatif Çekim & Işıklandırma",
            work_2_cat: "SOSYAL MEDYA REKLAMI",
            work_2_desc: "Dinamik İçerik Üretimi",
            work_3_cat: "DİJİTAL STRATEJİ",
            work_3_desc: "Veri Odaklı Analiz",
            work_4_cat: "ETKİNLİK ÇEKİMİ",
            work_4_desc: "Drone & Sinematik Bakış",
            services_title: "Hizmetlerimiz",
            ser_1_title: "Sosyal Medya Yönetimi",
            ser_1_desc: "Stratejik planlama ve topluluk yönetimi ile dijital varlığınızı güçlendiriyoruz.",
            ser_2_title: "İçerik Üretimi",
            ser_2_desc: "Video prodüksiyon ve tasarım ile markanıza özel, etkileyici içerikler üretiyoruz.",
            ser_3_title: "Dijital Reklam",
            ser_3_desc: "ROI odaklı performans pazarlaması ve reklam yönetimi gerçekleştiriyoruz.",
            about_title: "Hakkımızda",
            about_desc_1: "Mis Social Agency, markaların dijital dünyada büyümelerine yardımcı olan modern bir sosyal medya ve dijital pazarlama ajansıdır.",
            pricing_title: "Fiyat & Paketlerimiz",
            pack_1_name: "Bronze Paket",
            pack_2_name: "Silver Paket",
            pack_3_name: "Gold Paket",
            price_contact: "Fiyat İçin İletişime Geçin",
            btn_contact: "İletişime Geç",
            contact_title: "İletişime Geçin"
        },
        en: {
            nav_home: "Home",
            nav_references: "References",
            nav_services: "Services",
            nav_pricing: "Pricing",
            nav_about: "About",
            nav_contact: "Contact",
            hero_title: "Digital Vision <br><span class='gradient-text'>Pushing</span> The Boundaries.",
            hero_subtitle: "Mis Social Agency combines production and social media architecture to take your brand to the top.",
            hero_btn_pricing: "View Packages",
            hero_btn_work: "Our References",
            stats_followers: "ACTIVE FOLLOWER GROWTH",
            stats_views: "MONTHLY VIEWS",
            stats_viral: "VIRAL CONTENT TRACKING",
            stats_satisfaction: "CUSTOMER SATISFACTION (%)",
            work_title: "Our References",
            work_1_cat: "FASHION PRODUCTION",
            work_1_desc: "Creative Shooting & Lighting",
            work_2_cat: "SOCIAL MEDIA AD",
            work_2_desc: "Dynamic Content Production",
            work_3_cat: "DIGITAL STRATEGY",
            work_3_desc: "Data-Driven Analysis",
            work_4_cat: "EVENT SHOOTING",
            work_4_desc: "Drone & Cinematic Perspective",
            services_title: "Our Services",
            ser_1_title: "Social Media Management",
            ser_1_desc: "We strengthen your digital presence with strategic planning and community management.",
            ser_2_title: "Content Production",
            ser_2_desc: "We produce impressive content special for your brand with video production and design.",
            ser_3_title: "Digital Advertising",
            ser_3_desc: "We perform ROI-oriented performance marketing and advertising management.",
            about_title: "About Us",
            about_desc_1: "Mis Social Agency is a modern social media and digital marketing agency that helps brands grow in the digital world.",
            pricing_title: "Pricing & Packages",
            pack_1_name: "Bronze Package",
            pack_2_name: "Silver Package",
            pack_3_name: "Gold Package",
            price_contact: "Contact Us for Price",
            btn_contact: "Contact Now",
            contact_title: "Get In Touch"
        }
    };

    let currentLang = 'tr';
    const langBtn = document.getElementById('lang-switch');

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
        langBtn.innerText = currentLang === 'tr' ? 'EN' : 'TR';
    }

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        updateContent();
    });

    // --- NAVBAR SCROLL ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- COUNTER ANIMATION ---
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                let count = 0;
                const speed = 2000 / target;
                const updateCount = () => {
                    const increment = target / 100;
                    if (count < target) {
                        count += increment;
                        entry.target.innerText = Math.ceil(count).toLocaleString() + (target > 100 ? "+" : "%");
                        setTimeout(updateCount, 10);
                    } else {
                        entry.target.innerText = target.toLocaleString() + (target > 100 ? "+" : "%");
                    }
                };
                updateCount();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // --- VIDEO LIGHTBOX ---
    const lightbox = document.getElementById('videoLightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const closeBtn = document.querySelector('.close-lightbox');

    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoSrc = card.getAttribute('data-video');
            lightboxVideo.src = videoSrc;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.src = "";
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeBtn.click();
        }
    });
});
