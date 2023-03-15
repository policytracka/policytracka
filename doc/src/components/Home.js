import React from "react";
import logo from "../img/logo.png";
import { AiFillExclamationCircle } from "react-icons/ai";
export default function Home() {
  return (
    <>
      <div className="relative h-[60vh]  p-10 text-center text-white bggrad">
        <div className=" w-full flex justify-between flex-row items-center">
          <img src={logo} alt="PolicyTracka" className="max-h-[45px]" />
          <div className="flex flex-row justify-between gap-10">
            <a href="#compare">เปรียบเทียบนโยบาย</a>
            <a href="#track">ติดตามนโยบาย</a>
            <a href="#about">เกี่ยวกับ</a>
          </div>
        </div>
        <h1 className="text-9xl font-bold">
          Creativity <br />
          From <br />
          Policy
        </h1>
        <div className="absolute -bottom-10 right-20 p-5 rounded-full border-primary rounded-tl-none shadow-xl bg-primary">
          <h1 className="text-2xl font-bold">“นโยบายที่เข้าถึงได้ทุกคน”</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center m-20 gap-10 ">
        <div className="border border-black shadow-lg rounded-lg p-5">
          <div className="flex flex-row gap-5 items-center">
            <AiFillExclamationCircle size={80} className="text-primary" />
            <h2 className="text-2xl font-semibold">นโยบายสร้างสรรค์ที่จําเจ</h2> 
          </div>

          <p>
            ในทุกๆปี ป้ายโฆษนาและนโยบายหาเสียงเลือกตั้งที่ถูกผลิตออกมา
            ถูกประชาชนเห็น ได้รับการชื่นชม การติเตียน นโยบายที่ดูนำสมัย
            อาจจะเป็นแค่นโยบายที่ถูกพูดถึงมาแล้ว 10 ปี แต่ไม่เคยได้ทำ
            และนโยบายบางอันอาจจะเป็นเรื่องเดิมๆ ที่ถูกเลือกมาแล้วเป็น 10 ปี
            แต่ก็ไม่เคยได้เปลี่ยนแปลงอะไร เป็นนโยบายที่ไม่มีความสร้างสรรค์
          </p>
        </div>
        <div className="border border-black shadow-lg rounded-lg p-5">
        <div className="flex flex-row gap-5 items-center">
            <AiFillExclamationCircle size={80} className="text-primary" />
            <h2 className="text-2xl font-semibold">การเข้าถึงที่ลําบาก</h2> 
          </div>
          <p className="">
            ส่งผลให้พลเมืองอาจตัดสินใจเลือกพรรคเหล่านั้นโดยไม่มีข้อมูลที่เพียงพอต่อการตัดสินใจ
            โดยที่ไม่มีข้อมูลสนับสนุนถึงความเป็นไปได้
            ในการดำเนินการที่อาจจะเป็นแค่นโยบายที่ถูกเอามาขายในทุก ๆ
            สมัยการเลือกตั้ง
            และไม่ได้รับการดำเนินการให้สำเร็จอย่างที่ควรจะเป็นรวมถึงไม่มีนโยบายใหม่
            ๆ ที่สร้างสรรค์ขึ้นเพื่อตอบสนอง ความต้องการของประชาชนจริง ๆ
          </p>
        </div>
      </div>
    </>
  );
}
