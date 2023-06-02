import { useQRCode } from "next-qrcode"

import DefaultLayout from "@/components/layouts/default"
import { useGetPlayer } from "@/hooks/queries/usePlayer"

const Settings = () => {
  const { data: player } = useGetPlayer()
  const { SVG } = useQRCode()

  if (!player) {
    return <p>Access denied</p>
  }

  return (
    <DefaultLayout>
      <h1 className="text-3xl font-serif text mb-6">Settings</h1>

      <div className="w-full flex flex-col gap-4 max-w-xl">
        <p className="mb-4">
          Your account were created{" "}
          {new Date(player?.createdDate).toLocaleDateString()}.
        </p>

        <h2 className="font-serif text-2xl">Save your game</h2>

        <p>
          You will login using a user ID that is randomly created for you. This
          ID is remembered by your browser, but if you clear your browser cache
          or want to login on another device you should save your ID so that you
          can login using it.
        </p>

        <h3 className="text-xl">Your User ID</h3>

        <div className="alert alert-info">{player?.id}</div>

        <h3 className="text-xl">QR code</h3>

        <p>
          You can also download or photograph the QR code below and login with
          it using your phone camera or webcam.
        </p>

        <SVG
          text={player?.id || ""}
          options={{
            margin: 2,
            width: 300,
            color: {
              dark: "#000000",
              light: "#ffffff",
            },
          }}
        />
      </div>
    </DefaultLayout>
  )
}

export default Settings
