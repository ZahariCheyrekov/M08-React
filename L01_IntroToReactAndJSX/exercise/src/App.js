import "./App.css"
function App() {
  return (
    <div classNameName="App">
      <header className="header-page">

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="nav-li-item">
              <a href="#">ЗА НАС</a>
            </li>
            <li className="nav-li-item">
              <a href="#">ФОРУМ</a>
            </li>
            <li className="nav-li-item">
              <a href="#">БЛОГ</a>
            </li>
            <li className="nav-li-item">
              <a href="#">КОНТАКТИ</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-container" />
      <section className="taxes">
        <h2 className="taxes-title">Такси</h2>

        <section className="courses">
          <article className="course-item">
            <h3 className="course-title">Design Basics</h3>
            <p className="course-text">Подготвителен курс</p>
            <button className="course-button">КАНДИДАТСТВАЙ</button>

            <article className="course-prices green">
              <h3 className="course-price">БЕЗПЛАТНО</h3>
              <p className="course-info-text">* <span className="bolder-text">50</span> лв. такса за приемен изпит</p>
            </article>
          </article>

          <article className="course-item">
            <h3 className="course-title">Fundamentals Program</h3>
            <p className="course-text">
              Курсистите ще продължат обучението си в <span className="bolder-text">6</span> фундаментални курса,
              покриващи основните сфери на
              дизайна и визуализацията.
            </p>
            <p className="course-text">
              Възможност за заплащане на таксата на <span className="bolder-text">2</span> равни вноски.
            </p>

            <article className="course-prices blue">
              <section className="course-tax-offer line">
                <h3 className="course-price">680 лв.</h3>
                <p className="course-info-text">присъствено за <span className="bolder-text">6</span> курса</p>
              </section>

              <section className="course-tax-offer">
                <h3 className="course-price">620 лв.</h3>
                <p className="course-info-text">онлайн за <span className="bolder-text">6</span> курса</p>
              </section>
            </article>
          </article>

          <article className="course-item">
            <h3 className="course-title">Professional Program</h3>
            <p className="course-text">
              Курсистите преминават към обучение в професионалните модули, специализирайки се в избраното
              професионално направление.
            </p>
            <p className="course-text">
              Обявената такса е преференциална за курсистите от <span className="bolder-text">Fundamentals
                Program</span>.
            </p>

            <article className="course-prices purple">
              <section className="course-tax-offer line">
                <h3 className="course-price"><span className="bolder-text">330</span> лв.</h3>
                <p className="course-info-text">присъствено за модул</p>
              </section>

              <section className="course-tax-offer">
                <h3 className="course-price"><span className="bolder-text">290</span> лв.</h3>
                <p className="course-info-text">онлайн за модул</p>
              </section>
            </article>
          </article>

        </section>
      </section>

      <section className="training-programs" />
      <h2 className="programs-title">Присъствено или Онлайн</h2>
      <p className="progrmas-text">
        Формите на обучение в <span className="bolder-text">SoftUni Digital</span> са две – присъствена и онлайн,
        така че обучението е подходящо,
        както за учещи и работещи, така и за курсисти, живеещи във всяка точка на света. Студентите могат да
        избират дали желаят да се обучават присъствено или онлайн за всеки отделен модул от учебния план.
      </p>

      <table className="table-benefits" />
      <tr className="table-row">
        <td className="table-el top-border">
          Присъствие в учебните зали на всички занятия от програмата
        </td>
        <td className="table-el">
          <img src="./images/check.svg" alt="check" />
        </td>
        <td className="table-el">
          <img src="./images/cross.svg" alt="cross" />
        </td>
      </tr>
      <tr className="table-row">
        <td className="table-el">
          Възможност за личен контакт с преподавателя и курсистите на живо
        </td>
        <td className="table-el">
          <img src="./images/check.svg" alt="check" />
        </td>
        <td className="table-el">
          <img src="./images/cross.svg" alt="cross" />
        </td>
      </tr>
      <tr className="table-row">
        <td className="table-el">
          Онлайн обучение в реално време и възможност за въпроси
        </td>
        <td className="table-el">
          <img src="./images/check.svg" alt="check" />
        </td>
        <td className="table-el">
          <img src="./images/check.svg" alt="check" />
        </td>
      </tr>
      <tr className="table-row">
        <td className="table-el">
          Доживотен достъп до видео записите и учебните ресурси от всични занятия
        </td>
        <td className="table-el">
          <img src="./images/check.svg" alt="check" />
        </td>
        <td className="table-el">
          <img src="./images/check.svg" alt="check" />
        </td>
      </tr>
      <tr className="table-row">
        <td className="table-el">
          Издаване на държавно признати удостоверения от МОН
        </td>
        <td className="table-el">
          <img src="./images/check.svg" alt="check" />
        </td>
        <td className="table-el">
          <img src="./images/check.svg" alt="check" />
        </td>
      </tr>
      <tr className="table-row">
        <td className="table-el bottom-left-border">
          Достъп до кариерен център и съдействие за стартиране на работа
        </td>
        <td className="table-el">
          <img src="./images/check.svg" alt="check" />
        </td>
        <td className="table-el bottom-right-border">
          <img src="./images/check.svg" alt="check" />
        </td>
      </tr>
      <table />
      <section />

      <section className="postbank-benefit">
        <article className="postbank-benefit-info">
          <h2 className="benefit-info-title">Финансиране от Пощенска банка</h2>
          <p className="benefit-text-info">
            Всички курсисти могат да се възползват от преференциалните условия за потребителски кредит и
            овърдрафт, за финансиране на своето обучение в СофтУни, като заявят лесно и удобно избрания продукт:
          </p>
          <p className="benefit-text-info">
            При последващ разговор със служител на банката, следва да се уточни, че искането е за кредит за
            финансиране на обучение в <span className="bolder-text">SoftUni</span> и да се предостави студентски
            номер.
            <span className="bolder-text">www.postbank.bg</span> - при попълване на апликацията, в поле
            „промоционален код“ трябва да се въведe
            <span className="bolder-text">SoftUni</span>/ СофтУни и при последващ разговор със служител на банката,
            да се предостави студентски
            номер.
          </p>
        </article>

        <img src="./images/postbank-logo.png" alt="Postbank" />
      </section>
      <main />

      <footer>
        <p className="footer-content">&copy; 2017-2020 SoftUni Creative. All Rights Reserved.</p>
      </footer>

    </div >
  );
}

export default App;