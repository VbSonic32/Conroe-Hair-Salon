((tailwind.config = {
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#0A192F',
				secondary: '#4A5568',
				tertiary: '#718096',
				background: '#F0F2F5',
				surface: '#F8FAFC',
				'on-primary': '#F8FAFC',
				'on-secondary': '#F0F2F5',
				'on-surface': '#0A192F',
				'on-surface-variant': '#4A5568',
				outline: '#CBD5E1',
				'outline-variant': '#94A3B8',
				'surface-container': '#E2E8F0',
				'surface-container-low': '#EDF2F7',
				'surface-container-high': '#CBD5E1',
				'surface-container-highest': '#94A3B8',
				'primary-container': '#1B2C44',
				'on-primary-container': '#E2E8F0',
				gold: '#9f6834ff',
			},
			borderRadius: {
				DEFAULT: '0px',
				lg: '0px',
				xl: '0px',
				full: '9999px',
			},
			fontFamily: {
				headline: ['Noto Serif'],
				body: ['Manrope'],
				label: ['Manrope'],
			},
		},
	},
}),
	// ===================== MOBILE MENU =====================
	(window.openMobileMenu = function () {
		const menu = document.getElementById('mobile-menu');
		const btn = document.getElementById('mobile-menu-btn');
		if (!menu || !btn) return;
		menu.classList.add('is-open');
		menu.setAttribute('aria-hidden', 'false');
		btn.classList.add('open');
		btn.setAttribute('aria-expanded', 'true');
		document.body.classList.add('menu-open');
	}),
	(window.closeMobileMenu = function () {
		const menu = document.getElementById('mobile-menu');
		const btn = document.getElementById('mobile-menu-btn');
		if (!menu || !btn) return;
		menu.classList.remove('is-open');
		menu.setAttribute('aria-hidden', 'true');
		btn.classList.remove('open');
		btn.setAttribute('aria-expanded', 'false');
		document.body.classList.remove('menu-open');
	}),
	// ScrollSpy and Smooth Scrolling
	document.addEventListener('DOMContentLoaded', () => {
		const sections = document.querySelectorAll('section[id]');
		const navLinks = document.querySelectorAll('nav a.nav-link[href^="#"]');

		// Close mobile menu on ESC key
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') window.closeMobileMenu();
		});

		const setActive = (id) => {
			navLinks.forEach((link) => {
				link.classList.remove('active');
				if (link.getAttribute('href') === `#${id}`) {
					link.classList.add('active');
				}
			});
		};

		// IntersectionObserver for reliable scroll-spy
		const observer = new IntersectionObserver(
			(entries) => {
				// Find the entry that is currently most visible
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible.length > 0) {
					setActive(visible[0].target.getAttribute('id'));
				}
			},
			{
				// Fire when 20% of a section enters the viewport
				threshold: [0, 0.1, 0.2, 0.3, 0.5],
				rootMargin: '-80px 0px -40% 0px', // Account for fixed nav height at top
			},
		);

		sections.forEach((section) => observer.observe(section));

		// Smooth Scroll + immediate active highlight on click
		navLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				const targetId = link.getAttribute('href').slice(1);
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					// Immediately highlight the clicked link
					setActive(targetId);
					window.scrollTo({
						top: targetElement.offsetTop - 80, // Offset for sticky nav
						behavior: 'smooth',
					});
				}
			});
		});
	}));
