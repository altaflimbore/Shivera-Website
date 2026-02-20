import img1 from "../Images/1.png"
import img2 from "../Images/2.png"
import img3 from "../Images/3.png"
import img4 from "../Images/4.png"
import img5 from "../Images/5.png"
import img6 from "../Images/6.png"

const BackgroundGraphics = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Top-left security shield */}
      <img
        src={img1}
        alt=""
        className="hidden md:block absolute -left-24 top-10 w-72 opacity-20"
      />

      {/* Top-right training / certification */}
      <img
        src={img2}
        alt=""
        className="hidden lg:block absolute -right-20 top-24 w-[520px] opacity-15"
      />

      {/* Center-left DPDP shield */}
      <img
        src={img3}
        alt=""
        className="hidden xl:block absolute -left-32 top-1/2 w-[520px] -translate-y-1/2 opacity-15"
      />

      {/* Faint circular rings */}
      <img
        src={img4}
        alt=""
        className="absolute left-1/2 top-1/2 w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-10"
      />

      {/* Bottom-left location marker */}
      <img
        src={img5}
        alt=""
        className="hidden lg:block absolute left-10 bottom-10 w-64 opacity-15"
      />

      {/* Bottom-right cloud security */}
      <img
        src={img6}
        alt=""
        className="hidden md:block absolute -right-16 bottom-0 w-80 opacity-20"
      />
    </div>
  )
}

export default BackgroundGraphics


