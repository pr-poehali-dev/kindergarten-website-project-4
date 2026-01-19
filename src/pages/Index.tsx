import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const news = [
    {
      date: '15 декабря 2025 г.',
      title: 'Рождественское чудо в преддверии праздника! ✨',
      excerpt: 'В этот светлый период Рождественского поста мы стремимся наполнить наши дни особой заботой, теплом и молитвой...'
    },
    {
      date: '11 декабря 2025 г.',
      title: '"Будущее Земли зависит от тебя"',
      excerpt: 'В православном детском саду состоялась акция "Будущее Земли зависит от тебя", в которой ребята активно участвовали...'
    },
    {
      date: '28 ноября 2025 г.',
      title: 'День Матери',
      excerpt: 'В конце ноября в православном детском саду имени преподобного Серафима Саровского состоялось множество событий...'
    },
    {
      date: '17 ноября 2025 г.',
      title: 'Заседание Ассоциации православных гимназий',
      excerpt: '13-14 ноября в нашем городе состоялось важное событие – заседание Ассоциации православных гимназий ПФО...'
    }
  ];

  const clubs = [
    {
      id: 1,
      name: 'Маленькие художники',
      schedule: 'Вторник, Четверг 15:30-16:00, 16:00-16:30',
      ageGroups: ['3-4', '4-5', '5-6'],
      icon: 'Palette'
    },
    {
      id: 2,
      name: 'Юные конькобежцы',
      schedule: 'Вторник, Четверг 10:50-11:15, 11:25-12:10, 10:00-10:40',
      ageGroups: ['4-5', '5-6', '6-7'],
      icon: 'Snowflake'
    },
    {
      id: 3,
      name: 'Веселый английский',
      schedule: 'Понедельник, Среда 15:30-16:00, 16:00-16:30',
      ageGroups: ['5-6', '6-7'],
      icon: 'BookOpen'
    },
    {
      id: 4,
      name: 'Адаптивная физкультура "Массаж"',
      schedule: 'Курс 10 занятий',
      ageGroups: ['3-4', '4-5', '5-6', '6-7'],
      icon: 'Heart'
    },
    {
      id: 5,
      name: 'Логоритмика',
      schedule: 'Вторник, Четверг 9:15-9:45, 9:45-10:15',
      ageGroups: ['3-4', '4-5'],
      icon: 'Music'
    }
  ];

  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');

  const filteredClubs = selectedAgeGroup === 'all' 
    ? clubs 
    : clubs.filter(club => club.ageGroups.includes(selectedAgeGroup));

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Православный детский сад</h1>
                <p className="text-sm text-muted-foreground">во имя Преподобного Серафима Саровского</p>
              </div>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-2">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'about', label: 'О садике', icon: 'Building' },
              { id: 'gallery', label: 'Галерея', icon: 'Images' },
              { id: 'news', label: 'Новости', icon: 'Newspaper' },
              { id: 'clubs', label: 'Кружки', icon: 'Stars' },
              { id: 'teachers', label: 'Педагогам', icon: 'GraduationCap' },
              { id: 'parents', label: 'Родителям', icon: 'Users' },
              { id: 'contacts', label: 'Контакты', icon: 'Phone' }
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon} size={16} />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-20">
        <section id="home" className="animate-fade-in">
          <div className="text-center py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ДОБРО ПОЖАЛОВАТЬ НА САЙТ!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Работает с 6:30 до 18:30 часов (12 часов)
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2" onClick={() => scrollToSection('clubs')}>
                <Icon name="Calendar" size={20} />
                Расписание кружков
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => scrollToSection('contacts')}>
                <Icon name="Phone" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>

        <section id="news" className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Newspaper" size={32} className="inline mr-3 text-primary" />
            Наши новости
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 border-primary/10">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="secondary">{item.date}</Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.excerpt}</CardDescription>
                  <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="clubs" className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Stars" size={32} className="inline mr-3 text-secondary" />
            Кружки и занятия
          </h2>

          <div className="mb-8">
            <p className="text-center text-muted-foreground mb-4">Фильтр по возрастным группам:</p>
            <Tabs value={selectedAgeGroup} onValueChange={setSelectedAgeGroup} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-white shadow-sm">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="3-4">3-4 года</TabsTrigger>
                <TabsTrigger value="4-5">4-5 лет</TabsTrigger>
                <TabsTrigger value="5-6">5-6 лет</TabsTrigger>
                <TabsTrigger value="6-7">6-7 лет</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club) => (
              <Card key={club.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-gradient-to-br from-white to-primary/5">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                    <Icon name={club.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-center text-xl">{club.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Расписание:</p>
                    <p className="font-medium">{club.schedule}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Возрастные группы:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {club.ageGroups.map((age) => (
                        <Badge key={age} variant="outline" className="bg-secondary/20">
                          {age} {age.includes('-') ? 'года' : 'лет'}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4 gap-2">
                    <Icon name="Info" size={16} />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredClubs.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Нет кружков для выбранной возрастной группы</p>
            </div>
          )}
        </section>

        <section id="about" className="animate-fade-in">
          <Card className="bg-gradient-to-br from-white to-accent/10 border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                <Icon name="Building" size={32} className="inline mr-3 text-primary" />
                О нашем детском саде
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-lg">
                ЧДОУ РО "НЕРПЦ (МП)" "Православный детский сад во имя Преподобного Серафима Саровского г. Нижнего Новгорода"
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <Icon name="Clock" size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">6:30 - 18:30</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <Icon name="Users" size={40} className="mx-auto mb-4 text-secondary" />
                  <h3 className="font-semibold mb-2">Профессиональные педагоги</h3>
                  <p className="text-muted-foreground">Опытный коллектив</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <Icon name="Heart" size={40} className="mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-2">Духовно-нравственное воспитание</h3>
                  <p className="text-muted-foreground">Православные традиции</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contacts" className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Phone" size={32} className="inline mr-3 text-primary" />
            Контакты
          </h2>
          
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-white to-primary/5 border-2 border-primary/10">
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Нижний Новгород, ул. Шаляпина, 25</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <a href="tel:+78312746311" className="text-primary hover:underline">
                    +7 (831) 274-63-11
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Электронная почта</h3>
                  <a href="mailto:pravoslavdetsad.nn@mail.ru" className="text-primary hover:underline">
                    pravoslavdetsad.nn@mail.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Понедельник - Пятница: 6:30 - 18:30</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white mt-20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Православный детский сад во имя Преподобного Серафима Саровского
          </h3>
          <p className="mb-2">г. Нижний Новгород, ул. Шаляпина, 25</p>
          <p className="mb-2">Телефон: +7 (831) 274-63-11</p>
          <p className="mb-6">Email: pravoslavdetsad.nn@mail.ru</p>
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm opacity-90">
              © 2025 ЧДОУ РО "НЕРПЦ (МП)" "Православный детский сад во имя Преподобного Серафима Саровского г. Нижнего Новгорода"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
