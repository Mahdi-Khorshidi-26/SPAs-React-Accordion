import { useState } from "react";

const dataQ = [
  {
    title: "Are you there ?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident incidunt hic dicta aperiam, totam optio. Quasi temporibus vero ea pariatur, nulla nesciunt, molestias, ducimus quidem amet nemo mollitia quos earum!",
  },
  {
    title: "Are you there ?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident incidunt hic dicta aperiam, totam optio. Quasi temporibus vero ea pariatur, nulla nesciunt, molestias, ducimus quidem amet nemo mollitia quos earum!",
  },
  {
    title: "Are you there ?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident incidunt hic dicta aperiam, totam optio. Quasi temporibus vero ea pariatur, nulla nesciunt, molestias, ducimus quidem amet nemo mollitia quos earum!",
  },
  {
    title: "Are you there ?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident incidunt hic dicta aperiam, totam optio. Quasi temporibus vero ea pariatur, nulla nesciunt, molestias, ducimus quidem amet nemo mollitia quos earum!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={dataQ} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          title={item.title}
          num={i}
          onOpen={setCurrOpen}
          currOpen={currOpen}
          key={i}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ children, title, num, onOpen, currOpen }) {
  let isOpen = num === currOpen;

  function toggleOpen() {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  }
  return (
    <div
      className={`item ${isOpen ? "open" : ""} animated-opener`}
      onClick={() => toggleOpen()}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box animated-opener">{children}</div>}
    </div>
  );
}
