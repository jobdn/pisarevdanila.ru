import resumePdf from "./assets/Писарев_Данила_Фронтенд.pdf";

export const HomePage = () => {
  return (
    <div>
      <a href={resumePdf} download>
        Скачать резюме Писарева Данилы
      </a>
    </div>
  );
};
