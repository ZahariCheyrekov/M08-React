function Benefits() {
    return (
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
    );
}

export default Benefits;