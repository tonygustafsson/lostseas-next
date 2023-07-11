import Link from "next/link"
import { useRouter } from "next/router"

import { useGetPlayer, usePlayer } from "@/hooks/queries/usePlayer"

import Icon from "../Icon"
import Map from "../Map"
import { useModal } from "../ui/Modal/context"

const MainMenu = () => {
  const { data: player } = useGetPlayer()
  const { pathname } = useRouter()
  const { logout } = usePlayer()
  const { setModal } = useModal()

  const numberOfShips = Object.values(player?.ships ?? {}).length
  const numberOfInventoryItems = Object.values(player?.inventory ?? {}).length

  const showMap = () => {
    setModal({
      id: "map",
      title: "Pick your destination",
      fullWidth: true,
      content: <Map currentTown={player?.character.town} />,
    })
  }

  return (
    <ul className="sidebar-menu">
      {player ? (
        <>
          <li className={`${pathname === "/" ? "active" : ""}`}>
            <Link href="/">
              <Icon type="pirate-hat" className="h-5 w-5" />
              Play
            </Link>
          </li>

          <li>
            <button onClick={showMap} disabled={!!player.character.journey}>
              <Icon type="map" className="h-5 w-5" />
              Map
            </button>
          </li>

          <li className="sidebar-menu-separator" aria-hidden></li>

          <li className={`${pathname === "/status" ? "active" : ""}`}>
            <Link href="/status">
              <Icon type="pirate-coat" className="h-5 w-5" />
              Status
            </Link>
          </li>

          <li className={`${pathname === "/ships" ? "active" : ""}`}>
            <Link href="/ships">
              <Icon type="galleon" className="h-5 w-5" />
              Ships
              <span className="badge badge-sm badge-primary">
                {numberOfShips}
              </span>
            </Link>
          </li>

          <li className={`${pathname === "/crew" ? "active" : ""}`}>
            <Link href="/crew">
              <Icon type="crew" className="h-5 w-5" />
              Crew members
              <span className="badge badge-sm badge-primary">
                {player?.crewMembers.count}
              </span>
            </Link>
          </li>

          <li className={`${pathname === "/inventory" ? "active" : ""}`}>
            <Link href="/inventory">
              <Icon type="inventory" className="h-5 w-5" />
              Inventory
              <span className="badge badge-sm badge-primary">
                {numberOfInventoryItems}
              </span>
            </Link>
          </li>

          <li className="sidebar-menu-separator" aria-hidden></li>

          <li className={`${pathname === "/settings" ? "active" : ""}`}>
            <Link href="/settings">
              <Icon type="settings" className="h-5 w-5" />
              Settings
            </Link>
          </li>

          <li>
            <a onClick={() => logout()}>
              <Icon type="signout" className="h-5 w-5" />
              Sign out
            </a>
          </li>
        </>
      ) : (
        <>
          <li className={`${pathname === "/login" ? "active" : ""}`}>
            <Link href="/login">
              <Icon type="signin" className="h-5 w-5" />
              Sign in
            </Link>
          </li>

          <li className={`${pathname === "/register" ? "active" : ""}`}>
            <Link href="/register">
              <Icon type="register" className="h-5 w-5" />
              Register
            </Link>
          </li>
        </>
      )}
    </ul>
  )
}

export default MainMenu
