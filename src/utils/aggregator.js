export default function aggregator({ data }) {
  if (data.length === 0) return;
  const sum = data.map(_ => Number.parseFloat(_.score)).reduce((p, c) => p + c, 0);
  return sum / data.length;
}
