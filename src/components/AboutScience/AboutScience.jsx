import silabus from "../../resource/silabus";

export default function AboutScience() {
  return (
    <div className="flex flex-col items-center gap-5 text-center text-white py-20">
      <h1 className="text-3xl font-semibold">Makroiqtisodiyot</h1>
      <p className="max-w-[900px] text-xl max-[425px]:text-base select-none">
        Makroiqtisodiyot – iqtisodiyotning umumiy darajadagi jarayonlarini
        o‘rganadigan sohasi bo‘lib, mamlakat yoki global miqyosda iqtisodiy
        o‘sish, inflyatsiya, ishsizlik, yalpi ichki mahsulot (YIM) kabi muhim
        ko‘rsatkichlarni tahlil qiladi.
      </p>
      <a
        href={silabus}
        className="block p-[12px_40px] bg-[#23d59c] rounded-[25px] duration-300 min-md:hover:bg-[#ffee00] active:bg-[#00cbff]"
        target="_blank"
      >
        Silabus
      </a>
    </div>
  );
}
