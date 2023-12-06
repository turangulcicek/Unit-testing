import userEvent from "@testing-library/user-event";
import Toppings from ".";
import { render, getByRole, screen } from "@testing-library/react";

test("sosları ekleme ve çıkarmanın toplam fiyata etkisi", async () => {
  render(<Toppings />);
  const user = userEvent.setup();
  //   toplam başlığını çağırma
  const total = screen.getByRole("heading", { name: /Soslar Ücreti: 0/i });

  //   sosu sepete ekleme ve sosu çağırma
  const mochiCheck = await screen.findByRole("checkbox", { name: /Mochi/i });
  //   bir kere tıklayıp ekliyoruz
  await user.click(mochiCheck);
  //   Toplamı kontrol et (3 olması lazım)
  expect(total).toHaveTextContent("3");
  //   sosu sepetten çıkarma
  await user.click(mochiCheck);
  //   toplam kontrol et (0 olması lazım)
  expect(total).toHaveTextContent("0");
});
