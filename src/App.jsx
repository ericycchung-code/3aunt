// ThreeGuguBento.jsx — JavaScript (JSX) version with Framer Motion
// Save as ThreeGuguBento.jsx in a Vite + React + Tailwind project
// Dependencies: react, framer-motion, lucide-react, react-icons/fa, tailwindcss

import React, { useState, useEffect } from 'react';
import { motion , AnimatePresence} from 'framer-motion';
import { MapPin, Clock,  Phone, Mail, ShoppingCart } from 'lucide-react';
import { FaInstagram, FaFacebook } from "react-icons/fa";

// --- 輔助元件 ---

const Section = ({ children, className = '', ...rest }) => (
 <section className={`${className}`} {...rest}>{children}</section>
);

const Pill = ({ children }) => (
  <div className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">{children}</div>
);

const Button = ({ variant = 'primary', className = '', children, ...rest }) => {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-2xl font-medium transition-colors duration-200';
  const v = variant === 'primary' ? 'bg-amber-700 hover:bg-amber-800 text-white' : 'border border-amber-200 text-zinc-800 bg-white hover:bg-amber-50';
  return (
     <button className={`${base} ${v} ${className}`} {...rest}>{children}</button>
  );
};

const Nav = () => (
   <header className="sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-amber-50">
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
       <div className="flex items-center gap-3">
        <div className="text-4xl font-semibold text-emerald-700" >
        <motion.img 
        initial={{opacity:0,x:-150,rotate:-360}}
        animate={{opacity:1,x:0,rotate:0}}
        transition={{duration:1,delay:0.2}}
        src={"店徽2.jpg"} 
        alt="我的店徽" 
        className="h-12 md:h-15 lg:h-18 w-auto rounded-full object-cover"   /></div>
        <div className="text-xl md:text-3xl  lg:text-5xl font-semibold text-emerald-700">三姑姑健康屋</div>
        <div className="text-sm md:text-xl  lg:text-3xl text-emerald-700">3 Aunt Health House</div>
       </div>   
       <nav className="flex items-center gap-3 text-sm">
         <a href="#about" className="text-xs md:text-sm bg-[#81D8D0] text-white px-2 py-1 rounded hover:bg-[#6cbfb8]">關於</a>
         <a href="#menu" className="text-xs md:text-sm bg-[#81D8D0] text-white px-2 py-1 rounded hover:bg-[#6cbfb8]">菜單</a>
         <a href="#visit" className="text-xs md:text-sm bg-[#81D8D0] text-white px-2 py-1 rounded hover:bg-[#6cbfb8]">到店</a>
       </nav>
    </div>
   </header>
);

// --- Framer Motion 變體 ---

const heroCardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 20, transition: { duration: 1.6 ,delay: 0.8} }
};

const cardVariants = {
   hidden: { opacity: 0, y: 12 },
   show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 ,delay: 1.3  ,duration: 0.8, ease: "easeOut" }}
};

// --- 圖片輪播元件 (ImageCarousel) ---
const ImageCarousel = ({ images, altText, interval = 3000 }) => {
  // 圖片索引，從 0 開始
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    // 設置定時器來切換圖片索引
    const timer = setInterval(() => {
      // 索引遞增，使用模數運算 (Modulo) 確保索引不會超出圖片陣列的範圍
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval); // 預設 3000 毫秒 = 3 秒切換一次
    // 清理定時器
    return () => clearInterval(timer);
  }, [images.length, interval]);
  // Framer Motion 圖片切換動畫的變體
  const imageVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.7 } }, // 淡入淡出時間 0.8 秒
    exit: { opacity: 0 }
  };

  return (
    <div className="h-full w-full relative">
      <AnimatePresence 
        initial={false} // 禁用初始載入動畫
        mode="wait"    // 等待退出動畫結束後再執行下一個進入動畫
      >
        <motion.img 
          key={images[index]} // key 變動時 AnimatePresence 會觸發動畫
          src={images[index]} 
          alt={`${altText} ${index + 1}`} 
          // 確保圖片覆蓋容器且絕對定位，實現層疊切換效果
          className="w-full h-full object-cover absolute top-0 left-0" 
          loading="lazy"
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>
    </div>
  );
};

// --- 元件 ---

const Hero = () => (
  <Section className="relative">
    <div className="h-[40vh] min-h-[300px] md:h-[50vh] relative overflow-hidden">
      <motion.img src="/hero-bento.jpg" alt="Bento hero" className="w-full h-full object-contain" initial={{ scale: 1.2 }} animate={{ scale: 0.9 }} transition={{ duration: 0.8 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/10 to-green-200/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" mx-auto max-w-6xl px-6 md:px-10 lg:px-16 w-full pt-1/3 md:pt-1/4">
          <motion.div 
            className="bg-white/90 rounded-3xl p-6 md:p-8 max-w-md md:max-w-xl shadow-xl mx-auto backdrop-blur-sm border border-emerald-100"
            initial="hidden" 
            animate="show" 
            variants={heroCardVariants}
            transition={{ duration: 0.8, delay: 1.5 }} >
            <h1 className="text-2xl md:text-4xl font-serif text-emerald-700 pl-2"> 三姑姑健康屋</h1>
            <div className="text-emerald-700 font-medium mt-1 pl-3 "> 3 Aunt Health House</div>
            <p className="mt-3 text-ml text-zinc-700 pl-3"> 使用當日現買新鮮食材，手作溫暖便當 · 健康、少油、風味有層次。</p>
            <div className="mt-4 flex gap-3">
              <a href="#menu" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#81D8D0] text-white hover:bg-[#6cbfb8] transition-colors">查看菜單</a>
              <a href="#visit" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#81D8D0] text-white hover:bg-[#6cbfb8] transition-colors">到店資訊</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </Section>
);

const About = () => (
  <Section id="about" className="py-12 md:py-16 bg-stone-50 scroll-mt-32"> 
    <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2 items-center px-6 md:px-10 lg:px-16">
      <div>
        <Pill>用心手作</Pill>
        <h2 className="text-2xl md:text-3xl font-semibold mt-3">匠心製作 · 健康少油</h2>
        <p className="mt-4 text-zinc-700">我們堅持每日親採台灣在地當季蔬果與優良蛋白，將食材的鮮甜，透過減油少鹽的巧手轉化。每一次的烹調，都是對細節的專注與對健康的平衡。在您的每一個忙碌時刻，三姑姑用這份充滿心意的便當，為您的身心增添飽滿的能量。</p>
      </div>
       <motion.div
        className="rounded-2xl overflow-hidden shadow-md"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        >
       <img src="改3.jpg" alt="about" className="w-full h-auto object-contain " />
       </motion.div>  
    </div>
  </Section>
);

// --- 菜單元件 (Menu) ---
const Menu = () => {
  const items = [
    { id: 'm1', name: '薑燒梅花豬便當', desc: '溫潤香氣，微辛回甘', price: '95up', img: "/p1-1.jpg" },
    { id: 'm2', name: '一般豬排便當', desc: '金黃誘人，油潤迷人', price: '90up', img: '/p2-1.jpg' },
    { id: 'm3', name: '紅麴豬排便當', desc: '微甜麴香，色澤誘人', price: '100up', img: '/p3.jpg' },
    { id: 'm4', name: '塔香三杯雞便當', desc: '濃郁層次，滑嫩多汁', price: '100up', img: '/p4.jpg' },
    { id: 'm5', name: '檸香烤雞腿便當', desc: '檸香清爽，肉質鮮嫩', price: '100up', img: '/p5-1.jpg' },
    { id: 'm6', name: '香煎虱目魚便當', desc: '海風氣息，酥香撲鼻', price: '150up', img: '/p6.jpg' },
    { id: 'm7', name: '私房特餐', desc: '隱藏美味，每日新鮮', price: '100up', img: ['/p7.jpg', '店徽.jpg'] },
    { id: 'm8', name: '經濟特餐', desc: '香辣迷人，樸實飽滿', price: '60up', img: '/p8.jpg' },
    { id: 'm9', name: '素食便當', desc: '清新香氣，層次分明', price: '90up', img: '/p9.jpg' },
    { id: 'm10', name: '菜盒', desc: '色香俱佳，清爽怡人', price: '100up', img: '/p10.jpg' },
  ];


  return (
    <Section id="menu" className="py-12 md:py-16 scroll-mt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <h3 className="text-2xl font-semibold">當日精選菜單</h3>
        <p className="mt-2 text-sm text-zinc-600">菜色每日可能略有調整，歡迎來電查詢當日供應。</p>
        <motion.div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={listContainer} initial="hidden" whileInView="show" viewport={{ once: true }} >
          {items.map(it => (
            <motion.article 
             key={it.id} 
             // 基礎陰影和樣式保留
            className="bg-white rounded-2xl overflow-hidden shadow transition cursor-pointer" 
            variants={cardVariants} 
            // 螢幕大時：滑鼠懸停放大
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} // shadow-lg 效果
            // 螢幕小時/觸控裝置：點擊時略微縮小，模擬「按下」的感覺
             whileTap={{ scale: 0.98, boxShadow: "0 15px 25px 0px rgba(0, 0, 0, 0.2), 0 5px 10px 0px rgba(0, 0, 0, 0.15)0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)" }} // 輕微 shadow 效果
            transition={{ duration: 0.2 }}
            >
              <div className="h-60 overflow-hidden">
             {/* *** 關鍵修正：新增靜態 div 隔離層 *** */}
                <div className="w-full h-full"> 
                  {Array.isArray(it.img) ? (
                    // 輪播元件： ImageCarousel 負責自己的動畫
                    <ImageCarousel images={it.img} altText={it.name} />
                  ) : (
                    // 單一圖片： 使用靜態 img 標籤（因為父層 motion.article 會處理縮放動畫）
                    <img src={it.img} alt={it.name} className="w-full h-full object-cover" loading="lazy" /> 
                  )}
                </div>
              </div>
              <div className="p-4">
                <div className="font-medium">{it.name}</div>
                <div className="mt-1 text-sm text-zinc-600">{it.desc}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-medium">NT${it.price}</div>
                  <a href="#visit" className="text-xs px-3 py-1 border border-amber-300 bg-amber-50 text-amber-800 rounded-full hover:bg-amber-100 transition-colors">訂購</a>
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
  <Section className="py-12 md:py-16 bg-amber-50 overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
       <h3 className="text-2xl font-semibold">本週主打</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-6 items-center">
         <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0,transition: {  duration: 1.2,   delay: 0.2  }}} viewport={{ once: false}}>
        <div>
         <h4 className="text-2xl font-medium mb-10">精緻會議便當--客製化</h4>
         <p className="mt-2 text-zinc-700 mb-10">
          嚴選健康豬里肌，以大火快炒爆香在地青蔥，鎖住肉汁與香氣。芹菜炒鮮撥大蝦仁，鹹香夠味、口感彈嫩，是道地又下飯的經典台式美味。
          經典宮保雞丁以花椒、乾辣椒、洋蔥同炒，香辣帶勁，酸甜鹹香交織，讓人一口接一口停不下來。搭配當季時令蔬菜，
          包含清脆爽口的青花椰、清甜的節瓜、滑嫩的南瓜與鮮甜番茄，均衡營養、色彩繽紛，為整體料理增添清爽風味。
         </p>
          <h4 className="text-xl font-semiboldbold ">
          ※ 提前預訂，單次訂購數量需滿50盒。
        </h4>
        </div>
        </motion.div>
        <motion.div className="rounded-2xl overflow-hidden shadow-md " initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 ,transition: {  duration: 1.2,   delay: 0.2  }}} viewport={{ once: false }}>
         <img src="/ppp.jpg" alt="seasonal" className="w-full h-66 object-cover" />
         </motion.div>
      </div>
    </div>
    </Section>
);



const LocationInfo = () => (
  <div className="grid gap-2 text-sm text-zinc-700">
    <span className="inline-flex items-center gap-2">
      <MapPin className="h-4 w-4"/> 嘉義縣太保市祥和一路東段70號
    </span>
    <span className="inline-flex items-center gap-2">
    <Phone className="h-4 w-4"/> <a href="tel:053625510" className="hover:text-zinc-800 transition-colors">05-3625510</a>
    </span>
    <span className="inline-flex items-center gap-2">
      <Clock className="h-4 w-4"/> 週一–週五 10:00–13:00、16:30–18:30 賣完為止，遇假日公休。
    </span>
    <div className="flex gap-4 pt-2">
      <a href="https://www.facebook.com/3aunt.health" target="_blank" rel="noopener noreferrer">
      <Button variant="secondary" className="rounded-2xl flex items-center gap-1">
        <FaInstagram className="h-4 w-4"/> Instagram
      </Button>
      </a>
      <a href="https://www.facebook.com/3aunt.health" target="_blank" rel="noopener noreferrer">
      <Button variant="secondary" className="rounded-2xl flex items-center gap-1">
      <FaFacebook className="h-4 w-4" /> Facebook
      </Button>
      </a>
    </div>
  </div>
);

export const Visit = () => (
  <Section 
    id="visit" 
    className="py-16 md:py-24 bg-white/80 scroll-mt-32"
  >
  
    <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2 items-center px-6 md:px-10 lg:px-16">
      
      {/* 左側文字區 */}
      <motion.div 
        className="space-y-4 bg-white/80 rounded-3xl p-6 md:p-10 max-w-2xl shadow-xl mx-auto backdrop-blur-sm "  
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0,transition: {  type:"spring",stiffness:120, duration: 1.8,   delay: 0.3  }}}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Pill>到店自取</Pill>
        <h3 className="text-xl md:text-3xl font-semibold text-zinc-900">
          太保市 · 三姑姑健康屋
        </h3>
        <p className="text-zinc-700/90">
          大量訂購於尖峰時段建議先來電預留。
        </p>
        <LocationInfo />
      </motion.div>

      {/* 右側圖片 */}
      <div 
        className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-md mx-auto max-w-2xl" 
                viewport={{ once: false, amount: 0.3 }}
      >
        <img 
          src="地址.jpg" 
          alt="地址" 
          className="h-80 w-full object-cover" 
        />
      </div>
    </div>
  </Section>
);

export const Visit1 = () => (
  <Section 
    id="visit1" 
    className="py-16 md:py-44 bg-white scroll-mt-32"
    style={{ 
      backgroundImage: `url('比賽.jpg')`, 
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    }}
  >
      </Section>
);

export const Footer = () => (
  <footer className="border-t border-amber-100 bg-white">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-10 grid gap-8 md:grid-cols-3">

      {/* 左側品牌區 */}
     <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="space-y-2"
     >
        <div className="text-xl font-semibold text-emerald-700">三姑姑健康屋</div>
        <div className="text-sm text-emerald-700"> 3 Aunt Health House</div>
        <p className="text-xl text-zinc-700 font-semibold tracking-wide">
         用一份便當，善待每一個今天。
      </p>
      </motion.div>

      {/* 中間聯絡資訊 */}
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
       viewport={{ once: false }}
       className="text-sm text-zinc-600"
       >
       <div className="font-medium text-zinc-800 mb-2">聯絡我們</div>
      <div className="space-y-1">
      <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> <a href="tel:053625510" className="hover:text-zinc-800 transition-colors">05-3625510</a></div>
       <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/> <a href="mailto:ericycchung@gmail.com" className="hover:text-zinc-800 transition-colors">3aunt.health@gmail.com</a></div>
       <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> 嘉義縣太保市祥和一路東段70號</div>
      <div className="text-sm text-zinc-500 pt-2">
      ※ 營業時間請參考「到店自取」區塊說明
      </div>
      </div>
      </motion.div>

       {/* 右側社群 */}
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
       viewport={{ once: false }}
       className="flex flex-col items-start gap-2"
      >
       <div className="font-medium text-zinc-800 mb-2">追蹤我們</div>
      <div className="flex gap-4">
      <a href="https://www.facebook.com/3aunt.health" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-emerald-700 hover:text-emerald-600 text-3xl transition-colors">
       <FaInstagram />
      </a>
      <a href="https://www.facebook.com/3aunt.health" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-emerald-700 hover:text-emerald-600 text-3xl transition-colors">
       <FaFacebook />
      </a>
      </div>
       <p className="text-sm text-zinc-600 mt-2">太保 朴子 滿$1000 外送（其餘地區電洽）</p>
      </motion.div>

      </div>
       <div className="border-t border-amber-100 py-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} 三姑姑健康屋 3 Aunt Health House. All rights reserved.</div>
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
      <Visit1 />
       </main>
       <Footer />
       </div>
       );
}