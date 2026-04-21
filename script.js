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
            hero_title: "SINIRLARI <br><span class='gradient-text'>ZORLAYAN</span> DİJİTAL <br>VİZYON.",
            hero_subtitle: "Mis Social Agency, markanızı dijital dünyanın zirvesine taşıyan prodüksiyon ve sosyal medya mimarisini birleştirir.",
            hero_btn_pricing: "Paketleri İncele",
            hero_btn_work: "Referanslarımız",
            nav_free_audit: "Ücretsiz Analiz",
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
            ser_1_desc: "Instagram, Facebook, Twitter ve LinkedIn hesaplarınızı profesyonel olarak yönetiyoruz.",
            ser_2_title: "İçerik Üretimi",
            ser_2_desc: "Markanıza özel yaratıcı içerikler üretiyoruz. Video prodüksiyon ve fotoğraf çekimi.",
            ser_3_title: "Dijital Reklam",
            ser_3_desc: "Google ve Meta Ads platformlarında etkili reklam kampanyaları yönetiyoruz.",
            ser_4_title: "Analiz & Raporlama",
            ser_4_desc: "Detaylı performans analizleri ile başarınızı ölçüyoruz.",
            ser_5_title: "Influencer Marketing",
            ser_5_desc: "Markanıza uygun stratejik iş birlikleri organize ediyoruz.",
            ser_6_title: "Strateji Danışmanlığı",
            ser_6_desc: "Markanız için özel büyüme stratejileri geliştiriyoruz.",
            process_title: "Çalışma Sürecimiz",
            process_subtitle: "Başarıya giden yol haritamız.",
            step_1_title: "Keşif & Analiz",
            step_1_desc: "Markanızı, hedeflerinizi ve rekabet ortamını derinlemesine inceliyoruz.",
            step_2_title: "Strateji",
            step_2_desc: "Veriye dayalı, yaratıcı ve sonuç odaklı sosyal medya yol haritanızı oluşturuyoruz.",
            step_3_title: "Üretim",
            step_3_desc: "Sinematik videolar ve çarpıcı tasarımlarla markanızı görsel bir şölene dönüştürüyoruz.",
            step_4_title: "Yönetim",
            step_4_desc: "İçeriklerinizi doğru zamanda, doğru kitleyle buluşturup etkileşimi yönetiyoruz.",
            step_5_title: "Optimizasyon",
            step_5_desc: "Sonuçları analiz ediyor, performansı artırmak için sürekli iyileştirmeler yapıyoruz.",
            about_title: "Hakkımızda",
            about_desc_1: "Mis Social Agency, markaların dijital dünyada büyümelerine yardımcı olan modern bir sosyal medya ve dijital pazarlama ajansıdır.",
            about_desc_2: "Kreatif yaklaşımımız ve sektör dinamiklerine hakim ekibimizle, her ölçekten markanın dijital hedeflerine ulaşmasına destek oluyoruz.",
            pricing_title: "Fiyat & Paketlerimiz",
            pricing_subtitle: "İhtiyaçlarınıza en uygun paketi seçin.",
            pack_1_name: "Bronze Paket",
            pack_2_name: "Silver Paket",
            pack_3_name: "Gold Paket",
            best_value: "EN ÇOK TERCİH EDİLEN",
            pack_4_name: "Platinum Paket",
            pack_5_name: "Diamond Paket",
            enterprise: "KURUMSAL ÇÖZÜM",
            price_contact: "Fiyat İçin<br><span>İletişime Geçin</span>",
            price_contact_special: "Özel Teklif İçin<br><span>İletişime Geçin</span>",
            p4_f1: "Uçtan Uca Marka Yönetimi",
            p4_f2: "Sınırsız İçerik Üretimi",
            p4_f3: "Profesyonel Prodüksiyon (4K)",
            p5_f1: "Global Marka Mimasyonu",
            p5_f2: "8K Sinematik Prodüksiyon",
            p5_f3: "24/7 VIP Operasyon Ekibi",
            btn_contact: "İletişime Geç",
            btn_request: "Teklif Al",
            contact_title: "İletişime Geçin",
            contact_email: "E-POSTA",
            contact_phone: "TELEFON",
            contact_address: "ADRES",
            contact_addr_val: "Koç Kuleleri No:2/17-18, Çankaya/Ankara",
            footer_desc: "Dijital dünyanın sınırlarını zorlayan sosyal medya mimarı.",
            footer_col_1: "Linkler"
        },
        en: {
            nav_home: "Home",
            nav_references: "References",
            nav_services: "Services",
            nav_pricing: "Pricing",
            nav_about: "About",
            nav_contact: "Contact",
            hero_title: "DIGITAL VISION <br><span class='gradient-text'>PUSHING</span> THE BOUNDARIES.",
            hero_subtitle: "Mis Social Agency combines production and social media architecture to take your brand to the top.",
            hero_btn_pricing: "View Packages",
            hero_btn_work: "Our References",
            nav_free_audit: "Free Audit",
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
            ser_1_desc: "We manage your Instagram, Facebook, Twitter and LinkedIn accounts professionally.",
            ser_2_title: "Content Production",
            ser_2_desc: "We produce creative content for your brand. Video production and photography.",
            ser_3_title: "Digital Advertising",
            ser_3_desc: "We manage effective advertising campaigns on Google and Meta Ads platforms.",
            ser_4_title: "Analysis & Reporting",
            ser_4_desc: "We measure your success with detailed performance analysis.",
            ser_5_title: "Influencer Marketing",
            ser_5_desc: "We organize strategic collaborations suitable for your brand.",
            ser_6_title: "Strategy Consulting",
            ser_6_desc: "We develop special growth strategies for your brand.",
            process_title: "How We Work",
            process_subtitle: "Our roadmap to success.",
            step_1_title: "Discovery & Analysis",
            step_1_desc: "We thoroughly examine your brand, goals, and the competitive environment.",
            step_2_title: "Strategy",
            step_2_desc: "We create your data-driven, creative, and result-oriented social media roadmap.",
            step_3_title: "Production",
            step_3_desc: "We transform your brand into a visual feast with cinematic videos and stunning designs.",
            step_4_title: "Management",
            step_4_desc: "We bring your content to the right audience at the right time and manage engagement.",
            step_5_title: "Optimization",
            step_5_desc: "We analyze the results and make continuous improvements to increase performance.",
            about_title: "About Us",
            about_desc_1: "Mis Social Agency is a modern social media and digital marketing agency that helps brands grow in the digital world.",
            about_desc_2: "We support brands of all sizes to reach their digital goals with our creative approach.",
            pricing_title: "Pricing & Packages",
            pricing_subtitle: "Choose the package that best suits your needs.",
            pack_1_name: "Bronze Package",
            pack_2_name: "Silver Package",
            pack_3_name: "Gold Package",
            best_value: "MOST PREFERRED",
            pack_4_name: "Platinum Package",
            pack_5_name: "Diamond Package",
            enterprise: "ENTERPRISE SOLUTION",
            price_contact: "Contact Us<br><span>For Pricing</span>",
            price_contact_special: "Contact Us<br><span>For Special Offer</span>",
            p4_f1: "End-to-End Brand Management",
            p4_f2: "Unlimited Content Production",
            p4_f3: "Professional Production (4K)",
            p5_f1: "Global Brand Architecture",
            p5_f2: "8K Cinematic Production",
            p5_f3: "24/7 VIP Operation Team",
            btn_contact: "Contact Now",
            btn_request: "Get Offer",
            contact_title: "Get In Touch",
            contact_email: "E-MAIL",
            contact_phone: "PHONE",
            contact_address: "ADDRESS",
            contact_addr_val: "Koc Towers No:2/17-18, Cankaya/Ankara",
            footer_desc: "Social media architect pushing the limits of the digital world.",
            footer_col_1: "Links"
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
                const duration = 2000; // 2 seconds
                const stepTime = 20;
                const increment = target / (duration / stepTime);
                
                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        entry.target.innerText = Math.ceil(count).toLocaleString() + (target > 100 ? "+" : "%");
                        setTimeout(updateCount, stepTime);
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
        card.addEventListener('click', (e) => {
            const videoSrc = card.getAttribute('data-video');
            if(videoSrc) {
                lightboxVideo.src = videoSrc;
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.src = "";
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeBtn.click();
        }
    });

    // --- MOBILE MENU ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        // Basic toggle logic - can be refined with classes
    });
});
