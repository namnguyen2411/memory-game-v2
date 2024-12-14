const DecorativePokeball = () => {
  return (
    <div className="aspect-square h-14 animate-wiggle rounded-full lg:h-24">
      {/* red part */}
      <div className="z-10 flex h-[47%] items-end justify-center rounded-t-full bg-red600" />
      {/* black part */}
      <div className="mx-auto flex h-[6%] w-[95%] items-center justify-center bg-black">
        <div className="flex aspect-square w-[52%] items-center justify-center rounded-full bg-black">
          <div className="flex aspect-square h-[70%] items-center justify-center rounded-full bg-white">
            <div className="aspect-square h-[48%] rounded-full border-2 border-black bg-white" />
          </div>
        </div>
      </div>
      {/* white part */}
      <div className="h-[47%] rounded-b-full bg-white" />
    </div>
  )
}
export default DecorativePokeball
