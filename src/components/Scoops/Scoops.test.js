import {
  findAllByRole,
  getAllByRole,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";
import Card from "../Card";

/* 
! Seçiciler
? Query [All] bySelector(Byseçici)
* Query > get | find | query
* get:Element başlangıçta DOM'da var ise kullanılır
* find: elementin ne zaman ekrana basılacağı belli değilse (asycn)
* query: get ile benzer çalışır elemanı bulamazsa null döndürür hata vermez 
* find methodu promise döndürür bu yüzden asycn await vb. ele alınması gerekir
* all kullandığımız zaman elemanlar hep dizi döner
 */

test("veri api'den geldikten sonra ekrana kartlar basılır", async () => {
  render(<Scoops />);
  // ekrana basılan bütün kartları çağıralım (resimlerini )
  const images = await screen.findAllByRole("img", { name: "çeşit resmi" });
  // gelen resimlerin sayısını test etme
  expect(images.length).toBeGreaterThanOrEqual(2);
});
// test driven development (red to green test)
test("çeşit ekleme ve sifirlamanin toplam fiyata etkisi", async () => {
  render(<Scoops />);
  const user = userEvent.setup();
  const total = screen.getByRole("heading", { name: "Ücret 0 TL" });

  // toplam fiyat 0 dan başlar
  expect(total).toHaveTextContent("0");

  // bütün ekle butonlarını çağır
  const addButtons = await screen.findAllByRole("button", { name: /ekle/i });
  const delButtons = screen.findAllByRole("button", { name: /Sifirla/i });

  // bir tane çeşit ekle ve fiyatı check et
  await user.click(addButtons[0]);

  expect(total).toHaveTextContent("20");
  // iki tane daha ekle ve fiyatı check et
  await user.dblClick(addButtons[2]);
  expect(total).toHaveTextContent("60");

  // sıfırla butonunun işlevselliğği
  // 1 tane çıkar mint chip ürünü bu alltaki
  await user.click(delButtons[0]);
  expect(total).toHaveTextContent("80");
  await user.click(delButtons[2]);
  expect(total).toHaveTextContent("0");
});
