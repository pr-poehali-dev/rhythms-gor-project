import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const ornamentPattern = (
    <div className="absolute inset-0 opacity-10">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <pattern id="caucasian-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <polygon points="10,2 18,10 10,18 2,10" fill="currentColor" opacity="0.3"/>
          <circle cx="10" cy="10" r="1" fill="currentColor"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#caucasian-pattern)"/>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-amber-50">
      {/* Навигация */}
      <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Music" size={32} className="text-secondary" />
              <div>
                <h1 className="text-2xl font-bold font-serif">РИТМЫ ГОР</h1>
                <p className="text-sm opacity-90">Школа лезгинки и кавказских барабанов</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-secondary transition">Главная</a>
              <a href="#directions" className="hover:text-secondary transition">Направления</a>
              <a href="#teachers" className="hover:text-secondary transition">Преподаватели</a>
              <a href="#schedule" className="hover:text-secondary transition">Расписание</a>
              <a href="#achievements" className="hover:text-secondary transition">Достижения</a>
              <a href="#contacts" className="hover:text-secondary transition">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Героический блок */}
      <section id="home" className="relative py-20 overflow-hidden">
        {ornamentPattern}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-secondary text-black font-medium">🏔️ Санкт-Петербург</Badge>
                <h2 className="text-5xl font-bold text-primary leading-tight">
                  Откройте мир кавказской культуры
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Изучайте традиционную лезгинку и игру на кавказских барабанах 
                  в атмосфере подлинной горской культуры
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на пробное занятие
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть видео
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/cf47c13b-6858-49df-adc5-6f49c8b002dc.jpg" 
                alt="Танцоры лезгинки" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={24} className="text-primary" />
                  <div>
                    <p className="font-bold text-lg">200+</p>
                    <p className="text-sm text-gray-600">учеников</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Направления обучения */}
      <section id="directions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Направления обучения</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Погрузитесь в богатую культуру Кавказа через танец и музыку
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Лезгинка</CardTitle>
                <CardDescription>
                  Традиционный кавказский танец с энергичными движениями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Базовые движения и техника</li>
                  <li>• Работа с партнером</li>
                  <li>• Сценические постановки</li>
                  <li>• Участие в фестивалях</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Music" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-xl">Кавказские барабаны</CardTitle>
                <CardDescription>
                  Изучение игры на дхоле, нагаре и других инструментах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Техника игры на дхоле</li>
                  <li>• Традиционные ритмы</li>
                  <li>• Ансамблевая игра</li>
                  <li>• Импровизация</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Детские группы</CardTitle>
                <CardDescription>
                  Специальные программы для юных танцоров от 5 лет
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Игровая форма обучения</li>
                  <li>• Развитие координации</li>
                  <li>• Культурное воспитание</li>
                  <li>• Детские концерты</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преподаватели */}
      <section id="teachers" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Наши преподаватели</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мастера своего дела с многолетним опытом и глубоким знанием традиций
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <img 
                  src="/img/fc333447-60d5-4910-87ae-716107ad75e0.jpg" 
                  alt="Преподаватель" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl">Амир Магомедов</CardTitle>
                <CardDescription>Мастер лезгинки</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  15 лет опыта, лауреат международных конкурсов
                </p>
                <Badge variant="outline">Хореограф</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <img 
                  src="/img/68d69a52-39c3-4157-8fd7-4a4cbc66630d.jpg" 
                  alt="Преподаватель" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl">Заур Хаджиев</CardTitle>
                <CardDescription>Инструктор по барабанам</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Виртуоз игры на дхоле, участник этно-ансамблей
                </p>
                <Badge variant="outline">Музыкант</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <img 
                  src="/img/cf47c13b-6858-49df-adc5-6f49c8b002dc.jpg" 
                  alt="Преподаватель" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl">Лейла Алиева</CardTitle>
                <CardDescription>Детский хореограф</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Специалист по работе с детьми, педагог высшей категории
                </p>
                <Badge variant="outline">Педагог</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Расписание */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Расписание занятий</h3>
            <p className="text-gray-600">Выберите удобное время для занятий</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" size={20} className="mr-2 text-primary" />
                  Лезгинка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Понедельник, Среда</p>
                    <p className="text-sm text-gray-600">Взрослые группы</p>
                  </div>
                  <Badge>19:00-20:30</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Вторник, Четверг</p>
                    <p className="text-sm text-gray-600">Детские группы</p>
                  </div>
                  <Badge>17:00-18:00</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Суббота</p>
                    <p className="text-sm text-gray-600">Мастер-классы</p>
                  </div>
                  <Badge>14:00-16:00</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Music" size={20} className="mr-2 text-secondary" />
                  Кавказские барабаны
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Понедельник, Пятница</p>
                    <p className="text-sm text-gray-600">Начинающие</p>
                  </div>
                  <Badge>18:00-19:00</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Среда</p>
                    <p className="text-sm text-gray-600">Продвинутые</p>
                  </div>
                  <Badge>20:00-21:30</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Воскресенье</p>
                    <p className="text-sm text-gray-600">Ансамбль</p>
                  </div>
                  <Badge>15:00-17:00</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section id="achievements" className="py-16 bg-primary text-white relative overflow-hidden">
        {ornamentPattern}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Наши достижения</h3>
            <p className="opacity-90">Гордимся успехами наших учеников</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-2">25+</h4>
              <p className="opacity-90">Призовых мест на конкурсах</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-2">200+</h4>
              <p className="opacity-90">Довольных учеников</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-2">8</h4>
              <p className="opacity-90">Лет работы школы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-2">100%</h4>
              <p className="opacity-90">Положительных отзывов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Форма записи */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Запишитесь на пробное занятие</h3>
              <p className="text-gray-600">Первое занятие - бесплатно! Приходите и почувствуйте ритм гор</p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о своих пожеlanиях или задайте вопрос"
                      className="mt-2"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-secondary" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-300">Санкт-Петербург, ул. Культурная, 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-secondary" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-300">+7 (812) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-secondary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">info@ritmygor.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-secondary" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-gray-300">Пн-Вс: 10:00-22:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Следите за нами</h4>
              <div className="flex space-x-4 mb-8">
                <Button variant="outline" size="icon" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
              <p className="text-gray-400">
                Присоединяйтесь к нашему сообществу и узнавайте о новых мероприятиях первыми!
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 РИТМЫ ГОР. Все права защищены.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;