import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('все');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const portfolioItems = [
    { id: 1, title: 'Интернет-магазин', category: 'веб', description: 'Современный e-commerce проект', image: 'https://cdn.poehali.dev/projects/65f84921-1bde-4d45-aaf5-de671c0d9aee/files/70085e23-82f1-421e-b7f8-b38abd70b077.jpg' },
    { id: 2, title: 'Корпоративный сайт', category: 'веб', description: 'Презентация для крупной компании', image: 'https://cdn.poehali.dev/projects/65f84921-1bde-4d45-aaf5-de671c0d9aee/files/70085e23-82f1-421e-b7f8-b38abd70b077.jpg' },
    { id: 3, title: 'Брендинг компании', category: 'дизайн', description: 'Полная разработка фирменного стиля', image: 'https://cdn.poehali.dev/projects/65f84921-1bde-4d45-aaf5-de671c0d9aee/files/70085e23-82f1-421e-b7f8-b38abd70b077.jpg' },
    { id: 4, title: 'Мобильное приложение', category: 'разработка', description: 'iOS и Android приложение', image: 'https://cdn.poehali.dev/projects/65f84921-1bde-4d45-aaf5-de671c0d9aee/files/70085e23-82f1-421e-b7f8-b38abd70b077.jpg' },
  ];

  const services = [
    { icon: 'Layout', title: 'Веб-дизайн', description: 'Создаем современные и функциональные интерфейсы' },
    { icon: 'Code', title: 'Разработка', description: 'Программирование любой сложности' },
    { icon: 'Smartphone', title: 'Мобильные приложения', description: 'iOS и Android разработка' },
    { icon: 'Palette', title: 'Брендинг', description: 'Создание уникального фирменного стиля' },
    { icon: 'TrendingUp', title: 'SEO продвижение', description: 'Вывод сайта в топ поисковых систем' },
    { icon: 'BarChart', title: 'Аналитика', description: 'Отслеживание и анализ эффективности' },
  ];

  const reviews = [
    { name: 'Алексей Иванов', company: 'Tech Solutions', text: 'Отличная работа! Проект выполнен в срок и превзошел ожидания.', rating: 5 },
    { name: 'Мария Петрова', company: 'Digital Agency', text: 'Профессиональная команда, всегда на связи. Рекомендую!', rating: 5 },
    { name: 'Дмитрий Сидоров', company: 'StartUp Inc', text: 'Креативный подход и внимание к деталям. Супер результат!', rating: 5 },
  ];

  const blogPosts = [
    { title: 'Тренды веб-дизайна 2024', date: '15 октября 2024', excerpt: 'Разбираем главные тренды современного дизайна', category: 'Дизайн' },
    { title: 'Как выбрать технологию для проекта', date: '10 октября 2024', excerpt: 'Практические советы по выбору стека технологий', category: 'Разработка' },
    { title: 'SEO оптимизация: с чего начать', date: '5 октября 2024', excerpt: 'Базовые шаги для продвижения вашего сайта', category: 'Маркетинг' },
  ];

  const filteredPortfolio = activeFilter === 'все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AKVILON
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Связаться
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </nav>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t animate-slide-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Главная</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Портфолио</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">О нас</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Услуги</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Отзывы</a>
              <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Блог</a>
              <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Контакты</a>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full mt-2">
                Связаться
              </Button>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">Цифровые решения</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Создаем будущее вместе
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Разрабатываем современные веб-сайты, приложения и цифровые продукты, которые помогают бизнесу расти
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать проект
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/65f84921-1bde-4d45-aaf5-de671c0d9aee/files/84e2bce3-8081-4d84-ab16-227b79258e5f.jpg" 
                alt="Hero" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши работы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реализованные проекты, которыми мы гордимся
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['все', 'веб', 'дизайн', 'разработка'].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge>{item.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/65f84921-1bde-4d45-aaf5-de671c0d9aee/files/9b52c7e5-3d5f-48b5-9f39-6e9794835155.jpg" 
                alt="About us" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <Badge className="mb-4">О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Команда профессионалов</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда опытных дизайнеров, разработчиков и маркетологов, которые создают цифровые продукты мирового уровня.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Наша миссия</h3>
                    <p className="text-muted-foreground">Помогать бизнесу достигать целей через инновационные технологии</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Icon name="Award" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Качество</h3>
                    <p className="text-muted-foreground">Каждый проект — это произведение искусства с вниманием к деталям</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Клиентоориентированность</h3>
                    <p className="text-muted-foreground">Ваш успех — наш главный приоритет</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Что мы делаем</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр цифровых решений для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мнения наших партнеров о сотрудничестве
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base">{review.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Блог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Последние статьи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делимся опытом и знаниями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-primary">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы начать проект? Напишите нам!
            </p>
          </div>

          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тема</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="О чем хотите поговорить?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Расскажите о своем проекте..."
                  ></textarea>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>

              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">info@akvilon-ltd.ru</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div className="font-semibold mb-1">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div className="font-semibold mb-1">Адрес</div>
                  <div className="text-sm text-muted-foreground">Москва, Россия</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AKVILON
              </div>
              <p className="text-background/70">
                Создаем цифровые решения для вашего успеха
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-background/70 hover:text-background transition-colors">О нас</a></li>
                <li><a href="#services" className="text-background/70 hover:text-background transition-colors">Услуги</a></li>
                <li><a href="#portfolio" className="text-background/70 hover:text-background transition-colors">Портфолио</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-background/70 hover:text-background transition-colors">Блог</a></li>
                <li><a href="#reviews" className="text-background/70 hover:text-background transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="text-background/70 hover:text-background transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2024 AKVILON Ltd. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;