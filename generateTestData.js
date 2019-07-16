function randomLa() {
  const md = "Bradford Calderdale Kirklees Leeds Wakefield".split(/\s+/);
  return md[Math.floor(Math.random() * md.length)];
}

function randomCount() {
  return Math.random() * 100;
}

function createEntry(i) {
  return [ `Company ${i}`, randomLa(), randomCount() ];
}

const heading = [ 'Company', 'Local_Authority', 'Index' ]
const data = Array.from(Array(100), (d, i) => i).map(createEntry);

console.log([heading, ...data].map(_ => _.join(',')).join('\n'));