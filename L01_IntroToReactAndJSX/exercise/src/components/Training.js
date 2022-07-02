function Training() {
    return (
        <section className="training-programs" >
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
        </section >
    );
}

export default Training;