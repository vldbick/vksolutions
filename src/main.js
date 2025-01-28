import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 50
})

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen">
    <!-- Header -->
    <header class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <a href="#" class="text-2xl font-bold text-primary">VK Solutions</a>
          <div class="hidden md:flex gap-6">
            <a href="#services" class="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" class="hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" class="hover:text-primary transition-colors">Контакты</a>
          </div>
          <button class="btn-primary">Связаться с нами</button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero-gradient min-h-screen flex items-center pt-20 pb-16">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span class="block mb-2">Websites that sell.</span>
            <span class="block mb-2">Designs that inspire.</span>
            <span class="block">Automation that works.</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            VK Solutions: IT-решения, которые двигают ваш бизнес вперёд.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary text-lg px-8 py-4">
              Получить консультацию
            </button>
            <button class="btn-primary text-lg px-8 py-4 bg-white text-primary border-2 border-primary hover:bg-gray-50">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section bg-white" id="services">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Что мы делаем</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${[
            {
              icon: '🌐',
              title: 'Веб-разработка',
              description: 'Создание эффективных и современных сайтов'
            },
            {
              icon: '📈',
              title: 'SEO',
              description: 'Оптимизация для поисковых систем и увеличение трафика'
            },
            {
              icon: '⚡',
              title: 'Автоматизация',
              description: 'Повышение эффективности бизнес-процессов'
            },
            {
              icon: '🎨',
              title: 'Дизайн',
              description: 'Уникальные и вдохновляющие визуальные решения'
            }
          ].map(service => `
            <div class="service-card" data-aos="fade-up">
              <span class="text-4xl mb-4">${service.icon}</span>
              <h3 class="text-xl font-semibold mb-4">${service.title}</h3>
              <p class="text-gray-600">${service.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="section-title">Нам доверяют</h2>
            <div class="flex flex-wrap justify-center gap-8 mb-16 opacity-60">
              <img src="https://placehold.co/120x40" alt="Client Logo" class="h-10">
              <img src="https://placehold.co/120x40" alt="Client Logo" class="h-10">
              <img src="https://placehold.co/120x40" alt="Client Logo" class="h-10">
              <img src="https://placehold.co/120x40" alt="Client Logo" class="h-10">
            </div>
            <blockquote class="text-xl italic text-gray-600">
              "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."
              <footer class="mt-4 font-semibold">— Matthew Webster</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Наши преимущества</h2>
        <div class="grid md:grid-cols-3 gap-8">
          ${[
            {
              icon: '⚡',
              title: 'Быстрая реализация',
              description: 'Оперативное выполнение проектов любой сложности'
            },
            {
              icon: '🎯',
              title: 'Индивидуальный подход',
              description: 'Уникальные решения под ваши задачи'
            },
            {
              icon: '📊',
              title: 'Реальные результаты',
              description: 'Измеримые показатели эффективности'
            }
          ].map(benefit => `
            <div class="benefit-card" data-aos="fade-up">
              <span class="text-4xl mb-4">${benefit.icon}</span>
              <h3 class="text-xl font-semibold mb-4">${benefit.title}</h3>
              <p class="text-gray-600">${benefit.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="section bg-gray-50" id="portfolio">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Кейсы и результаты</h2>
        <div class="grid md:grid-cols-3 gap-8">
          ${[
            {
              image: 'https://placehold.co/400x300',
              title: 'E-commerce платформа',
              description: 'Разработка масштабируемого онлайн-магазина'
            },
            {
              image: 'https://placehold.co/400x300',
              title: 'SEO-продвижение',
              description: 'Рост органического трафика на 300%'
            },
            {
              image: 'https://placehold.co/400x300',
              title: 'Автоматизация процессов',
              description: 'Сокращение времени обработки заказов на 70%'
            }
          ].map(case_study => `
            <div class="case-card" data-aos="fade-up">
              <img src="${case_study.image}" alt="${case_study.title}" class="w-full h-48 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">${case_study.title}</h3>
              <p class="text-gray-600 mb-4">${case_study.description}</p>
            </div>
          `).join('')}
        </div>
        <div class="text-center mt-12">
          <button class="btn-primary">Подробнее о наших проектах</button>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <div class="aspect-w-16 aspect-h-9 mb-8" data-aos="fade-up">
            <img src="https://placehold.co/1920x1080" alt="Company Video Thumbnail" class="w-full rounded-xl shadow-lg">
          </div>
          <p class="text-xl text-gray-600" data-aos="fade-up">
            Посмотрите, как мы делаем бизнес успешным
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section bg-gray-50" id="contact">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <h2 class="section-title" data-aos="fade-up">
            Готовы вывести ваш бизнес на новый уровень?
          </h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="contact-form" data-aos="fade-up">
              <form class="space-y-6">
                <div>
                  <label for="name" class="form-label">Имя</label>
                  <input type="text" id="name" class="form-input" required>
                </div>
                <div>
                  <label for="email" class="form-label">Email</label>
                  <input type="email" id="email" class="form-input" required>
                </div>
                <div>
                  <label for="message" class="form-label">Сообщение</label>
                  <textarea id="message" rows="4" class="form-input"></textarea>
                </div>
                <button type="submit" class="btn-primary w-full">Отправить</button>
              </form>
            </div>
            <div class="contact-info space-y-6" data-aos="fade-up">
              <div>
                <h3 class="text-lg font-semibold mb-2">Email</h3>
                <p class="text-gray-600">hello@vk-solutions.com</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Телефон</h3>
                <p class="text-gray-600">+1 317 711 105</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Адрес</h3>
                <p class="text-gray-600">741 New South Head Rd, Triple Bay SWFW 3148, New York</p>
              </div>
              <div class="flex gap-4">
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">VK Solutions</h3>
            <p class="text-gray-400">Ваш надежный партнер в мире IT</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Навигация</h4>
            <div class="space-y-2">
              <a href="#services" class="block text-gray-400 hover:text-white transition-colors">Услуги</a>
              <a href="#portfolio" class="block text-gray-400 hover:text-white transition-colors">Портфолио</a>
              <a href="#contact" class="block text-gray-400 hover:text-white transition-colors">Контакты</a>
            </div>
          </div>
          <div class="text-right">
            <p class="text-gray-400">© VK Solutions, 2025</p>
            <p class="text-gray-400">Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
`