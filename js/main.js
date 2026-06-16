/* ==================== MAIN JAVASCRIPT ==================== */
document.addEventListener('DOMContentLoaded', function() {

    // ==================== HEADER SCROLL ====================
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (currentScroll > lastScroll && currentScroll > 300) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });

    // ==================== MOBILE MENU ====================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ==================== ACTIVE NAV LINK ====================
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 200;
            const sectionId = section.getAttribute('id');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) link.classList.add('active');
                });
            }
        });
    });

    

    // ==================== CONTACT FORM ====================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            
            if (!name || !phone || !service) {
                alert('يرجى تعبئة جميع الحقول المطلوبة');
                return;
            }
            
            const message = encodeURIComponent(
                `مرحباً،\n\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالخدمة المطلوبة: ${service}\n\nمرسل من موقع Crystal Dental Center`
            );
            window.open(`https://wa.me/96522261777?text=${message}`, '_blank');
            
            contactForm.reset();
            alert('تم إرسال استفسارك بنجاح! سيتم التواصل معك قريباً.');
        });
    }

    console.log('🦷 Crystal Dental Center - Website Ready');
    console.log('📍 حولي، الكويت');
    console.log('✨ ارفع على Vercel وشارك الرابط مع العميل');
});