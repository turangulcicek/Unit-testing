import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("koşulların onaylanmasına göre buton aktifliği", async () => {
  // test bileşenini sanalda ekrana basma
  render(<Form />);
  //   user'ın kurulumunu yap
  const user = userEvent.setup();
  //   gerekli elamanı alma
  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  expect(orderBtn).toBeDisabled();
  //   checkbox tikle
  await user.click(checkBox);
  //   buton aktif mi kontrol et
  expect(orderBtn).toBeEnabled();
  await user.click(checkBox);
  expect(orderBtn).toBeDisabled();
});

test("onayla butonu hover olunca bildirim çıkar", async () => {
  render(<Form />);
  const user = userEvent.setup();
  //   gerekli elemanları çağırma
  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  //   butonu aktif yap
  await user.click(checkBox);
  //   mouse u butonun üzerine getir
  fireEvent.mouseEnter(button);
  //   pop up çağırma
  const popup = screen.getByText("Size gerçekten", { exact: false });
  //   bildirim gözüküyor mu?
  expect(popup).toBeVisible();
  fireEvent.mouseLeave(button);
  expect(popup).not.toBeVisible();
});
