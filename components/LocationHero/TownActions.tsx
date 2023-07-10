import { useCharacter } from "@/hooks/queries/useCharacter"

import Icon from "../Icon"

type Props = {
  location: Character["location"]
}

const TownActions = ({ location }: Props) => {
  const { move } = useCharacter()

  const handleMove = (location: SeaLocation | TownLocation) => {
    move({ location })
  }

  const TownMoveMap = {
    Shop: {
      icon: <Icon item="shop" className="text-cyan-600 w-6 h-6" />,
    },
    Tavern: {
      icon: <Icon item="tavern" className="text-cyan-600 w-6 h-6" />,
    },
    Bank: {
      icon: <Icon item="bank" className="text-cyan-600 w-6 h-6" />,
    },
    Market: {
      icon: <Icon item="market" className="text-cyan-600 w-6 h-6" />,
    },
    Shipyard: {
      icon: <Icon item="shipyard" className="text-cyan-600 w-5 h-5" />,
    },
  }

  return (
    <div className="bg-gray-900 rounded-b-lg p-4 flex items-center flex-col pb-8">
      <span className="text-xl font-serif">Change location</span>

      <div className="flex flex-wrap mt-4 justify-center gap-2 lg:gap-0 lg:join">
        {Object.entries(TownMoveMap).map(([currentLocation, { icon }]) => (
          <button
            key={`change-location-${currentLocation}`}
            className={`btn text-base ${
              currentLocation === "Harbor" ? "btn-primary" : " bg-gray-800"
            } btn join-item`}
            onClick={() =>
              handleMove(currentLocation as TownLocation | SeaLocation)
            }
            disabled={location === currentLocation}
          >
            {icon}
            {currentLocation}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TownActions
