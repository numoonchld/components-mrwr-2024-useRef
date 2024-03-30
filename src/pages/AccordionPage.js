import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "asdf",
      label: "Can i use react on a project?",
      content: "Yes you can use React on any project",
    },
    {
      id: "vfjv",
      label: "Can i use JavaScript on a project?",
      content: "Yes you can use JavaScript on any project",
    },
    {
      id: "34tn",
      label: "Can i use CSS on a project?",
      content: "Yes you can use CSS on any project",
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
