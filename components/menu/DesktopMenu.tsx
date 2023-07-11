import Link from "next/link"

import { useGetPlayer } from "@/hooks/queries/usePlayer"

import Icon from "../Icon"
import CharacterCard from "./CharacterCard"
import MainMenu from "./MainMenu"
import WeatherCard from "./WeatherCard"

type Props = {
  className?: string
}

const DesktopMenu = ({ className }: Props) => {
  const { data: player } = useGetPlayer()

  return (
    <div className={`w-72 py-8 px-4 bg-gray-900 ${className}`}>
      <Link
        href="/"
        className="flex font-serif text-3xl gap-3 items-center mb-4 mx-2"
      >
        <Icon type="pirate-flag" className="h-8 w-8" /> Lost Seas
      </Link>

      <MainMenu />

      {player && (
        <>
          <CharacterCard character={player.character} />
          <WeatherCard day={player.character.day} />
        </>
      )}
    </div>
  )
}

export default DesktopMenu
