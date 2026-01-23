export default function CenterADiv() {
  return (
    <>
      <div className="h-dvh w-dvw border border-red-600 flex justify-center items-center">
        <div className="border border-red">Make me Center</div>
      </div>
      <hr />
      <div className="h-dvh w-dvw border border-red-600 grid place-items-center">
        <div className="border border-red">Make me center using grid</div>
      </div>
    </>
  );
}
