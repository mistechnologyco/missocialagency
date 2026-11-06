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
            hero_title: "SINIRLARI <br>ZORLAYAN DİJİTAL <br>VİZYON.",
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
            work_5_cat: "EMLAK VİRAL",
            work_5_desc: "Lüks Konut Tanıtımı",
            work_6_cat: "TANITIM FİLMİ",
            work_6_desc: "Açılış & Lansman",
            work_7_cat: "SPOR SALONU",
            work_7_desc: "Motivasyon & Reklam Filmi",
            work_8_cat: "GÜZELLİK MERKEZİ",
            work_8_desc: "Sinematik Marka Hikayesi",
            work_9_cat: "HAVUZ & TATİL",
            work_9_desc: "Tanıtım ve Reklam Çekimi",
            work_10_cat: "RESTORAN",
            work_10_desc: "Sinematik Lezzet Tanıtımı",
            work_11_cat: "DİJİTAL İÇERİK",
            work_11_desc: "Marka Tanıtım Filmi",
            work_12_cat: "PRODÜKSİYON",
            work_12_desc: "Kreatif İçerik Üretimi",
            work_13_cat: "VİDEO ÇEKİMİ",
            work_13_desc: "Profesyonel Video Prodüksiyonu",
            work_14_cat: "TANITIM ÇEKİMİ",
            work_14_desc: "Kurumsal Video Prodüksiyon",
            work_15_cat: "DİJİTAL REKLAM",
            work_15_desc: "Etkili Prodüksiyon Çözümleri",
            work_16_cat: "VİDEO İÇERİK",
            work_16_desc: "Görsel Marka Hikayesi",
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
            pack_1_name: "Başlangıç Paketi",
            pack_2_name: "Profesyonel Paket",
            pack_3_name: "Kurumsal Paket",
            best_value: "EN ÇOK TERCİH EDİLEN",
            pack_4_name: "Platinum Paket",
            pack_5_name: "Diamond Paket",
            enterprise: "KURUMSAL ÇÖZÜM",
            price_contact: "Fiyat İçin<br><span>İletişime Geçin</span>",
            price_contact_special: "Özel Teklif İçin<br><span>İletişime Geçin</span>",
            new_p1_f1: "1 Platform Yönetimi",
            new_p1_f2: "Ayda 8 Özel İçerik",
            new_p1_f3: "Profesyonel Profil Tasarımı",
            new_p1_f4: "Profil Optimizasyonu",
            new_p1_f5: "Haftalık Hikâye Tasarımları",
            new_p1_f6: "Temel Reklam Yönetimi",
            new_p1_f7: "Reklam Kampanyası Kurulumu",
            new_p1_f8: "Reklam Performans Takibi",
            new_p1_f9: "Temel Müşteri Desteği",
            new_p1_f10: "Aylık Performans Raporu",
            new_p2_f1: "Tüm Platformlarda Yönetim",
            new_p2_f2: "Ayda 20 Özel İçerik + 8 Reels",
            new_p2_f3: "Profesyonel Video & Prodüksiyon",
            new_p2_f4: "Gelişmiş Reklam Yönetimi",
            new_p2_f5: "Reklam Kampanyası Stratejisi",
            new_p2_f6: "Reklam Optimizasyonu",
            new_p2_f7: "Hedef Kitle & Segmentasyon",
            new_p2_f8: "Influencer Yönetimi",
            new_p2_f9: "Detaylı Rakip Analizi",
            new_p2_f10: "Kurumsal Çekim Desteği",
            new_p2_f11: "Performans & Detaylı Raporlama",
            new_p3_f1: "Uçtan Uca Marka Yönetimi",
            new_p3_f2: "Sınırsız İçerik Üretimi",
            new_p3_f3: "Profesyonel Prodüksiyon (4K)",
            new_p3_f4: "Kurumsal Çekimler",
            new_p3_f5: "360° Reklam & Performans Yönetimi",
            new_p3_f6: "Çok Kanallı Reklam Kampanyaları",
            new_p3_f7: "İleri Düzey Hedefleme & Retargeting",
            new_p3_f8: "Global Kampanya Yönetimi",
            new_p3_f9: "Global Influencer Marketing",
            new_p3_f10: "Global Marka Konumlandırması",
            new_p3_f11: "Reklam Stratejisi Danışmanlığı",
            new_p3_f12: "8K Sinematik Prodüksiyon",
            new_p3_f13: "Özel Yazılım & Teknoloji Desteği",
            new_p3_f14: "24/7 VIP Operasyon Ekibi",
            new_p3_f15: "Markaya Özel Strateji ve Yönetim",
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
            footer_col_1: "Linkler",
            nav_sectors: "Sektörler",
            nav_why_us: "Neden Biz?",
            nav_faq: "SSS",
            hero_badge_text: "Ankara Sosyal Medya & Sinematik Prodüksiyon Ajansı",
            sectors_title: "Sektörel Uzmanlıklarımız",
            sectors_subtitle: "Her sektörün dinamiği farklıdır. Markanızın hedef kitlesine özel kurgulanmış stratejiler ve sinematik çekimler.",
            sec_1_title: "Güzellik & Medikal Estetik",
            sec_1_desc: "Klinikler ve güzellik merkezleri için randevu odaklı Reels videoları, uzman tanıtımları ve dönüşüm sağlayan Meta reklamları.",
            sec_2_title: "Restoran & Gastronomi",
            sec_2_desc: "İştah kabartan sinematik lezzet videoları, mekan atmosferi çekimleri ve lokasyon bazlı yerel müşteri çekme stratejisi.",
            sec_3_title: "Lüks Gayrimenkul & Emlak",
            sec_3_desc: "Prestijli konut ve ticari projeler için 4K drone çekimleri, mimari video turları ve yüksek bütçeli yatırımcı hedeflemesi.",
            sec_4_title: "E-Ticaret & Moda",
            sec_4_desc: "Yüksek ROAS hedefli ürün katalog çekimleri, trend Reels prodüksiyonları ve Google / TikTok / Meta satış kampanyaları.",
            sec_5_title: "Spor & Fitness",
            sec_5_desc: "Yüksek tempolu motivasyon videoları, antrenör içerikleri ve spor salonu üyeliklerini artıran dijital huniler.",
            sec_6_title: "Kurumsal & B2B Firmalar",
            sec_6_desc: "LinkedIn odaklı kurumsal itibar yönetimi, CEO & lider iletişimi ve B2B müşteri kazanımı için profesyonel içerik mimarisi.",
            why_title: "Neden Mis Social Agency?",
            why_subtitle: "Standart ajans kalıplarını kırıyoruz. Sadece gönderi paylaşmıyor, markanızı dijitalde bir arzu nesnesine dönüştürüyoruz.",
            why_1_title: "Sinematik 4K/8K Prodüksiyon",
            why_1_desc: "Telefon çekimi değil; sinema kameraları, profesyonel ışık ve ses ekipmanlarıyla markanızı Hollywood standartlarında görselleştiriyoruz.",
            why_2_title: "Veri ve Algoritma Hakimiyeti",
            why_2_desc: "Instagram, TikTok ve Meta Ads algoritmalarının en son güncellemelerini test ederek içeriklerinizin keşfete ve hedef kitleye düşmesini sağlıyoruz.",
            why_3_title: "Şeffaf Haftalık Raporlama",
            why_3_desc: "Karmaşık terimler yok; net büyüme oranları, harcanan reklam bütçesi, kazanılan müşteri sayısı ve detaylı getiri (ROI) tablosu.",
            why_4_title: "Koç Kuleleri Ankara Merkezi",
            why_4_desc: "Prestijli merkezimizde ekibimizle yüz yüze strateji toplantıları, hızlı saha çekimleri ve birebir müşteri temsilcisi desteği.",
            why_5_title: "%100 Orijinal Marka Stratejisi",
            why_5_desc: "Kopyala-yapıştır şablonlar kullanmıyoruz. Her markaya özel pazar ve rakip analizi yaparak sektörel liderlik inşa ediyoruz.",
            why_6_title: "Performans ve Satış Odaklılık",
            why_6_desc: "Sadece beğeni değil; ciro, satış, form doldurma ve randevu getiren yüksek dönüşümlü reklam ve satış tünelleri kuruyoruz.",
            faq_title: "Sıkça Sorulan Sorular",
            faq_subtitle: "Merak ettiğiniz her şey; şeffaf süreçler, çalışma modelleri ve garantili büyüme yaklaşımımız.",
            faq_q1: "Mis Social Agency hangi hizmetleri sunmaktadır?",
            faq_a1: "Mis Social Agency; profesyonel sosyal medya yönetimi (Instagram, TikTok, LinkedIn, YouTube), 4K ve 8K sinematik video prodüksiyonu, Reels/TikTok çekimleri, Meta Ads (Facebook & Instagram) ve Google Ads reklam yönetimi, influencer marketing, kurumsal kimlik tasarımı ve veri odaklı dijital büyüme danışmanlığı sunmaktadır.",
            faq_q2: "Ankara'da yerinde video ve fotoğraf çekimi yapıyor musunuz?",
            faq_a2: "Evet. Ankara Koç Kuleleri merkezli ekibimiz, kendi profesyonel sinema kameraları, ışık sistemleri ve ses ekipmanlarıyla markanızın lokasyonunda veya anlaşmalı stüdyolarda düzenli çekimler gerçekleştirir.",
            faq_q3: "Sosyal medya yönetimi ve reklam danışmanlığı fiyatları nasıl belirlenir?",
            faq_a3: "Fiyatlandırmalar; markanızın ihtiyaç duyduğu platform sayısı, aylık video çekim ve içerik adedi, prodüksiyon kapsamı ve reklam yönetim bütçesine göre şeffaf paketler (Başlangıç, Profesyonel ve Kurumsal) halinde belirlenir.",
            faq_q4: "Çalışmaya başladıktan sonra ne kadar sürede sonuç alırız?",
            faq_a4: "İlk ay içerisinde profil optimizasyonu, yeni görsel kimlik lansmanı ve ilk viral video serileri yayına girer. Organik etkileşim ilk haftalardan itibaren gözlemlenirken, Meta ve Google reklamlarında optimize edilmiş dönüşüm ve müşteri kazanımı 15-30 gün içinde istikrarlı hale gelir.",
            faq_q5: "Hangi sektörlere özel sosyal medya ve prodüksiyon hizmeti veriyorsunuz?",
            faq_a5: "Güzellik merkezleri ve klinikler, restoran ve gastronomi markaları, lüks gayrimenkul ve konut projeleri, e-ticaret ve moda markaları, spor salonları ile kurumsal B2B firmalar başta olmak üzere birçok sektöre özel niş stratejiler geliştiriyoruz.",
            faq_q6: "Ücretsiz analiz hizmeti neleri kapsıyor?",
            faq_a6: "Mevcut sosyal medya hesaplarınızın tasarımı, etkileşim oranları, hedef kitle uyumu, rakiplerinizle karşılaştırması ve reklam potansiyelinizin detaylı uzman incelemesini içerir. Tamamen ücretsiz ve taahhütsüzdür.",
            contact_hours: "ÇALIŞMA SAATLERİ",
            contact_hours_val: "Pazartesi - Cumartesi: 09:00 - 19:00",
            contact_whatsapp_btn: "WhatsApp ile Hemen Yazın",
            floating_whatsapp_text: "WhatsApp'tan Yazın"
        },
        en: {
            nav_home: "Home",
            nav_references: "References",
            nav_services: "Services",
            nav_pricing: "Pricing",
            nav_about: "About",
            nav_contact: "Contact",
            hero_title: "DIGITAL VISION <br>PUSHING THE BOUNDARIES.",
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
            work_5_cat: "REAL ESTATE VIRAL",
            work_5_desc: "Luxury Housing Promo",
            work_6_cat: "INTRO FILM",
            work_6_desc: "Opening & Launch",
            work_7_cat: "GYM & FITNESS",
            work_7_desc: "Motivation & Commercial",
            work_8_cat: "BEAUTY CENTER",
            work_8_desc: "Cinematic Brand Story",
            work_9_cat: "POOL & RESORT",
            work_9_desc: "Promotion & Advertising",
            work_10_cat: "RESTAURANT",
            work_10_desc: "Cinematic Food Promo",
            work_11_cat: "DIGITAL CONTENT",
            work_11_desc: "Brand Promo Film",
            work_12_cat: "PRODUCTION",
            work_12_desc: "Creative Content Production",
            work_13_cat: "VIDEO SHOOTING",
            work_13_desc: "Professional Video Production",
            work_14_cat: "PROMO SHOOTING",
            work_14_desc: "Corporate Video Production",
            work_15_cat: "DIGITAL AD",
            work_15_desc: "Effective Production Solutions",
            work_16_cat: "VIDEO CONTENT",
            work_16_desc: "Visual Brand Story",
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
            pack_1_name: "Starter Package",
            pack_2_name: "Professional Package",
            pack_3_name: "Corporate Package",
            best_value: "MOST PREFERRED",
            pack_4_name: "Platinum Package",
            pack_5_name: "Diamond Package",
            enterprise: "ENTERPRISE SOLUTION",
            price_contact: "Contact Us<br><span>For Pricing</span>",
            price_contact_special: "Contact Us<br><span>For Special Offer</span>",
            new_p1_f1: "1 Platform Management",
            new_p1_f2: "8 Custom Posts / Month",
            new_p1_f3: "Professional Profile Design",
            new_p1_f4: "Profile Optimization",
            new_p1_f5: "Weekly Story Designs",
            new_p1_f6: "Basic Ad Management",
            new_p1_f7: "Ad Campaign Setup",
            new_p1_f8: "Ad Performance Tracking",
            new_p1_f9: "Standard Customer Support",
            new_p1_f10: "Monthly Performance Report",
            new_p2_f1: "Cross-Platform Management",
            new_p2_f2: "20 Custom Posts + 8 Reels / Month",
            new_p2_f3: "Professional Video & Production",
            new_p2_f4: "Advanced Ad Management",
            new_p2_f5: "Ad Campaign Strategy",
            new_p2_f6: "Continuous Ad Optimization",
            new_p2_f7: "Target Audience & Segmentation",
            new_p2_f8: "Influencer Management",
            new_p2_f9: "In-Depth Competitor Analysis",
            new_p2_f10: "Corporate Shoot Support",
            new_p2_f11: "Detailed Performance Reporting",
            new_p3_f1: "End-to-End Brand Architecture",
            new_p3_f2: "Unlimited Content Production",
            new_p3_f3: "4K Cinema Production",
            new_p3_f4: "On-Site Corporate Shoots",
            new_p3_f5: "360° Ad & Performance Management",
            new_p3_f6: "Omnichannel Ad Campaigns",
            new_p3_f7: "Advanced Retargeting Funnels",
            new_p3_f8: "Global Campaign Management",
            new_p3_f9: "Global Influencer Marketing",
            new_p3_f10: "Global Brand Positioning",
            new_p3_f11: "Ad Strategy Consulting",
            new_p3_f12: "8K Cinematic Production",
            new_p3_f13: "Custom Tech & Software Integration",
            new_p3_f14: "24/7 VIP Operations Team",
            new_p3_f15: "Customized Brand Strategy",
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
            footer_col_1: "Links",
            nav_sectors: "Sectors",
            nav_why_us: "Why Us?",
            nav_faq: "FAQ",
            hero_badge_text: "Ankara Social Media & Cinematic Production Agency",
            sectors_title: "Our Sector Expertise",
            sectors_subtitle: "Every industry has its unique rhythm. Customized strategies and cinematic productions tailored to your target audience.",
            sec_1_title: "Beauty & Medical Aesthetics",
            sec_1_desc: "Appointment-focused Reels videos, expert showcases, and high-converting Meta ads for clinics and beauty centers.",
            sec_2_title: "Restaurant & Gastronomy",
            sec_2_desc: "Mouth-watering cinematic food videos, ambiance highlights, and hyper-local customer acquisition strategies.",
            sec_3_title: "Luxury Real Estate",
            sec_3_desc: "4K drone shoots, architectural video tours, and high-net-worth investor targeting for prestigious properties.",
            sec_4_title: "E-Commerce & Fashion",
            sec_4_desc: "High ROAS product catalog shoots, trending Reels productions, and performance sales campaigns across Meta and TikTok.",
            sec_5_title: "Sports & Fitness",
            sec_5_desc: "High-energy motivation videos, trainer spotlights, and digital funnels boosting gym memberships.",
            sec_6_title: "Corporate & B2B",
            sec_6_desc: "LinkedIn-driven corporate reputation, executive leadership communication, and professional B2B client acquisition.",
            why_title: "Why Mis Social Agency?",
            why_subtitle: "We break agency clichés. We don't just post content; we turn your brand into an object of digital desire.",
            why_1_title: "Cinematic 4K/8K Production",
            why_1_desc: "No smartphone clips; cinema cameras, pro lighting, and studio sound equipment bring Hollywood caliber to your brand.",
            why_2_title: "Data & Algorithm Mastery",
            why_2_desc: "Testing real-time algorithm updates on Instagram, TikTok, and Meta Ads to place your content directly onto Explore and target feeds.",
            why_3_title: "Transparent Weekly Reporting",
            why_3_desc: "No jargon; clear growth charts, ad spend metrics, acquired leads, and comprehensive return on investment (ROI) reports.",
            why_4_title: "Koc Towers Ankara Headquarters",
            why_4_desc: "In-person strategy sessions at our prestigious office, on-site filming agility, and dedicated account management.",
            why_5_title: "100% Bespoke Brand Strategy",
            why_5_desc: "No copy-paste templates. In-depth market and competitor benchmarking to establish undisputed category leadership.",
            why_6_title: "Performance & Revenue Focused",
            why_6_desc: "Beyond vanity likes; high-converting advertising funnels engineered to drive measurable revenue, leads, and appointments.",
            faq_title: "Frequently Asked Questions",
            faq_subtitle: "Everything you need to know about our transparent workflows, models, and guaranteed growth approach.",
            faq_q1: "What services does Mis Social Agency provide?",
            faq_a1: "Mis Social Agency offers professional social media management (Instagram, TikTok, LinkedIn, YouTube), 4K/8K cinematic video production, Reels/TikTok creation, Meta and Google Ads management, influencer marketing, brand identity, and growth consulting.",
            faq_q2: "Do you shoot on-site video and photos in Ankara?",
            faq_a2: "Yes. Our team based in Koc Towers Ankara conducts on-site productions at your venue or partner studios using professional cinema cameras, lights, and audio gear.",
            faq_q3: "How are social media management and ad pricing determined?",
            faq_a3: "Pricing is transparently based on the number of managed platforms, monthly video shoots and content volume, production scope, and advertising management budget across our Starter, Professional, and Enterprise packages.",
            faq_q4: "How soon do we see results after getting started?",
            faq_a4: "Profile optimization and the first viral video campaigns launch within month one. Organic growth starts in early weeks, while Meta and Google ads achieve steady conversion efficiency within 15-30 days.",
            faq_q5: "Which industries do you specialize in?",
            faq_a5: "We specialize in beauty and clinics, restaurants and hospitality, luxury real estate, e-commerce and retail, gyms, and corporate B2B enterprises.",
            faq_q6: "What does the free audit include?",
            faq_a6: "It includes an expert review of your current account visuals, engagement benchmarks, target audience alignment, competitor comparison, and advertising potential. 100% free with no commitment.",
            contact_hours: "WORKING HOURS",
            contact_hours_val: "Monday - Saturday: 09:00 - 19:00",
            contact_whatsapp_btn: "Chat on WhatsApp Now",
            floating_whatsapp_text: "Chat on WhatsApp"
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

    // Initial load
    updateContent();

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

    // --- LAZY LOAD VIDEOS ---
    const lazyVideos = document.querySelectorAll('.lazy-video');
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play().catch(e => console.log('Autoplay prevented:', e));
                } else {
                    entry.target.pause();
                }
            });
        }, { threshold: 0.1 });

        lazyVideos.forEach(video => {
            videoObserver.observe(video);
        });
    } else {
        // Fallback for older browsers
        lazyVideos.forEach(video => video.play().catch(e => {}));
    }

    // --- MOBILE MENU ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close lightbox or menu on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox && lightbox.style.display === 'flex') {
                closeBtn.click();
            }
            if (nav && nav.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });

    // --- FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        if (questionBtn && answer) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
                }
            });
        }
    });
});
