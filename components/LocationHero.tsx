import { useGetPlayer } from "@/hooks/queries/usePlayer"
import { getTownsNationality } from "@/utils/townNation"

import Flag from "./icons/Flag"
import Move from "./Move"
import Travel from "./Travel"

const LocationHero = () => {
  const { data: player } = useGetPlayer()
  const nation = getTownsNationality(player?.character.town)

  if (!player) return null

  return (
    <div
      className="hero rounded-lg"
      style={{
        backgroundImage: `url("img/place/${player?.character.location
          .replace(" ", "-")
          .toLowerCase()}_england.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content py-24">
        <div className="max-w-2xl bg-base-300 bg-opacity-60 p-8 rounded-lg">
          <h1 className="font-serif mb-4 text-5xl">
            {player?.character.town}s {player?.character.location}
          </h1>

          <h2 className="font-serif mb-5 text-2xl flex gap-3 justify-center">
            <Flag nation={nation} className="opacity-[0.8]" />
            {nation}
          </h2>

          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <div className="flex gap-4 mt-4 justify-center">
            <Move />
            <Travel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationHero