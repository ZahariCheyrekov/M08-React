function Taxes() {
    return (
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
    );
}

export default Taxes;