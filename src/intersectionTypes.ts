//? Intersection types in TypeScript can be described using the & (ampersand) operator.

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

function makeWeek(): Date & { end: Date } {
  const start = new Date();
  const end = new Date(start.valueOf() + ONE_WEEK);

  return { ...start, end };
}

const thisWeek = makeWeek();

thisWeek.toISOString();
thisWeek.end.toISOString();
