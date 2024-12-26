const LIST_SIZE = 20000;

const PreparedList = ({text}) => {
  const list = [];

  for (let i = 0; i < LIST_SIZE; i++) {
    list.push(<li key={i}>{text}</li>)
  }

  return (
    <ul>{list}</ul>
  )
};

export default PreparedList;