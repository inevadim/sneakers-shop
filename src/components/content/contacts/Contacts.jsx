import style from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <h1>Наши контакты:</h1>
      <div className={style.wrapperContent}>
        <img src="/assets/img/shop.webp" alt="img" />
        <div className={style.text}>
          Магазин оригинальных кроссовок в самом сердце твоего города даст возможность каждому
          ценителю кросовок выбрать себе что-то по вкусу. На полках наешего магазина представлены
          новинки Nike, Adidas, Puma. Эксклюзивные новинки, легендарные модели и именно то, что
          нравится тебе.
          <span>
            <img src="/assets/img/header/contacts/phone.svg" alt="phone" /> +375 33 333-33-33
          </span>
          <span>
            <img src="/assets/img/header/contacts/email.png" alt="phone" /> krutoyMagazin@gmail.com
          </span>
          <span>
            <img src="/assets/img/header/contacts/clock.svg" alt="clock" /> 10.00-22.00 ежедневно
          </span>
        </div>
      </div>
    </div>
  );
};
