// export async function getData(url: string) {
//   const resp = await fetch(url);
//   const data = (await resp.json()) as {
//     properties: string[];
//   };
//   return data;
// }

// function loadData() {
//   getData("https://example.com").then((result) => {
//     console.log(result.properties.join(", "));
//   });
// }

// little modified version here child get error

// async function getData(url: string) {
//     const resp = await fetch(url)
//     if (resp.ok) {
//       const data = (await resp.json()) as {
//         properties: string[]
//       }
//       return data
//     }
//   }

// function loadDataM() {
//     getData("https://example.com").then((result) => {
//     console.log(result.properties.join(", "));
//   });
// }

//  Here error boils up to parent
async function getData(url: string): Promise<{ properties: string[] }> {
  const resp = await fetch(url);
  if (resp.ok) {
    const data = (await resp.json()) as {
      properties: string[];
    };
    return data;
  }
}

function loadDataM() {
  getData("https://example.com").then((result) => {
    console.log(result.properties.join(", "));
  });
}
