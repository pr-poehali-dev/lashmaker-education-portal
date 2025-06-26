import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-lash-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-6">
              Lash <span className="text-lash-red">Academy</span>
            </h3>
            <p className="font-opensans text-gray-300 mb-6">
              Ведущая онлайн школа лэшмейкеров с бессрочным обучением и
              инновационными технологиями.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 hover:bg-lash-red p-3 rounded-full cursor-pointer transition-colors">
                <Icon name="Instagram" size={20} />
              </div>
              <div className="bg-gray-800 hover:bg-lash-red p-3 rounded-full cursor-pointer transition-colors">
                <Icon name="MessageCircle" size={20} />
              </div>
              <div className="bg-gray-800 hover:bg-lash-red p-3 rounded-full cursor-pointer transition-colors">
                <Icon name="Phone" size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Программы
            </h4>
            <ul className="font-opensans space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-lash-red transition-colors">
                  Базовая программа
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lash-red transition-colors">
                  Профессиональная
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lash-red transition-colors">
                  Максимальная карьера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lash-red transition-colors">
                  Индивидуальная студия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lash-red transition-colors">
                  Программа тренера
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Поддержка
            </h4>
            <ul className="font-opensans space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-lash-red transition-colors">
                  Чат поддержки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lash-red transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lash-red transition-colors">
                  Техническая помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lash-red transition-colors">
                  Обратная связь
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Контакты
            </h4>
            <div className="font-opensans space-y-3 text-gray-300">
              <div className="flex items-center">
                <Icon name="Phone" className="mr-3 text-lash-red" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="mr-3 text-lash-red" size={16} />
                <span>info@lashacademy.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="mr-3 text-lash-red" size={16} />
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="font-opensans text-gray-400">
            © 2024 Lash Academy. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
