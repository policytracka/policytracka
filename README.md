# นโยบายtracka 
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)

Thailand political policy creativity tracker 🚀

ในปัจจุบันการนโยบายหาเสียงจากพรรคการเมืองใหม่ ๆ เกิดขึ้นมากมาย แต่ขาดซึ่งการรายงานความคืบหน้า
ทำให้ประชาชนไม่สามารถติดตามความคืบหน้าในการดำเนินนโยบายนำร่องที่มีการหาเสียง และไม่มีข้อมูลที่เป็นกลางสำหรับการสืบค้น,
ในทุกๆปี ป้ายโฆษนาและนโยบายหาเสียงเลือกตั้งที่ถูกผลิตออกมา ถูกประชาชนเห็น ได้รับการชื่นชม การติเตียน แต่ก็กลับถูกลืมไปในทุกๆปี
 นโยบายที่ใครทำได้ดี นโยบายที่ใครทำไม่ได้ตามที่สัญญา เหมือนกับว่าทุกอย่างกลับไปเริ่มใหม่ เริ่มต้นตั้งแต่ตอนที่เรา "เพิ่งเริ่มเลือกตั้งครั้งแรก"
นโยบายที่ดูนำสมัย อาจจะเป็นแค่นโยบายที่ถูกพูดถึงมาแล้ว 10 ปีแต่ไม่เคยได้ทำ และนโยบายบางอันอาจจะเป็นเรื่องเดิมๆ ที่ถูกเลือกมาแล้วเป็น 10 ปี แต่ก็ไม่เคยได้เปลี่ยนอะไรไปเลย
ส่งผลให้พลเมืองอาจตัดสินใจเลือกพรรคเหล่านั้นโดยไม่มีข้อมูลที่เพียงพอต่อการตัดสินใจ เพียงแต่เห็นชอบต่อนโยบาย
โดยที่ไม่มีข้อมูลสนับสนุนถึงความเป็นไปได้ในการดำเนินการ ที่อาจจะเป็นแค่นโยบายที่ถูกเอามาขายในทุกๆสมัยการเลือกตั้ง และไม่ได้รับการดำเนินการให้สำเร็จอย่างที่ควรจะเป็น


รวบรวมนโยบายของแคนดิเดทนักการเมืองในกรุงเทพ ให้เราเลือกคนที่ใช่ได้ด้วยข้อมูลที่เพียงพอ
- 1. รวบรวมข้อมูลนโยบายที่ถูกใช้ในการหาเสียงทุกๆปี เข้าสู่ระบบฐานข้อมูลเปิด โดยใช้ข้อมูลจากป้ายหาเสียงที่ประชาชนถ่ายและส่งขึ้นมาบนแพลตฟอร์มดึง Text และ Topic ของนโยบาย มาเพิ่มเป็นหัวข้อของนโยบายในพรรคนั้นๆ
- 2. จากนั้นแสดงผลออกเป็น Dashboard ซึ่งพรรคการเมืองสามารถเข้ามา Update Progress ซึ่งจะเป็นหัวข้อย่อยในนโยบายนั้นๆ หรือเพิ่มหัวข้อของนโยบายอื่นๆขึ้นมาได้ ซึ่งจะถูกนำเสนออกมาในรูปแบบของ Progress Bar ว่าพรรคไหนมีการ Update ข้อมูลบ่อยครั้ง พรรคไหนไม่นำเสนอข้อมูลเลย และมีการดำเนินการนโยบายไปเท่าไหร่แล้ว
- 3. เรายังสามารถทำการ Visualize นโยบายในภาพรวม จากการทำ TFIDF แล้วดึง Keyword ของนโยบายแต่ละพรรคมาทำการนำเสนอได้ตลอดทุกปี ว่าพรรคไหนมีนโยบายในหัวข้อเดียวกัน แต่ข้อเสนอต่างกันยังไงบ้าง หรือพรรคไหนที่นโยบายแปลกใหม่ ที่ไม่ค่อยถูกหยิบยกมาพูดในช่วงหลายปีมานี้
การรวบรวมข้อมูลและการนำเสนอนโยบายต่างๆให้มาอยู่ในที่เดียวกัน จะช่วยให้ประชาชนอย่างเรา สามารถมองเห็นภาพรวมของนโยบายแต่ละพรรคที่มีการเติบโต เปลี่ยนแปลง หรือไม่เปลี่ยนไปในตลอดหลายปี เทียบกับพรรค หรือนักการเมืองแต่ละคนได้อย่างชัดเจน
4.เนื่องจากข้อมูลนี้เป็นข้อมูลสาธารณะ ซึ่งเป็นเหมือนพื้นที่การแข่งขันนโยบายกันระหว่างพรรคการเมือง
ข้อมูลที่ไม่ถูกต้อง จะถูกตรวจสอบได้ง่ายๆโดยทั้งประชาชน เอกชน หน่วยงานอิสระ และพรรคการเมือง
การมีฐานข้อมูลนโยบายที่จะมี API ให้นักพัฒนานโยบาย และผู้ที่อยากนำเสนอข้อมูล หรือวิเคราะห์นโยบายนั้นนำไปใช้ต่อได้ง่าย จะช่วยให้เราสามารถมองเห็นถึงปัญหาที่ถูกนำเสนอมาหลายปี และวิธีการที่เคยถูกใช้
"เพื่อสร้างนโยบายใหม่ ที่สร้างสรรค์และดียิ่งขึ้นกว่าเดิม มาแก้ปัญหาเก่าๆที่อยู่กับเรามานาน
ทำให้การที่ทุกคนจะตัดสินใจเลือกนโยบายด้วย "ข้อมูล" และ "เหตุผล" เข้าไกล้ความเป็นจริงมากขึ้น"
