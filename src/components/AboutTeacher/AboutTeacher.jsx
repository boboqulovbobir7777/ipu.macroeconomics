import { useState } from "react";

import Wrapper from "../Wrapper/Wrapper";

import teacherImage from "../../assets/teacher.png";

export default function AboutTeacher() {
  let [allText, setAllText] = useState(false);
  return (
    <section className="mb-15">
      <Wrapper className="flex items-center justify-between gap-10 max-md:flex-col-reverse ">
        <div className="flex flex-col gap-5 max-w-[700px]">
          <h3 className="text-xl font-semibold">
            Qurbonov Аlisher Boboqulovich
          </h3>
          <div className="h-[1px] bg-black"></div>
          <p className="select-none">
            1998 yil Qarshi muhandislik iqtisodiyot institutini tugatgan.
            iqtisod fanlari nomzodi, profesor.2002 yildan buyon Qarshi
            muhandislik iqtisodiyot institutida ishlab kelmoqda. Institutning
            “Iqtisodiyot va menejment” kafedrasida assistent, katta o‘qituvchi,
            profesor shuningdek, “Iqtisodiyot” kafedrasi mudiri lavozimlarida
            ishlagan.
            {allText
              ? "2010 yilda Toshkent shahridagi Bank-moliya akademiyasida 08.00.04-Agrosanoat majmuasi iqtisodiyoti ixtisosligi bo‘yicha “Agrosanoat majmuida kichik tadbirkorlikni rivojlantirsh yo‘nalishlari” mavzusidagi dissertasiya ishii himoya qilgan.  A.B.Qurbonov shu bugunga qadar 80 dan ortiq ilmiy va 25 dan ortiq uslubiy ishlarning muallifidir. Shundan 5 ta darslik, 3 ta monografiya, 30 dan ortiq ilmiy maqolalar va 50 ga yaqin tezislar chop ettirgan. Shu jumladan xorijiy  mamlakatlarda 6 ta ilmiy maqola va 15 dan ortiq tezislar chop ettirgan."
              : ""}
            <span
              className="cursor-pointer points text-blue-600"
              title={allText ? "yashirish" : "ko'proq malumot"}
              onClick={() => setAllText(!allText)}
            >
              {allText ? "(yashirish)" : "(davomi ko'rish uchun bosing...)"}
            </span>
          </p>
        </div>
        <div className="max-w-2xs w-full max-md:w-[150px] rounded-2xl overflow-hidden">
          <img src={teacherImage} alt="Teacher" className="w-full" />
        </div>
      </Wrapper>
    </section>
  );
}
