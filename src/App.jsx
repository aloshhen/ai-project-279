import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// SafeIcon component - handles all Lucide icons
const SafeIcon = ({ name, size = 24, className = '', color }) => {
  const iconMap = {
    'shopping-cart': 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    'trash': 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
    'plus': 'M12 4v16m8-8H4',
    'minus': 'M20 12H4',
    'x': 'M6 18L18 6M6 6l12 12',
    'package': 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    'truck': 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
    'globe': 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    'sparkles': 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    'help-circle': 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    'check-circle': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    'send': 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
    'menu': 'M4 6h16M4 12h16M4 18h16',
    'filter': 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
    'heart': 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    'star': 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    'skull': 'M12 14c2.21 0 4-1.79 4-4V7a4 4 0 00-8 0v3c0 2.21 1.79 4 4 4zm0 0v6m-6-3h12',
    'zap': 'M13 10V3L4 14h7v7l9-11h-7z'
  }

  const path = iconMap[name] || iconMap['help-circle']

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ color: color }}
    >
      <path d={path} />
    </svg>
  )
}

// Sock data
const SOCKS_DATA = [
  {
    id: 1,
    name: 'Грязный Рабочий',
    category: 'dirty',
    price: 299,
    description: 'Аутентичные грязные носки с запахом труда. Идеальны для тех, кто хочет показать, что работает.',
    image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&q=80',
    badge: '🔥 Хит',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Дырявый Классик',
    category: 'holey',
    price: 199,
    description: 'Носки с продуманными отверстиями для вентиляции. Мода 2024!',
    image: 'https://images.unsplash.com/photo-1610395610768-01e32b73d911?w=400&q=80',
    badge: '✨ Новинка',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Белоснежный Идеал',
    category: 'white',
    price: 399,
    description: 'Идеально белые носки. На 5 минут. Пока вы их не надели.',
    image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&q=80',
    badge: '👔 Классика',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Радужный Взрыв',
    category: 'colorful',
    price: 449,
    description: 'Цветные носки для тех, кто не боится быть замеченным. Даже в толпе.',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&q=80',
    badge: '🌈 Яркий',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Вонючий Монстр',
    category: 'smelly',
    price: 599,
    description: 'Премиум вонючие носки. Отпугивают врагов и привлекают любопытных.',
    image: 'https://images.unsplash.com/photo-1616953291509-88a2e9d02d3d?w=400&q=80',
    badge: '💀 Экстрим',
    rating: 4.2
  },
  {
    id: 6,
    name: 'Одинокий Романтик',
    category: 'single',
    price: 99,
    description: 'Один носок без пары. Ищет свою вторую половинку. Вы поможете?',
    image: 'https://images.unsplash.com/photo-1616606103915-dea7be788566?w=400&q=80',
    badge: '💔 Сингл',
    rating: 4.6
  },
  {
    id: 7,
    name: 'Красивый Лжец',
    category: 'beautiful',
    price: 799,
    description: 'На вид - роскошь. На деле - синтетика. Но какая красота!',
    image: 'https://images.unsplash.com/photo-1619451683605-57b6e51bb2e0?w=400&q=80',
    badge: '💎 Люкс',
    rating: 4.4
  },
  {
    id: 8,
    name: 'Дырявый Дизайнер',
    category: 'holey',
    price: 899,
    description: 'Дизайнерские дырки от именитого бренда. Дырка в дырке.',
    image: 'https://images.unsplash.com/photo-1610395610768-01e32b73d911?w=400&q=80',
    badge: '🎨 Арт',
    rating: 4.3
  }
]

const CATEGORIES = [
  { id: 'all', name: 'Все', icon: 'package' },
  { id: 'dirty', name: 'Грязные', icon: 'skull' },
  { id: 'holey', name: 'Дырявые', icon: 'zap' },
  { id: 'white', name: 'Белые', icon: 'sparkles' },
  { id: 'colorful', name: 'Цветные', icon: 'heart' },
  { id: 'smelly', name: 'Вонючие', icon: 'skull' },
  { id: 'single', name: 'Без пары', icon: 'heart' }
]

// Web3Forms hook
const useFormHandler = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e, accessKey) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)

    const formData = new FormData(e.target)
    formData.append('access_key', accessKey)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        e.target.reset()
      } else {
        setIsError(true)
        setErrorMessage(data.message || 'Что-то пошло не так')
      }
    } catch (error) {
      setIsError(true)
      setErrorMessage('Ошибка сети. Попробуйте снова.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    setIsError(false)
    setErrorMessage('')
  }

  return { isSubmitting, isSuccess, isError, errorMessage, handleSubmit, resetForm }
}

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { isSubmitting, isSuccess, isError, errorMessage, handleSubmit, resetForm } = useFormHandler()
  const ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY' // Replace with your Web3Forms Access Key from https://web3forms.com

  const filteredSocks = selectedCategory === 'all'
    ? SOCKS_DATA
    : SOCKS_DATA.filter(sock => sock.category === selectedCategory)

  const addToCart = (sock) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === sock.id)
      if (existing) {
        return prev.map(item =>
          item.id === sock.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...sock, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (sockId) => {
    setCart(prev => prev.filter(item => item.id !== sockId))
  }

  const updateQuantity = (sockId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === sockId) {
        const newQuantity = item.quantity + delta
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
      }
      return item
    }).filter(item => item.quantity > 0))
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-indigo-950 mobile-safe-container">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-purple-500/30">
        <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
              <SafeIcon name="package" size={24} className="text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
              Sock<span className="text-purple-400">Emporium</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#catalog" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Каталог</a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">О нас</a>
            <a href="#delivery" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Доставка</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-purple-600/20 hover:bg-purple-600/40 text-white p-2 rounded-lg transition-all"
            >
              <SafeIcon name="shopping-cart" size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-white/10 p-2 rounded-lg"
            >
              <SafeIcon name="menu" size={24} className="text-white" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-t border-purple-500/30"
            >
              <div className="px-4 py-4 space-y-3">
                <a href="#catalog" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-purple-400 py-2">Каталог</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-purple-400 py-2">О нас</a>
                <a href="#delivery" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-purple-400 py-2">Доставка</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <SafeIcon name="sparkles" size={16} className="text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Доставка по всему миру!</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none">
              Носки <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">Всех Видов</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-bold">
              Грязные, дырявые, вонючие и без пары
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Единственный магазин, где вы найдете коллекцию носков на любой вкус.
              От элегантных белых до экстремально вонючих. Мы не судим — мы продаем!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#catalog"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/50"
              >
                <SafeIcon name="shopping-cart" size={20} />
                Купить Носки
              </a>
              <a
                href="#about"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2"
              >
                <SafeIcon name="help-circle" size={20} />
                Что Это?
              </a>
            </div>
          </motion.div>

          {/* Floating socks decoration */}
          <div className="absolute top-20 left-10 opacity-20 animate-bounce hidden lg:block">
            <SafeIcon name="package" size={64} className="text-purple-400" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20 animate-pulse hidden lg:block">
            <SafeIcon name="heart" size={64} className="text-pink-400" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="catalog" className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <SafeIcon name={cat.icon} size={16} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">
            Наша <span className="text-purple-400">Коллекция</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSocks.map((sock, index) => (
              <motion.div
                key={sock.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-purple-500/20 hover:border-purple-500/50 overflow-hidden transition-all hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sock.image}
                    alt={sock.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      {sock.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <SafeIcon name="star" size={12} className="text-yellow-400" />
                    <span className="text-white text-xs font-bold">{sock.rating}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{sock.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{sock.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-purple-400">{sock.price} ₽</span>
                    <button
                      onClick={() => addToCart(sock)}
                      className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-lg transition-colors"
                    >
                      <SafeIcon name="plus" size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-4 md:px-6 bg-gradient-to-b from-transparent to-purple-950/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Почему <span className="text-pink-500">Мы?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-purple-600/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon name="check-circle" size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Только качественные носки</h3>
                    <p className="text-gray-400">Даже грязные носки у нас премиум-класса</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-pink-600/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon name="globe" size={24} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Доставка по всему миру</h3>
                    <p className="text-gray-400">От Антарктиды до Луны (скоро)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-600/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon name="heart" size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Носки с душой</h3>
                    <p className="text-gray-400">Каждая пара (или одинокий носок) проходит отбор</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧦</div>
                  <h3 className="text-3xl font-black text-white mb-4">Более 10 000 довольных клиентов</h3>
                  <p className="text-gray-300 mb-6">И ни одной жалобы на запах! (Ну, почти)</p>
                  <div className="flex justify-center gap-8 text-center">
                    <div>
                      <div className="text-3xl font-black text-purple-400">50+</div>
                      <div className="text-gray-400 text-sm">Видов носков</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-pink-400">150+</div>
                      <div className="text-gray-400 text-sm">Стран доставки</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-purple-400">∞</div>
                      <div className="text-gray-400 text-sm">Дырок</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DELIVERY SECTION */}
      <section id="delivery" className="py-20 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Доставка <span className="text-purple-400">Повсюду</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon name="truck" size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Курьером</h3>
              <p className="text-gray-400">Доставим прямо в руки. Даже если вы не дома.</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="bg-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon name="package" size={32} className="text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Почтой</h3>
              <p className="text-gray-400">Классика. Надежно. Медленно. Но дойдет.</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon name="globe" size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Международная</h3>
              <p className="text-gray-400">В любую точку мира. Даже в Антарктиду.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-purple-500/20 py-12 px-4 md:px-6 telegram-safe-bottom">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
                <SafeIcon name="package" size={20} className="text-white" />
              </div>
              <span className="text-xl font-black text-white">
                Sock<span className="text-purple-400">Emporium</span>
              </span>
            </div>

            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Условия использования</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Контакты</a>
            </div>

            <div className="text-gray-500 text-sm">
              © 2024 Sock Emporium. Все права защищены.
            </div>
          </div>
        </div>
      </footer>

      {/* CART DRAWER */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 border-l border-purple-500/30 z-50 flex flex-col"
            >
              <div className="p-6 border-b border-purple-500/20 flex items-center justify-between">
                <h2 className="text-2xl font-black text-white flex items-center gap-2">
                  <SafeIcon name="shopping-cart" size={24} className="text-purple-400" />
                  Корзина
                  {cartCount > 0 && (
                    <span className="bg-purple-600 text-white text-sm px-2 py-1 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SafeIcon name="x" size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🧦</div>
                    <p className="text-gray-400">Корзина пуста. Как жаль!</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 text-purple-400 hover:text-purple-300 font-medium"
                    >
                      Продолжить покупки
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="bg-white/5 rounded-xl p-4 flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-bold mb-1">{item.name}</h4>
                          <p className="text-purple-400 font-bold">{item.price} ₽</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                            >
                              <SafeIcon name="minus" size={16} />
                            </button>
                            <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                            >
                              <SafeIcon name="plus" size={16} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 self-start"
                        >
                          <SafeIcon name="trash" size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-purple-500/20 bg-black/50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Итого:</span>
                    <span className="text-2xl font-black text-white">{cartTotal} ₽</span>
                  </div>

                  {/* CHECKOUT FORM */}
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      {!isSuccess ? (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={(e) => handleSubmit(e, ACCESS_KEY)}
                          className="space-y-4"
                        >
                          <input type="hidden" name="subject" value="Новый заказ носков!" />
                          <input type="hidden" name="order_details" value={cart.map(item => `${item.name} x${item.quantity} - ${item.price * item.quantity}₽`).join(', ')} />

                          <div>
                            <input
                              type="text"
                              name="name"
                              placeholder="Ваше имя"
                              required
                              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                            />
                          </div>

                          <div>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                            />
                          </div>

                          <div>
                            <textarea
                              name="address"
                              placeholder="Адрес доставки"
                              rows="2"
                              required
                              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                            ></textarea>
                          </div>

                          {isError && (
                            <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                              {errorMessage}
                            </div>
                          )}

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-bold transition-all transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-2"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Оформление...
                              </>
                            ) : (
                              <>
                                <SafeIcon name="send" size={20} />
                                Оформить заказ
                              </>
                            )}
                          </button>

                          <p className="text-gray-500 text-xs text-center">
                            Заполните форму, чтобы получить счет на оплату
                          </p>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4, type: "spring" }}
                          className="text-center py-8"
                        >
                          <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <SafeIcon name="check-circle" size={40} className="text-green-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">
                            Заказ отправлен!
                          </h3>
                          <p className="text-gray-400 mb-6">
                            Мы свяжемся с вами для подтверждения. Спасибо за покупку носков!
                          </p>
                          <button
                            onClick={() => {
                              resetForm()
                              setCart([])
                              setIsCartOpen(false)
                            }}
                            className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                          >
                            Закрыть и продолжить
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App