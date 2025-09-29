// ThreeGuguBento.jsx — JavaScript (JSX) version with Framer Motion
// Save as ThreeGuguBento.jsx in a Vite + React + Tailwind project
// Dependencies: react, framer-motion, lucide-react, tailwindcss

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Instagram, Facebook, Phone, Mail, ShoppingCart } from 'lucide-react';
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Section = ({ children, className = '', ...rest }) => (
  <section className={`${className}`} {...rest}>{children}</section>
);

const Pill = ({ children }) => (
  <div className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">{children}</div>
);

const Button = ({ variant = 'primary', className = '', children, ...rest }) => {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-2xl font-medium';
  const v = variant === 'primary' ? 'bg-amber-700 text-white' : 'border border-amber-200 text-zinc-800 bg-white';
  return (
    <button className={`${base} ${v} ${className}`} {...rest}>{children}</button>
  );
};

const Nav = () => (
  <header className="sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-amber-50">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-4xl font-semibold text-emerald-700">三姑姑健康屋</div>
        <div className="text-xl text-emerald-700">3-Gu-Gu Healthy Bento</div>
      </div>
      <nav className="flex items-center gap-4 text-sm">
        <a href="#about" className="bg-[#81D8D0] text-white px-3 py-1 rounded hover:underline">關於</a>
        <a href="#menu" className="bg-[#81D8D0] text-white px-3 py-1 rounded hover:underline">菜單</a>
        <a href="#visit" className="bg-[#81D8D0] text-white px-3 py-1 rounded hover:underline">到店</a>
      </nav>
    </div>
  </header>
);

const heroCardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const Hero = () => (
  <Section className="relative">
    <div className="h-[56vh] md:h-[64vh] relative overflow-hidden">
      <motion.img src="https://images.unsplash.com/photo-1604909053203-5c69a3c3c9a3?auto=format&fit=crop&w=1600&q=80" alt="Bento hero" className="w-full h-full object-cover" initial={{ scale: 1.02 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 pb-16">
          <motion.div className="bg-white/70 rounded-3xl p-6 md:p-10 max-w-2xl shadow-lg backdrop-blur-sm"
            initial="hidden" animate="show" variants={heroCardVariants}>
            <h1 className="text-3xl md:text-4xl font-serif text-emerald-700">三姑姑健康屋</h1>
            <div className="text-emerald-700 font-medium mt-1">3-Gu-Gu Healthy Bento</div>
            <p className="mt-3 text-sm text-zinc-700">使用當日現買新鮮食材，手作溫暖便當 · 健康、少油、風味有層次。</p>
            <div className="mt-4 flex gap-3">
              <a href="#menu" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#81D8D0] text-white">查看菜單</a>
              <a href="#visit" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#81D8D0] text-white">到店資訊</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </Section>
);

const About = () => (
  <Section id="about" className="py-12 md:py-16">
    <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2 items-center px-6 md:px-10 lg:px-16">
      <div>
        <Pill>用心手作</Pill>
        <h2 className="text-2xl md:text-3xl font-semibold mt-3">匠心製作 · 健康少油</h2>
        <p className="mt-4 text-zinc-700">我們選用當季蔬果與優良蛋白來源，減油少鹽，以傳統與創新結合的方式料理每一份便當，讓你在忙碌的日子也能吃得健康有飽足感。</p>
      </div>
      <motion.div className="rounded-2xl overflow-hidden shadow-md" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}> 
        <img src="https://images.unsplash.com/photo-1605478441667-95a897d05f1c?auto=format&fit=crop&w=1000&q=80" alt="about" className="w-full h-64 object-cover" />
      </motion.div>
    </div>
  </Section>
);

const Menu = () => {
  const items = [
    { id: 'm1', name: '匠心雞腿便當', desc: '低油烤雞腿、季節蔬菜、糙米', price: 150, img: 'https://images.unsplash.com/photo-1605478574243-0d0a7f7a0f76?auto=format&fit=crop&w=800&q=80' },
    { id: 'm2', name: '味噌鮭魚便當', desc: '味噌醃鮭魚、溫泉蛋、時蔬', price: 190, img: 'https://images.unsplash.com/photo-1605478204371-11c82b27fa7a?auto=format&fit=crop&w=800&q=80' },
    { id: 'm3', name: '素食豆腐便當', desc: '香煎豆腐、多樣當季蔬菜', price: 140, img: 'https://images.unsplash.com/photo-1625944234882-1fbf3dfcc5a2?auto=format&fit=crop&w=800&q=80' },
    { id: 'm4', name: '經典豬排便當', desc: '薄皮酥炸豬排、自製醬汁', price: 160, img: 'https://images.unsplash.com/photo-1594007654729-407de87a5bb2?auto=format&fit=crop&w=800&q=80' },
    { id: 'm5', name: '匠心雞腿便當', desc: '低油烤雞腿、季節蔬菜、糙米', price: 150, img: 'https://images.unsplash.com/photo-1605478574243-0d0a7f7a0f76?auto=format&fit=crop&w=800&q=80' },
    { id: 'm6', name: '味噌鮭魚便當', desc: '味噌醃鮭魚、溫泉蛋、時蔬', price: 190, img: 'https://images.unsplash.com/photo-1605478204371-11c82b27fa7a?auto=format&fit=crop&w=800&q=80' },
    { id: 'm7', name: '素食豆腐便當', desc: '香煎豆腐、多樣當季蔬菜', price: 140, img: 'https://images.unsplash.com/photo-1625944234882-1fbf3dfcc5a2?auto=format&fit=crop&w=800&q=80' },
    { id: 'm8', name: '經典豬排便當', desc: '薄皮酥炸豬排、自製醬汁', price: 160, img: 'https://images.unsplash.com/photo-1594007654729-407de87a5bb2?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <Section id="menu" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <h3 className="text-2xl font-semibold">當日精選菜單</h3>
        <p className="mt-2 text-sm text-zinc-600">菜色每日可能略有調整，歡迎來電/線上查詢當日供應。</p>
        <motion.div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={listContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {items.map(it => (
            <motion.article key={it.id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition" variants={cardVariants} whileHover={{ scale: 1.02 }}>
              <div className="h-40 overflow-hidden">
                <motion.img src={it.img} alt={it.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="font-medium">{it.name}</div>
                <div className="mt-1 text-sm text-zinc-600">{it.desc}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-medium">NT${it.price}</div>
                  <a href="#visit" className="text-xs px-3 py-1 border rounded-full">訂購</a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

const Seasonal = () => (
  <Section className="py-12 md:py-16 bg-amber-50">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <h3 className="text-2xl font-semibold">本週主打</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-xl font-medium">柚香烤鯖魚便當</h4>
          <p className="mt-2 text-zinc-700">柚子蜜與味噌輕刷，低溫慢烤入味，搭配時令蔬菜與雜糧飯。</p>
        </div>
        <motion.div className="rounded-2xl overflow-hidden shadow-md" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src="https://images.unsplash.com/photo-1605478723447-1ab0eac1e3d2?auto=format&fit=crop&w=1000&q=80" alt="seasonal" className="w-full h-56 object-cover" />
        </motion.div>
      </div>
    </div>
  </Section>
);

const Visit = () => (
  <Section id="visit" className="py-16 md:py-24">
    <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2 px-6 md:px-10 lg:px-16">
      <div className="space-y-4">
        <Pill>到店自取</Pill>
        <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900">嘉義縣太保市 · 三姑姑健康屋</h3>
        <p className="text-zinc-700/90">大量訂購於尖峰時段建議先來電預留。</p>
        <div className="grid gap-2 text-sm text-zinc-700">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/>  嘉義縣太保市祥和一路東段70號</span>
          <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/>週一–週五 11:00–13:00、16:30-18:30</span>
          <div className="flex gap-4 pt-2">
            <Button variant="secondary" className="rounded-2xl"><Instagram className="mr-2 h-4 w-4"/>Instagram</Button>
            <Button variant="secondary" className="rounded-2xl"><Facebook className="mr-2 h-4 w-4"/>Facebook</Button>
          </div>
        </div>
      </div>
      <motion.div className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-md" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1600&q=80" alt="門市外觀示意" className="h-80 w-full object-cover" />
      </motion.div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-amber-100 bg-white">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-10 grid gap-8 md:grid-cols-3">
      <div className="space-y-2">
        <div className="text-xl font-semibold text-emerald-700" >三姑姑健康屋 </div>
          <div className="text-sm text-emerald-700">3-Gu-Gu Healthy Bento</div>
        <p className="text-xl text-zinc-700 font-semibold tracking-wide">用一份便當，善待每一個今天。</p>
      </div>
      <div className="text-sm text-zinc-600">
        <div className="font-medium text-zinc-800 mb-2">聯絡</div>
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> 05-3625510</div>
          <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/>ericycchung@gmail.com</div>
          <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> 嘉義縣太保市祥和一路東段70號</div>
        </div>
      </div>
      <div className="text-sm text-zinc-600">
        <div className="font-medium text-zinc-800 mb-2">營業資訊</div>
        <p>週一–週五 11:00–13:00、16:30-18:30 · 假日公休</p>
        <p className="mt-1">太保 朴子 $800 外送（其餘地區電洽）</p>
      </div>
    </div>
    <div className="border-t border-amber-100 py-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} 三姑姑健康屋 3-Gu-Gu Healthy Bento. All rights reserved.</div>
  </footer>
);

export default function ThreeGuguBento() {
  return (
    <div className="font-['Noto_Serif_TC',ui-serif] text-zinc-900 bg-white selection:bg-amber-100 selection:text-zinc-900">
      <Nav />
      <main>
        <Hero />
        <About />
        <Menu />
        <Seasonal />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
