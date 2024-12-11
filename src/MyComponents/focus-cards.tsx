import React, { useState } from "react";
import Process from '@/MyComponents/Process';

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

type Card = {
  title: string;
  src: string;
  age?: string;
  siblings?: Array<{
    title: string;
    src: string;
  }>;
};

interface DetailViewProps {
  card: Card;
  onClose: () => void;
  onSiblingClick: (sibling: Card) => void;
  allCards: Card[];
  isLoggedIn: boolean;
}

const DetailView: React.FC<DetailViewProps> = ({ card, onClose, onSiblingClick, allCards, isLoggedIn }) => {
  const [showAdoptProcess, setShowAdoptProcess] = useState(false);

  const siblings = allCards.filter(c =>
    c.title !== card.title &&
    (c.title.split(' ')[1] === card.title.split(' ')[1])
  );

  const childInfo = {
    age: "7 years old",
    location: "Metro Manila",
    hobbies: ["Drawing", "Playing with blocks", "Storytelling"],
    introduction: "A bright and cheerful child who loves to make others smile. Shows great potential in artistic activities.",
    personality: ["Friendly", "Creative", "Caring"],
    education: "Grade 2 student",
  };

  const handleBeginAdoption = () => {
    if (!isLoggedIn) {
      alert('Please log in first to begin the adoption process');
      return;
    }
    setShowAdoptProcess(true);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900/80 border border-gray-700 rounded-xl max-w-4xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-medium text-neutral-200">{card.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-neutral-100 mb-2">{childInfo.age} • {childInfo.location}</p>
                <p className="text-neutral-400">{childInfo.introduction}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-neutral-200">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {childInfo.hobbies.map((hobby) => (
                    <span key={hobby} className="px-3 py-1 bg-transparent border border-gray-600 text-neutral-400 rounded-full text-sm">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-neutral-200">Personality</h3>
                <div className="flex flex-wrap gap-2">
                  {childInfo.personality.map((trait) => (
                    <span key={trait} className="px-3 py-1 bg-transparent border border-gray-600 text-neutral-400 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {siblings.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Siblings</h3>
                  <div className="flex gap-3">
                    {siblings.map((sibling) => (
                      <button
                        key={sibling.title}
                        onClick={() => onSiblingClick(sibling)}
                        className="group relative w-20 h-20 rounded-full overflow-hidden"
                      >
                        <img
                          src={sibling.src}
                          alt={sibling.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-center justify-center">
                          <p className="text-white text-xs text-center px-1">
                            {sibling.title.split(' ')[0]}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  onClick={handleBeginAdoption}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium mb-3 hover:bg-blue-600 transition-colors"
                >
                  Begin Adoption Process
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm"
                >
                  Back to Children List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAdoptProcess && <Process onClose={() => setShowAdoptProcess(false)} />}
    </div>
  );
};

const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onCardClick,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onCardClick: (card: Card) => void;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onCardClick(card)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const userEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
  
  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleSiblingClick = (sibling: Card) => {
    setSelectedCard(sibling);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full mb-[5rem]">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      {selectedCard && (
        <DetailView
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
          onSiblingClick={handleSiblingClick}
          allCards={cards}
          isLoggedIn={!!userEmail}
        />
      )}
    </>
  );
}