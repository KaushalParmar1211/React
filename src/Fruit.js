function Fruit(props) {
  const { ...fruit } = props.fruits;
  return (
    <>
      <h3>Fruit Details :</h3>
      <p>Name :{fruit.name}</p>
      <p>Color :{fruit.color}</p>
    </>
  );
}

export default Fruit;
