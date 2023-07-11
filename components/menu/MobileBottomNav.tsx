import Link from "next/link"
import { useRouter } from "next/router"

import { useGetPlayer } from "@/hooks/queries/usePlayer"

import Icon from "../Icon"
import Map from "../Map"
import { useModal } from "../ui/Modal/context"

type Props = {
  setMobileMenuOpen: (open: (prev: boolean) => boolean) => void
}

const MobileBottomNav = ({ setMobileMenuOpen }: Props) => {
  const { pathname } = useRouter()
  const { data: player } = useGetPlayer()
  const { setModal } = useModal()

  const showMap = () => {
    setModal({
      id: "map",
      title: "Pick your destination",
      fullWidth: true,
      content: <Map currentTown={player?.character.town} />,
    })
  }

  return (
    <div className="btm-nav z-10">
      <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
        <Icon type="pirate-hat" className="h-5 w-5" />
        Play
      </Link>

      <button
        onClick={() => setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)}
      >
        <Icon type="menu" className="h-5 w-5" />
        Menu
      </button>

      <button onClick={showMap} disabled={!!player?.character.journey}>
        <Icon type="map" className="h-5 w-5" />
        Map
      </button>
    </div>
  )
}

export default MobileBottomNav
