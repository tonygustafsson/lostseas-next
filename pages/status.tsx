import { GetServerSideProps } from "next"
import Link from "next/link"

import ChangeCharacterForm from "@/components/ChangeCharacterForm"
import Icon from "@/components/Icon"
import Flag from "@/components/icons/Flag"
import DefaultLayout from "@/components/layouts/default"
import { useModal } from "@/components/ui/Modal/context"
import { useGetPlayer } from "@/hooks/queries/usePlayer"
import { getCurrentDate } from "@/utils/date"
import { getLoggedInServerSideProps } from "@/utils/next/getLoggedInServerSideProps"

const Status = () => {
  const { data: player } = useGetPlayer()
  const { setModal } = useModal()

  const currentDate = getCurrentDate(player?.character.day || 0)

  const openCharacterEditModal = () => {
    setModal({
      id: "editcharacter",
      title: "Change your character",
      content: <ChangeCharacterForm />,
    })
  }

  if (!player) {
    return <p>Access denied</p>
  }

  return (
    <DefaultLayout>
      <h1 className="text-3xl font-serif text mb-6">Status</h1>

      <div className="card w-full bg-gray-800 shadow-lg mt-8 rounded-md">
        <div className="card-body p-6">
          <h2 className="card-title text-3xl font-normal font-serif">
            {player?.character.name}
          </h2>

          <div className="stats gap-4 mt-4">
            <div className="stat bg-gray-700">
              <div className="stat-figure text-secondary">
                <Flag
                  nation={player?.character.nationality}
                  size={32}
                  className="opacity-[0.8]"
                />
              </div>
              <div className="stat-title">Nationality</div>
              <div className="stat-value">{player?.character.nationality}</div>
            </div>

            <div className="stat bg-gray-700">
              <div className="stat-figure text-secondary">
                <Icon item="clock" className="h-8 w-8" />
              </div>
              <div className="stat-title">Age</div>
              <div className="stat-value">{player?.character.age}</div>
            </div>

            <div className="stat bg-gray-700">
              <div className="stat-figure text-secondary">
                {player.character.gender === "Male" ? (
                  <Icon item="male" className="h-8 w-8" />
                ) : (
                  <Icon item="female" className="h-8 w-8" />
                )}
              </div>
              <div className="stat-title">Gender</div>
              <div className="stat-value">{player?.character.gender}</div>
            </div>
          </div>

          <div className="card-actions justify-end mt-4">
            <button
              onClick={openCharacterEditModal}
              className="btn btn-primary btn-sm"
            >
              Change
            </button>
          </div>

          <div className="stats gap-4 mt-4">
            <div className="stat bg-gray-700">
              <div className="stat-figure text-secondary">
                <Icon item="gold" className="h-8 w-8" />
              </div>
              <div className="stat-title">Gold</div>
              <div className="stat-value">{player?.character.gold}</div>
            </div>

            {player?.character.account && (
              <div className="stat bg-gray-700">
                <div className="stat-figure text-secondary">
                  <Icon item="gold" className="h-8 w-8" />
                </div>
                <div className="stat-title">Bank account</div>
                <div className="stat-value">{player?.character.account}</div>
              </div>
            )}

            {player?.character.loan && (
              <div className="stat bg-gray-700">
                <div className="stat-figure text-secondary">
                  <Icon item="gold" className="h-8 w-8" />
                </div>
                <div className="stat-title">Bank loan</div>
                <div className="stat-value">{player?.character.loan}</div>
              </div>
            )}
          </div>

          <div className="stats gap-4 mt-4">
            <div className="stat bg-gray-700">
              <div className="stat-figure text-secondary">
                <Icon item="calendar" className="h-8 w-8" />
              </div>
              <div className="stat-title">Has been playing for</div>
              <div className="stat-value">{player?.character.day} days</div>
            </div>

            <div className="stat bg-gray-700">
              <div className="stat-figure text-secondary">
                <Icon item="calendar" className="h-8 w-8" />
              </div>
              <div className="stat-title">Current date</div>
              <div className="stat-value">{currentDate}</div>
            </div>
          </div>

          <div className="card-actions justify-end mt-4">
            <Link href="/inventory">
              <button className="btn btn-primary btn-sm">Inventory</button>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  getLoggedInServerSideProps(context)

export default Status
