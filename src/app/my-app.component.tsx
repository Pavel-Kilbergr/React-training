import "./my-app.component.css";

function MyNestedComponent() {
  return <p className="nested">I am a nested component dfigudfiogdfogdgdfg</p>;
}

export function MyApp() {
  return (
    <>
      <h1 className="heading">Hello, World!</h1>
      <MyNestedComponent />
    </>
  );
}
