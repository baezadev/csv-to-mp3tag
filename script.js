const input = document.getElementById("input");
const output = document.getElementById("output");

input.oninput = function () {
  const value = input.value;

  const lines = value.split("\n");

  let texts = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const splitted = line.split("\t");
    const title = splitted[0];
    const artist = splitted[1];

    console.log(`Title: ${title}, Artist: ${artist}`);

    texts.push(
      `%artist% IS "${artist}" AND %title% IS "${title}"${i < lines.length - 1 ? " OR" : ""}`,
    );
  }
 
  output.value = texts.join(" ");
};

const copyButton = document.getElementById("copy");

copyButton.onclick = function () {
  output.select();
  output.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(output.value);
  alert("Text copied to clipboard!");
};
