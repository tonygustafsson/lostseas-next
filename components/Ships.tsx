import { FormEvent, useState } from "react"

import Button from "@/components/ui/Button"
import { useGetUser, useUserMutations } from "@/hooks/queries/useUser"

import Select from "./ui/Select"
import Table from "./ui/Table"
import TextField from "./ui/TextField"

enum ShipType {
  FRIGATE = "Frigate",
  SLOOP = "Sloop",
  GALLEON = "Galleon",
}

const Ships = () => {
  const { data: user } = useGetUser()
  const { createShip, removeShip } = useUserMutations()

  const [shipType, setShipType] = useState(ShipType.FRIGATE)

  const handleCreateShip = async (e: FormEvent) => {
    e.preventDefault()

    const shipData = {
      userId: user?.id || "",
      type: shipType,
    }

    createShip(shipData)

    setShipType(ShipType.FRIGATE)
  }

  const handleRemoveShip = async (id: string) => {
    if (!id) return

    removeShip({ shipId: id, userId: user?.id || "" })
  }

  return (
    <>
      {!!Object.values(user?.ships || [])?.length && (
        <>
          <h3 className="text-xl text mt-8 mb-2">Ships</h3>

          <Table
            headings={["Name", "Type", "Created", ""]}
            rows={Object.values(user?.ships || []).map((ship, idx) => [
              ship.name,
              ship.type,
              `${new Date(ship.createdDate).toLocaleDateString()} ${new Date(
                ship.createdDate
              ).toLocaleTimeString()}`,
              <Button
                key={`ship-remove-${idx}`}
                size="sm"
                className="ml-auto flex"
                onClick={() => handleRemoveShip(ship.id)}
              >
                Delete
              </Button>,
            ])}
          />
        </>
      )}

      <form
        onSubmit={handleCreateShip}
        className="mt-8 flex items-bottom gap-3"
      >
        <TextField
          type="hidden"
          name="userId"
          id="userId"
          value={user?.id || ""}
        />

        <Select
          label="Ship type"
          name="ship_type"
          id="ship_type"
          value={shipType}
          options={Object.values(ShipType)}
          onChange={setShipType}
        />

        <Button type="submit" size="sm" className="mt-7">
          Create new ship
        </Button>
      </form>
    </>
  )
}

export default Ships
