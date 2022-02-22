function newHourglass(num) {
  let array = [
    (h = "#".repeat(19)),
    ...[17, 15, 13, 9, 5, 1, 5, 9, 13, 15, 17].map(
      (d, i) => (
        (t = i > 5 ? -v : v),
        (v -= i < 5 ? d : 1 - d),
        (e = " ".repeat(d / 2)),
        (b = "#".repeat(10 - d / 2)),
        b +
          (
            ".".repeat(t < d && d - t) +
            e +
            " ."[((i > 4) & (num > i - 6) & (t >= d)) | 0] +
            e
          ).slice(0, d) +
          b
      ),
      (v = num)
    ),
    h,
  ].join("\n");

  console.log(array);
}

let count = 0

setInterval(() => {
  newHourglass(++count)
}, 1000)

