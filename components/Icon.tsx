import { AiOutlineShop } from "react-icons/ai"
import { BsTools } from "react-icons/bs"
import { FiLogIn, FiLogOut, FiSettings, FiUserPlus } from "react-icons/fi"
import {
  GiBank,
  GiBrandyBottle,
  GiCargoShip,
  GiCoins,
  GiFarmer,
  GiHoodedFigure,
  GiMeat,
  GiOpenedFoodCan,
  GiPirateCannon,
  GiPirateCaptain,
  GiPirateCoat,
  GiPirateFlag,
  GiPirateHat,
  GiPorcelainVase,
  GiPowder,
  GiShoonerSailboat,
  GiSmallFishingSailboat,
  GiSmokingPipe,
  GiTavernSign,
  GiWaterFlask,
  GiWineBottle,
} from "react-icons/gi"
import { HiMenu } from "react-icons/hi"
import { RiMedicineBottleLine, RiTreasureMapLine } from "react-icons/ri"
import { TbSailboat } from "react-icons/tb"

type IconPlaceType = "shop" | "bank" | "tavern" | "market" | "shipyard"
type IconMerchandiseType =
  | "food"
  | "water"
  | "porcelain"
  | "spices"
  | "tobacco"
  | "rum"
  | "dinner"
  | "wine"
  | "medicine"
  | "cannons"
type IconShipType = "brig" | "merchantman" | "galleon" | "frigate"
type IconSystemType = "settings" | "signin" | "signout" | "register" | "menu"
type IconMiscType =
  | "captain"
  | "pirate-hat"
  | "pirate-flag"
  | "pirate-coat"
  | "map"
  | "crew"
  | "inventory"
  | "gold"

export type IconType =
  | IconPlaceType
  | IconMerchandiseType
  | IconShipType
  | IconSystemType
  | IconMiscType

type Props = {
  item: IconType
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
}

const getSizeClass = (size?: string) => {
  switch (size) {
    case "xs":
      return "w-5 h-5"
    case "sm":
      return "w-7 h-7"
    case "md":
      return "w-7 h-7"
    case "lg":
      return "w-11 h-11"
    case "xl":
      return "w-16 h-16"
    default:
      return ""
  }
}

const Icon = ({ item, size, className = "" }: Props) => {
  const sizeClass = getSizeClass(size)
  const iconClass = `${className} ${sizeClass}`

  switch (item) {
    // Merchandise
    case "food":
      return <GiMeat className={iconClass} />
    case "water":
      return <GiWaterFlask className={iconClass} />
    case "porcelain":
      return <GiPorcelainVase className={iconClass} />
    case "spices":
      return <GiPowder className={iconClass} />
    case "medicine":
      return <RiMedicineBottleLine className={iconClass} />
    case "tobacco":
      return <GiSmokingPipe className={iconClass} />
    case "rum":
      return <GiBrandyBottle className={iconClass} />
    case "dinner":
      return <GiMeat className={iconClass} />
    case "wine":
      return <GiWineBottle className={iconClass} />
    case "cannons":
      return <GiPirateCannon className={iconClass} />

    // Places
    case "shop":
      return <AiOutlineShop className={iconClass} />
    case "bank":
      return <GiBank className={iconClass} />
    case "tavern":
      return <GiTavernSign className={iconClass} />
    case "market":
      return <GiFarmer className={iconClass} />
    case "shipyard":
      return <BsTools className={iconClass} />

    // Ships
    case "brig":
      return <TbSailboat className={iconClass} />
    case "merchantman":
      return <GiCargoShip className={iconClass} />
    case "galleon":
      return <GiShoonerSailboat className={iconClass} />
    case "frigate":
      return <GiSmallFishingSailboat className={iconClass} />

    // System
    case "signin":
      return <FiLogIn className={iconClass} />
    case "signout":
      return <FiLogOut className={iconClass} />
    case "settings":
      return <FiSettings className={iconClass} />
    case "register":
      return <FiUserPlus className={iconClass} />
    case "menu":
      return <HiMenu className={iconClass} />

    // Misc
    case "gold":
      return <GiCoins className={iconClass} />
    case "captain":
      return <GiPirateCaptain className={iconClass} />
    case "pirate-hat":
      return <GiPirateHat className={iconClass} />
    case "pirate-flag":
      return <GiPirateFlag className={iconClass} />
    case "map":
      return <RiTreasureMapLine className={iconClass} />
    case "pirate-coat":
      return <GiPirateCoat className={iconClass} />
    case "crew":
      return <GiHoodedFigure className={iconClass} />
    case "inventory":
      return <GiOpenedFoodCan className={iconClass} />

    default:
      return null
  }
}

export default Icon
