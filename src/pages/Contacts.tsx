import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-50">
      <header className="bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Православный детский сад</h1>
                <p className="text-sm text-muted-foreground">во имя Преподобного Серафима Саровского</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => navigate('/')} className="gap-2">
              <Icon name="ArrowLeft" size={16} />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold mb-12 text-center">
            <Icon name="Phone" size={48} className="inline mr-4 text-primary" />
            Контакты
          </h1>
          
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-white to-primary/5 border-2 border-primary/10 shadow-xl">
            <CardContent className="pt-8 space-y-8">
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                  <p className="text-lg text-muted-foreground">г. Нижний Новгород, ул. Шаляпина, 25</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={32} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                  <a href="tel:+78312746311" className="text-lg text-primary hover:underline font-medium">
                    +7 (831) 274-63-11
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={32} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Электронная почта</h3>
                  <a href="mailto:pravoslavdetsad.nn@mail.ru" className="text-lg text-primary hover:underline font-medium break-all">
                    pravoslavdetsad.nn@mail.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                  <p className="text-lg text-muted-foreground">Понедельник - Пятница: 6:30 - 18:30</p>
                  <p className="text-muted-foreground mt-1">12 часов в день</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  ЧДОУ РО "НЕРПЦ (МП)"
                </h3>
                <p className="text-center text-lg">
                  "Православный детский сад во имя Преподобного Серафима Саровского г. Нижнего Новгорода"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
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

export default Contacts;
