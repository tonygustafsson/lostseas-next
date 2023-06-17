import { useState } from "react"

import MerchandiseCard from "@/components/MerchandiseCard"
import MerchandiseIcon from "@/components/MerchandiseIcon"
import { SHIP_TYPES } from "@/constants/ship"
import { useGetPlayer } from "@/hooks/queries/usePlayer"
import { useShipyard } from "@/hooks/queries/useShipyard"

const Shipyard = () => {
  const { data: player } = useGetPlayer()
  const { buy, sell } = useShipyard()

  const [tab, setTab] = useState<"Buy" | "Sell" | "Repair">("Buy")

  const handleBuy = (item: keyof typeof SHIP_TYPES) => {
    buy({ playerId: player?.id || "", item })
  }

  const handleSell = (id: Ship["id"]) => {
    sell({ playerId: player?.id || "", id })
  }

  return (
    <>
      <div className="tabs justify-center mb-8">
        <a
          className={`tab tab-lg text-2xl tab-bordered font-bold px-8 ${
            tab === "Buy" ? "tab-active" : ""
          }`}
          onClick={() => setTab("Buy")}
        >
          Buy
        </a>
        <a
          className={`tab tab-lg text-2xl tab-bordered font-bold px-8 ${
            tab === "Sell" ? "tab-active" : ""
          }`}
          onClick={() => setTab("Sell")}
        >
          Sell
        </a>
        <a
          className={`tab tab-lg text-2xl tab-bordered font-bold px-8 ${
            tab === "Repair" ? "tab-active" : ""
          }`}
          onClick={() => setTab("Repair")}
        >
          Repair
        </a>
      </div>

      {tab === "Buy" && (
        <div className="flex flex-wrap gap-6">
          {Object.entries(SHIP_TYPES).map(
            ([shipType, { description, buy }]) => (
              <MerchandiseCard
                key={`shipyard-buy-${shipType}`}
                title={shipType}
                //indicator={player?.inventory[inventoryItem]?.toString() || "0"}
                icon={<MerchandiseIcon size="lg" item={shipType} />}
                body={
                  <>
                    <p>{description}</p>

                    <div className="flex gap-2">
                      <div className="badge badge-secondary">
                        Price: {buy} dbl
                      </div>
                    </div>
                  </>
                }
                actions={
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() =>
                      handleBuy(shipType as keyof typeof SHIP_TYPES)
                    }
                  >
                    Buy
                  </button>
                }
              />
            )
          )}
        </div>
      )}

      {tab === "Sell" && (
        <div className="flex flex-wrap gap-6 mt-8">
          {Object.entries(player?.ships || []).map(([id, { name, type }]) => {
            const shipInfo = SHIP_TYPES[type as keyof typeof SHIP_TYPES]

            if (!shipInfo) return null

            return (
              <MerchandiseCard
                key={`shipyard-sell-${name}`}
                title={name}
                //indicator={player?.inventory[inventoryItem]?.toString() || "0"}
                icon={<MerchandiseIcon size="lg" item={type} />}
                body={
                  <>
                    <p>{shipInfo.description}</p>

                    <div className="flex gap-2">
                      <div className="badge badge-secondary">
                        Price: {shipInfo.sell} dbl
                      </div>
                    </div>
                  </>
                }
                actions={
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleSell(id)}
                  >
                    Sell {type}
                  </button>
                }
              />
            )
          })}
        </div>
      )}

      {tab === "Repair" && <p>Not implemented yet.</p>}
    </>
  )
}

export default Shipyard
