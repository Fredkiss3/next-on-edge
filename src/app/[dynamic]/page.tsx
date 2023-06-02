export default function Page(props: { params: { dynamic: string } }) {
  return (
    <h1>
      Hello
      <span
        style={{
          color: "red",
        }}
      >
        {props.params.dynamic}
      </span>
    </h1>
  );
}
