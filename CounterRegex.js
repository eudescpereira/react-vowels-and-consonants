function getMatches(str, regex) {
  var m = str.match(regex);
  return m === null ? 0 : m.lenght;
}

export const CounterRegex = ({ title, text, regex }) => (
  <h3>
    {title}: {getMatches(text.regex)}
  </h3>
);
