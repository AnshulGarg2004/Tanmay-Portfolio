import { FocusCards } from "./ui/focus-card";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Weather Fetching App",
      src: "/images/Weather.png",

    },
    {
      title: "Stop Watch",
      src: "/images/Stopwatch.png",
    },
        

  ];

  return <FocusCards cards={cards} />;
}
