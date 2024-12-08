import Navbar from '../src/MyComponents/Navbar';
import Features from '../src/MyComponents/Features';
import Programs from '../src/MyComponents/Programs';
import Contact from '../src/MyComponents/Contact';
import MeetChildren from '../src/MyComponents/ChildrenSection/MeetChildren';
import { HeroParallax } from "./MyComponents/hero-parallax";
import { Carousel, Card } from './MyComponents/Carousel';
import BentoGrid from './MyComponents/BentoGrid';
import { FocusCards } from './MyComponents/focus-cards';

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
];

const carouselData = [
  {
    category: "Featured",
    title: "Our Programs",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Discover our comprehensive programs designed to support children and families.
        </p>
      </div>
    ),
  },
  {
    category: "Services",
    title: "Foster Care Support",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Learn about our foster care support services and how we help families.
        </p>
      </div>
    ),
  },
  {
    category: "Services",
    title: "Personalized Care",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Learn about our foster care support services and how we help families.
        </p>
      </div>
    ),
  },
  {
    category: "Services",
    title: "Expert Guidance",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Learn about our foster care support services and how we help families.
        </p>
      </div>
    ),
  },
  {
    category: "Services",
    title: "Safe Environment",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Learn about our foster care support services and how we help families.
        </p>
      </div>
    ),
  },
];

const focusCardsData = [
  {
    title: "Foster Care Support",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Family Services",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Child Development",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Foster Care Support",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Family Services",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Child Development",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Foster Care Support",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Family Services",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
  {
    title: "Child Development",
    src: "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
  },
];

function App() {
  const carouselCards = carouselData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <main>
        <HeroParallax products={products} />
        <Features />
        <Carousel items={carouselCards} />
        <Programs />
        <BentoGrid />
        <MeetChildren />
        <FocusCards cards={focusCardsData} />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Foster Management Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;