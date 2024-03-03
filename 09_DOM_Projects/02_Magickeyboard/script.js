const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  insert.innerHTML = `
  <div style="font-family: Arial, sans-serif;">
  <table style="border-collapse: collapse; width: 100%; border: 2px solid ${randomColor}; border-radius: 8px;">
    <tr style="background-color: ${randomColor}; color: white;">
      <th style="border: none; text-align: left; padding: 12px;">Key</th>
      <th style="border: none; text-align: left; padding: 12px;">Keycode</th>
      <th style="border: none; text-align: left; padding: 12px;">Code</th>
    </tr>
    <tr style="background-color: rgba(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, 0.5);">
      <td style="border: none; text-align: left; padding: 12px;">${e.key}</td>
      <td style="border: none; text-align: left; padding: 12px;">${
        e.keyCode
      }</td>
      <td style="border: none; text-align: left; padding: 12px;">${e.code}</td>
    </tr>
  </table>
</div>
    `;
});
