import MainText from "@/components/typography/MainText";
import NormalText from "@/components/typography/NormalText";
import SecondaryHeading from "@/components/typography/SecondaryHeading";

export default function AboutLeftColumn() {
  return (
    <div className="w-64 xl:w-96 flex flex-col gap-10 xl:gap-16 justify-center my-24 md:my-40">
      <SecondaryHeading text="Kdo jsem?"></SecondaryHeading>
      <MainText
        textChunks={[
          { type: "normal", text: "Jmenuji se " },
          { type: "bold", text: "Pavel" },
          {
            type: "normal",
            text: " a věnuji se vývoji, především tedy front-endu, již ",
          },
          { type: "bold", text: "7 rokem" },
          { type: "normal", text: "." },
        ]}
      ></MainText>
      <div className="flex flex-col gap-5 xl:gap-10">
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Seniorní developer 👨🏻‍💻 se zkušenostmi z vývoje CRM systémů, e-commerce, blockchainových aplikací, Big Data dashboardů a několika dalších projektů.",
            },
          ]}
        ></NormalText>
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Jako frontenďák jsem se také zamiloval do UI/UX designu a to včetně wireframování, prototypování a designu všeobecně 🛠️.",
            },
          ]}
        ></NormalText>
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Vývoj back-endu mi také není cizí a nebojím se použít nejmodernější technologie, frameworky a cloudová řešení.",
            },
          ]}
        ></NormalText>
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Mezi moje nejoblíbenější 🖤 nástroje rozhodně patří Angular, Node.js, MongoDB, AWS, Figma a spoustu dalších 🚀.",
            },
          ]}
        ></NormalText>
      </div>
    </div>
  );
}
