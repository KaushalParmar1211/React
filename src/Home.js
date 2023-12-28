function Home(props) {
  const a = +props.value1;
  const b = +props.value2;
  return (
    <>
      {props.children}
      <br></br>A value is :{a}
      <br></br>B value is :{b}
      <br></br>
      Sum is :{a + b}
      <br></br>
    </>
  );
}
Home.defaultProps = {
  value1: 30,
  value2: 20,
};

export default Home;
