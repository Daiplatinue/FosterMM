import Navbar from '../src/MyComponents/Navbar';
import Features from '../src/MyComponents/Features';
import Programs from '../src/MyComponents/Programs';
import Contact from '../src/MyComponents/Contact';
import MeetChildren from '../src/MyComponents/ChildrenSection/MeetChildren';
import { HeroParallax } from "./MyComponents/hero-parallax";
import { Carousel, Card } from './MyComponents/Carousel';
import BentoGrid from './MyComponents/BentoGrid';
import { FocusCards } from './MyComponents/focus-cards';
import Marque from './MyComponents/Marque';

const products = [
  {
    title: "January 12, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/02/12/13/29/desert-7008952_1280.jpg",
  },
  {
    title: "June 26, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/11/29/11/45/children-1869265_1280.jpg",
  },
  {
    title: "July 5, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2023/02/11/06/52/children-7782100_1280.jpg",
  },
  {
    title: "August 1, 2025",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/02/07/18/30/group-3137670_960_720.jpg",
  },
  {
    title: "Feb 9, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2021/10/07/15/24/park-6688951_960_720.jpg",
  },
  {
    title: "Sept 17, 2024",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://cdn.pixabay.com/photo/2021/10/07/15/24/park-6688951_960_720.jpg",
  },
  {
    title: "June 9, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/04/24/02/30/kid-7152758_960_720.jpg",
  },
  {
    title: "Oct 2, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2019/06/08/19/41/girl-4260872_1280.jpg",
  },
  {
    title: "Nov 6, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/03/27/13/51/children-2178857_960_720.jpg",
  },
  {
    title: "Dec 27, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_1280.jpg",
  },
  {
    title: "Sept 3, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/07/28/22/",
  },
  {
    title: "Oct 7, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_1280.jpg",
  },
  {
    title: "January 16, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/08/15/10/14/amusement-park-1594958_960_720.jpg",
  },
  {
    title: "July 10, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/10/16/10/19/play-stone-1744790_960_720.jpg",
  },
  {
    title: "Nov 12, 2024",
    link: "#",
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/02/12/13/29/desert-7008952_1280.jpg",
  },
];

const carouselData = [
  {
    category: "Featured",
    title: "Our Mission",
    src: "https://cdn.pixabay.com/photo/2016/11/23/14/39/asia-1853270_960_720.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <img src="https://cdn.pixabay.com/photo/2024/03/31/23/25/butterfly-8667752_1280.png"/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          We are driven by the mission to provide every child with love, safety, and a brighter future.
        </p>
      </div>
    ),
  },
  {
    category: "Programs",
    title: "Family Integration",
    src: "https://cdn.pixabay.com/photo/2023/11/01/15/39/family-8358014_1280.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Our programs focus on fostering deep, lasting connections between children and loving families.
        </p>
      </div>
    ),
  },
  {
    category: "Guidance",
    title: "Expert Support",
    src: "https://cdn.pixabay.com/photo/2016/10/26/16/45/rock-1771913_1280.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Benefit from the expertise of our team to navigate the fostering process with ease and confidence.
        </p>
      </div>
    ),
  },
  {
    category: "Impact",
    title: "Building Futures",
    src: "https://cdn.pixabay.com/photo/2021/11/13/19/27/architecture-6792169_1280.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Every child deserves a chance to thrive. Together, we create opportunities for growth and success.
        </p>
      </div>
    ),
  },
  {
    category: "Care",
    title: "Safe Homes",
    src: "https://cdn.pixabay.com/photo/2016/11/29/05/09/alone-1867464_1280.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Ensuring children are placed in secure, nurturing environments where they can truly feel at home.
        </p>
      </div>
    ),
  },
];

const focusCardsData = [
  {
    title: "Sophia Grace Morales",
    src: "https://cdn.pixabay.com/photo/2023/03/18/16/26/ha-giang-7860907_1280.jpg",
  },
  {
    title: "Amelia Rose Carter",
    src: "https://cdn.pixabay.com/photo/2021/08/27/10/16/baby-6578335_1280.jpg",
  },
  {
    title: "Liam James Turner",
    src: "https://cdn.pixabay.com/photo/2016/01/08/01/22/children-1126941_960_720.jpg",
  },
  {
    title: "Isabella Marie Delgado",
    src: "https://cdn.pixabay.com/photo/2022/05/31/09/37/toddler-7233172_1280.jpg",
  },
  {
    title: "Ethan Michael Cruz",
    src: "https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg",
  },
  {
    title: "Noah Alexander Rivera",
    src: "https://cdn.pixabay.com/photo/2019/09/03/01/51/child-4448370_960_720.jpg",
  },
  {
    title: "Olivia Jane Navarro",
    src: "https://cdn.pixabay.com/photo/2014/09/27/14/28/child-463558_1280.jpg",
  },
  {
    title: "Lucas Henry Watson",
    src: "https://cdn.pixabay.com/photo/2023/08/19/03/17/boy-8199694_960_720.jpg",
  },
  {
    title: "Charlotte Elise Bennett",
    src: "https://cdn.pixabay.com/photo/2022/01/27/19/14/flowers-6972916_1280.jpg",
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
        <Marque />
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